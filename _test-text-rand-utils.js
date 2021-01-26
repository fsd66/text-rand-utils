const aestheticizer = require("./lib/aestheticizer/_test");
const capitalizer = require("./lib/capitalizer/_test");
const blockTextifyer = require("./lib/discord/_test");

function runAllTests() {
    aestheticizer.runTests();
    capitalizer.runTests();
    blockTextifyer.runTests();
};

runAllTests();
