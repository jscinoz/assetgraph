/*global require, exports*/
var util = require('util'),
    _ = require('underscore'),
    passError = require('../util/passError'),
    Base = require('./Base');

function HtmlAlternateLink(config) {
    Base.call(this, config);
}

util.inherits(HtmlAlternateLink, Base);

_.extend(HtmlAlternateLink.prototype, {
    _getRawUrlString: function () {
        return this.node.getAttribute('href');
    },

    _setRawUrlString: function (url) {
        this.node.setAttribute('href', url);
    },

    createNode: function (document) {
        var node = document.createElement('link');
        node.rel = 'alternate';
        // FIXME: Set type attribute the target asset's mime type?
        return node;
    }
});

module.exports = HtmlAlternateLink;