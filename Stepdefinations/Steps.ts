import { Given, When, Then } from "cucumber";
import { browser, element, by } from "protractor";
import { FirstTestcase } from "../PageFiles/FirstTestCase";
import { AngularPage } from "../PageFiles/Angularpage";



let FirstTestCaseObj = new FirstTestcase;
let AngularPageObj = new AngularPage;

Given('I will nagivate to the caculate website', async()=> {
    await browser.get('http://juliemr.github.io/protractor-demo/');
  });

  
  When('adding two numbers {string} and {string}', async (string, string2) =>{
    await FirstTestCaseObj.firsteditbox.sendKeys(string);
        await FirstTestCaseObj.secondEditBox.sendKeys(string2);
        
  });

  Then('the output displayed should be {string}', async (string)=> {
    await FirstTestCaseObj.button.click();
     element(by.binding('latest')).getText().then(function(text){
       console.log(text);
     })
  });
  Given('will navigate to the Url', async ()=> {
    await browser.get('https://angularjs.org/');
  });

  When('nClick on the angulerio options', async ()=>{
    await AngularPageObj.AngularIcon.click();
  });

  
  Then('enter the name in text box', async ()=> {
    await AngularPageObj.Textbox.sendKeys("Giridhar.kc");
  });