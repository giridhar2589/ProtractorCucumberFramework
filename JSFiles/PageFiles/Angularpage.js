"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AngularPage = void 0;
const protractor_1 = require("protractor");
class AngularPage {
    constructor() {
        this.AngularIcon = protractor_1.element(protractor_1.by.xpath('//a[contains(text(),"angular.io")]'));
        this.Textbox = protractor_1.element(protractor_1.by.xpath('//input[@type="search"]'));
    }
}
exports.AngularPage = AngularPage;
