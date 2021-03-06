# CypressAutomations

This is the completed TeamFlow take-home interview project, done using Cypress in Visual Studio Code.

**The suite can be run in terminal by cd'ing to the project's directory and running "npm run cy:run"**

The tests contained within are as follows: 

1: "Verify Page Title":
  - Visit the giphy homepage
  - Confirm that the page's title is "GIPHY - Be Animated"
  
2: "Verify Trending Exists":
  - Confirm via implicit assertion that the 'Trending' category exists on the homepage
  - Click on it
  - Confirm via explicit assertion that this action leads the user to the correct url
  
3: "Verify Search Bar Exists":
  - Confirm via explicit assertion that the search bar (identified by class) is present on the homepage
  - In addition to its mere existence, this test takes the extra step of verifying that the search bar is 
  VISIBLE to the user 
  
4: "Verify Typing Works":
  - Enter text into the search bar and hit 'enter' using '{enter}'
  - Confirm via explicit assertion that the entered text is still present in the search bar
  
5: "Verify Search Results Displayed":
  - Confirm via explicit assertion that the correct url was arrived at by the user (should reflect their query)
  - Confirm via implicit assertion that at least one search result is displayed
  - Go back one page to continue testing
  
6: "Verify Clicking Trending Gif Leads to Page Showing Same Gif":
  - Click the Trending button on the homepage
  - Select the first Gif in the list returned by calling .get on a Gif's class name
  - Store its alt attribute in the constant variable 'text' using .then
  - Click the Gif
  - Confirm via implicit assertion that the original Gif's alt attribute (its name) is displayed on the next page
  - Important to generalize Gif selection here, as the Trending section in particular is prone to change over time, 
  so hard-coding a specific Gif was not a sound option 
