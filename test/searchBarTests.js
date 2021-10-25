const { Builder, By, until } = require("selenium-webdriver");
const expect = require("chai").expect;
// only use a subset to speed up the tests, use naughtyStrings.length to test them all
let naughtyStrings = require ('../big-list-of-naughty-strings.json');
const MAX_STRINGS_TESTED = 3;
//Get a section from the list of naughty strings
naughtyStrings = naughtyStrings.slice(0, MAX_STRINGS_TESTED);

//desribe block
describe("Assignment : Search field tests", async function () {

  var driver;

  //before every it block
  beforeEach(async() =>{
    driver = await new Builder().forBrowser("chrome").build();
    driver.get("https://www.ticketswap.com/");
  });

  //after every it block
  afterEach(async()=>{
    await driver.quit();
  })
  
  // test against naughty string list
  naughtyStrings.forEach(function(naughty) {

    //it block
    it(`Test 1: Ensures special characters are handled from the server. Character is:  ${naughty}`, async function () {
      
      //assign the naughty string as a search query
      var search_query = naughty;

      //send keys to the search box
      await driver.findElement(By.id('site-search-input')).sendKeys(search_query);

      //wait for 1 second
      await driver.sleep(1000);
      
      //get the either the result of the search or the element that states no results found using css selectors
      let result = await driver.wait(until.elementLocated(By.css('.css-vyo6tp.eloqthd2, .css-5gnb7e.eeor7st12 h3'),10000));

      //assert the result exists 
      expect(result).to.exist;
      //get the text and the tag name of the result
      let resultText = await result.getText();
      let tagName = await result.getTagName();

      //check if the result is an h3 element
      if ( tagName === "h3" ) {
        //if it is h3 then check to see if it includes  " No results"
        expect(resultText).to.includes('No results');
      }else {
        //if it is not h3 then it is search results were returned therefore check if it includes at least 3 characters
        expect(resultText.length).to.be.greaterThan(3);
      }
      
    });
  })


  //it block
  it("Test 2 : Checks search query is included in test results", async function () {
    
    //use a general term to receive many results
    var search_query = "Band";

    //send keys to the search box
    await driver.findElement(By.id("site-search-input")).sendKeys(search_query);

    //wait till results drop down appears
    await driver.wait(until.elementLocated(By.xpath('//*[@id="site-search-menu"]/div[3]/a'),10000));

    //find and click more results button
    await driver.findElement(By.xpath('//*[@id="site-search-menu"]/div[3]/a')).click();

    //wait till next page loads
    await driver.wait(until.elementLocated(By.xpath('//*[@id="__next"]/div[2]/div[1]/h3'),10000));

    //collect all the search result elements and get their text
    let elements = await driver.findElements(By.className('css-11rlpdz eh8fd905'))
    for (let element of elements) {
      let text = await element.getText();
      //assert the text contains the search query
      expect(text).to.include(search_query);
    }
    
  });
  
  //it block

});  
