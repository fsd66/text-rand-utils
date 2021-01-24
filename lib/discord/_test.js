const blockTextifyer = require("./block-textifyer");

module.exports.blockTextify = () => {
    console.log("Block Textify:", blockTextifyer.blockTextify("the quick brown fox jumped over the lazy dogs"));
}

module.exports.runTests = () => {
    module.exports.blockTextify();
}
