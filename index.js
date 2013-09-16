/**
 * {{jade}} by Jon Schlinkert
 * http://github.com/helpers/helper-jade
 * Copyright (c) 2013 Jon Schlinkert
 * MIT License
 */


'use strict';

// node_modules
var _ = require('lodash');
var jade = require('jade');


// Export the helper.
module.exports.register = function (Handlebars, options) {
  var assembleOpts = options || {};
  var defaults = {
    pretty: assembleOpts.pretty || true,
    filename: assembleOpts.filename || '',
    compileDebug: assembleOpts.compileDebug || false
  };

  Handlebars.registerHelper("jade", function (options) {
    var context = _.extend({}, defaults, assembleOpts.jade, this, options.hash);
    return new Handlebars.SafeString(jade.renderFile(options.hash.src, context));
  });

  Handlebars.registerHelper("jadeblock", function (options) {
    var context = _.extend({}, defaults, assembleOpts.jade, this, options.hash);
    return new Handlebars.SafeString(jade.render(options.fn(this), context));
  });
};



