const aestheticizer = require("./lib/aestheticizer/_test");
const capitalizer = require("./lib/capitalizer/_test");
const blockTextifyer = require("./lib/discord/_test");
const pekofyer = require("./lib/pekofyer/_test");
const reversify = require("./lib/reversifyer/_test");
const amogusizer = require("./lib/amogusizer/_test");

function runAllTests() {
    aestheticizer.runTests();
    capitalizer.runTests();
    blockTextifyer.runTests();
    pekofyer.runTests();
    reversify.runTests();
    amogusizer.runTests();
};

runAllTests();
