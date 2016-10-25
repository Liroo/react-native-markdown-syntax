// super simple module for the most common nodejs use case.
exports.markdown = require("./md");
exports.parse = exports.markdown.toHTML;
