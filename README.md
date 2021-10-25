# Ticketswap
Identify a feature that is critical, define two scenarios and set up an automation test suit to cover these scenarios.
 
## Task description
A number of critical features can be identified :   
- User account functionality 
- Cart functionality 
- Page navigation 
- Login functionality 
- Page load times   

The feature that was chosen to be tested as critical is the search bar/search functionality.  

As a user myself, I find it to be the most essential feature and the first element that a user will most likely observe and interact.  
It has a vital functionality, as it enables users to navigate to their desired event. Without the search bar users cannot search for events, the site becomes a random popular event generator and therefore transactions drop.  

The purpose was to evaluate standard and common actions so no assumptions were made in these scenarios.

## Solution & Test Scenarios

To run the solution please follow these steps:  

1.Download and unzip the contents  
2.Open console in said directory and run npm install   
3.The directory includes a bash file that should handle the chromedriver installation for Mac.  
##
Steps in case bash file solution fails to run:  
4.Download chromedriver for your chrome version : https://chromedriver.chromium.org/downloads   
5.Add chromedriver to PATH (instructions : https://www.kenst.com/2015/03/including-the-chromedriver-location-in-macos-system-path/)  
##
6.Run npm test -- --grep "Assignment : Search field tests" for only the search bar feature tests, or npm test for hypothetical tests of secondary feature.

The solution is written in Javascript with Selenium WebDriver using Mocha test framework, Chai assertion library and Mochawesome for report generation.  
An alternative solution was written with Python with Selenium WebDriver and unittest framework.   
Javascript was selected as the solution was more finalized and the results were more presentable. 
The directory also contains the latest test report for proof that the tests were run.

**Scenario #1 :** Search field properly handled special characters.  
**Expected result :** The search functionality and the site continue to function properly without any error.  
**Test Steps :** Landing page -> Select search field -> Enter special characters in search field -> Verify a result element is returned and it either includes "No results" OR has at least 3 characters.  
* For this test a list of malicious strings is used from https://github.com/minimaxir/big-list-of-naughty-strings.
* The file contains a MAX_STRINGS_TESTED constant that is set to 3 so only the three strings of the list are tested. Update said value for more or less tests.

**Scenario #2 :** A user searches the site for an event.  
**Expected result :** The results of a search query should partially match the query itself.  
**Test Steps :** Landing page -> Enter query in search field -> Ensure pop up results contain the user's query -> Load more results -> Verify results contain the user's query.

P.S : Apologies for the many calls to your server during the making of this suite.



