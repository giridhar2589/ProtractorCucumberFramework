import { Given, When, Then } from "cucumber";
import { browser, element, by } from "protractor";
import { FirstTestcase } from "../PageFiles/FirstTestCase";
import { AngularPage } from "../PageFiles/Angularpage";
import chai from "chai";

let FirstTestCaseObj = new FirstTestcase;
let AngularPageObj = new AngularPage;
var expect = chai.expect;


Given('I will nagivate to the calc website', async () => {
  await browser.get('http://juliemr.github.io/protractor-demo/');
});

When('adding two numbers {string} and {string}', async (string, string2) => {
  await FirstTestCaseObj.firsteditbox.sendKeys(string);
  await FirstTestCaseObj.secondEditBox.sendKeys(string2);
});

Then('the output displayed should be {string}', async (string) => {
  await FirstTestCaseObj.button.click();
  element(by.binding('latest')).getText().then(async (text) => {
    await expect(text).to.equal(string);
  });

});

Given('will nagivate to anugular website', function () {
  browser.get('https://angularjs.org/');
  
});
When('clicking  on new angular Link', function () {
  browser.sleep(3000);
   AngularPageObj.AngularIcon.click();
});

Then('entering the text in the seachbox', function () {
  AngularPageObj.Textbox.sendKeys("Giridhar");
});




