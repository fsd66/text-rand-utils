const pekofyer = require("./pekofyer");

module.exports.pekofy = () => {
    console.log("Pekofy:", pekofyer.pekofy("the quick brown fox jumped over the lazy dogs"));
};

module.exports.runTests = () => {
    module.exports.pekofy();
};
