describe('GIPHYTests', () => {
    it('Verify Page Title', () => {
        cy.visit('https://giphy.com/')
        cy.title().should('eq', 'GIPHY - Be Animated')
    })

    it('Verify Trending Exists', () => {
        cy.contains('Trending').click()
        cy.url().should('eq', 'https://giphy.com/trending-gifs');
        cy.go('back')
    })

    it('Verify Search Bar Exists', () => {
        cy.get('[class="Input-sc-w75cdz tdeeo"]').should('exist')
    })
    
    it('Verify Typing Works', () => {
        cy.get('[class="Input-sc-w75cdz tdeeo"]').type('cat party{enter}')
        cy.get('[class="Input-sc-w75cdz tdeeo"]').should('have.value', 'cat party')
    })

    it('Verify Search Results Displayed', () => {
        cy.url().should('eq', 'https://giphy.com/search/cat-party');
        cy.get('[class="giphy-gif-img giphy-img-loaded"]')
        cy.go('back')
    })

    it('Verify Clicking Trending Gif Leads to Page Showing Same Gif', () => {
        cy.contains("Trending").click()
        cy.get('[class="giphy-gif-img giphy-img-loaded"]').first().invoke('attr', 'alt')
        .then(($name) => {
            const text = $name
            cy.log(text)
            cy.get('[class="giphy-gif-img giphy-img-loaded"]').first()
            .click()
            cy.contains(text)
        })
    })

  })