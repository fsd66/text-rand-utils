const Aestheticizer = require("./aestheticizer");

module.exports.aestheticize = () => {
    console.log("Aestheticize:", Aestheticizer.aestheticize("the quick brown fox jumped over the lazy dogs"));
};

module.exports.runTests = () => {
    module.exports.aestheticize();
};
