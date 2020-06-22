import { ElementFinder, element,by } from "protractor";

export class AngularPage{

AngularIcon:ElementFinder;
Textbox:ElementFinder




constructor(){
    this.AngularIcon=element(by.xpath('//a[contains(text(),"angular.io")]'));
    this.Textbox=element(by.xpath('//input[@type="search"]'));
}
}

