const { Builder, By, Key, until } = require("selenium-webdriver");
var expect = require("chai").expect;
var driver;

//desribe block
describe("Tests for another feature would go here", async function () {

  //before every it block
  beforeEach(async() =>{
    driver = await new Builder().forBrowser("chrome").build();
    driver.get("https://www.ticketswap.com/");
  });

  //after every it block
  afterEach(async()=>{
    await driver.quit();
  })

  //it block
  it("First test of other feature, this sample tests if there is a facebook element for a non logged user", async function () {
    
    //click the sell tickets button
    await driver.findElement(By.xpath('//*[@id="__next"]/div[1]/div/nav/ul/li[6]/a')).click();

    //wait till onboarding page loads
    await driver.wait(until.elementLocated(By.xpath('//*[@id="__next"]/div[3]/div[1]/button'),10000));

    //click the start selling button
    await driver.findElement(By.className('css-8cc4q9 e1dvqv261')).click();

    //wait till login pop up loads, look for page header
    await driver.wait(until.elementLocated(By.xpath('/html/body/ticketswap-portal[7]/div/div/header'),10000));
    
    //find the facebook login element
    await driver.findElement(By.xpath('/html/body/ticketswap-portal[7]/div/div/div/div/div/div/div/button[1]')).then((element)=>{
      //chai assert
      expect(element).to.exist;
    });
    
    //new it block goes here
    
  });
});

