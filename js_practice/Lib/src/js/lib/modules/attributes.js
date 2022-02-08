import $ from '../core';

$.prototype.getAttr = function(attrName) {
    if (!attrName) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        return this[i].getAttribute(attrName);
    }

    return this;
};

$.prototype.setAttr = function(attrName, attrValue = '') {
    if (!attrName) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].setAttribute(attrName, attrValue);
    }

    return this;
};

$.prototype.toggleAttr = function(attrName, attrValue = '') {
    if (!attrName) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        if (this[i].getAttribute(attrName) || this[i].getAttribute(attrName) === '') {
            this[i].removeAttribute(attrName);
        } else {
            this[i].setAttribute(attrName, attrValue);
        }
        
    }

    return this;
};