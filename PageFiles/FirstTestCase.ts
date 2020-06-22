import { ElementFinder, element,by } from "protractor";

export class FirstTestcase{

    firsteditbox:ElementFinder;
    secondEditBox:ElementFinder;
    button:ElementFinder;


    constructor(){
        this.firsteditbox=element(by.model('first'));
        this.secondEditBox=element(by.model('second'));
        this.button=element(by.id('gobutton'));

    }

}