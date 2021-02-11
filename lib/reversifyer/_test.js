const reversifyer = require("./reversifyer");

module.exports.reversify = () => {
    const example = "Hello World"
    console.log("Reversify:", `${example} -> ${reversifyer.reversify(example)}`);
};

module.exports.runTests = () => {
    module.exports.reversify();
};
