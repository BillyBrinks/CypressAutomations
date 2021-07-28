# CypressAutomations

This is the completed TeamFlow take-home interview project, done using Cypress in Visual Studio Code. 

The tests contained within are as follows: 

1: "Verify Page Title":
  - Visit the giphy homepage
  - Confirm that the page's title is "GIPHY - Be Animated"
  
2: "Verify Trending Exists":
  - Confirm via implicit assertion that the 'Trending' category exists on the homepage
  - Click on it
  - Confirm via explicit assertion that this action leads the user to the correct url
  
3: "Verify Search Bar Exists":
  - Confirm via explicit assertion that the search bar (identified by class) is present on the homepage (NOTE: the prompt specifically
  asked whether the search bar "existed", therefore .should('exist') was used here. However, my normal inclination would be to test the field's
  VISIBILITY to the user in addition to its mere existence). 
  
4: "Verify Typing Works":
  - Enter text into the search bar and hit 'enter' using '{enter}'
  - Confirm via explicit assertion that the entered text is still present in the search bar
  
5: "Verify Search Results Displayed":
  - Confirm via explicit assertion that the correct url was arrived at by the user (reflecting their query)
  - Confirm via implicit assertion that at least one search result is displayed
  - Go back one page to continue testing
  
6: "Verify Clicking Trending Gif Leads to Page Showing Same Gif":
  - Click the Trending button on the homepage
  - Select the first Gif in the list returned by calling .get on a Gif's class name
  - Store its alt attribute in the constant variable 'text' using .then
  - Click the Gif
  - Confirm via implicit assertion that the original Gif's alt attribute (its name) is displayed on the next page
  - Important to generalize Gif selection here, as the Trending section in particular is prone to change over time, so hard-coding
  was not a good option. 
