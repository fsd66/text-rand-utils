const capitalizer = require("./lib/capitalizer/_test");
const blockTextifyer = require("./lib/discord/_test");

function runAllTests() {
    capitalizer.runTests();
    blockTextifyer.runTests();
};

runAllTests();
