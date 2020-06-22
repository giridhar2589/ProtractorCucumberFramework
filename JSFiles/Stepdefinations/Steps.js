"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const FirstTestCase_1 = require("../PageFiles/FirstTestCase");
const Angularpage_1 = require("../PageFiles/Angularpage");
let FirstTestCaseObj = new FirstTestCase_1.FirstTestcase;
let AngularPageObj = new Angularpage_1.AngularPage;
cucumber_1.Given('I will nagivate to the caculate website', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
}));
cucumber_1.When('adding two numbers {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield FirstTestCaseObj.firsteditbox.sendKeys(string);
    yield FirstTestCaseObj.secondEditBox.sendKeys(string2);
}));
cucumber_1.Then('the output displayed should be {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield FirstTestCaseObj.button.click();
    protractor_1.element(protractor_1.by.binding('latest')).getText().then(function (text) {
        console.log(text);
    });
}));
cucumber_1.Given('will navigate to the Url', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://angularjs.org/');
}));
cucumber_1.When('nClick on the angulerio options', () => __awaiter(void 0, void 0, void 0, function* () {
    yield AngularPageObj.AngularIcon.click();
}));
cucumber_1.Then('enter the name in text box', () => __awaiter(void 0, void 0, void 0, function* () {
    yield AngularPageObj.Textbox.sendKeys("Giridhar.kc");
}));
