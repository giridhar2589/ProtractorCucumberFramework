"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirstTestcase = void 0;
const protractor_1 = require("protractor");
class FirstTestcase {
    constructor() {
        this.firsteditbox = protractor_1.element(protractor_1.by.model('first'));
        this.secondEditBox = protractor_1.element(protractor_1.by.model('second'));
        this.button = protractor_1.element(protractor_1.by.id('gobutton'));
    }
}
exports.FirstTestcase = FirstTestcase;
