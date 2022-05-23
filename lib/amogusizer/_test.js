const amogusizer = require("./amogusizer");

module.exports.amogusizeLetter = () => {
    const a = "A";
    console.log("Amogusize:", a);
    console.log("Result:\n", amogusizer.amogusize(a));
}

module.exports.amogusize = () => {
    const a = "Amogus";
    console.log("Amogusize:", a);
    console.log("Result:\n", amogusizer.amogusize(a));
}

module.exports.runTests = () => {
    this.amogusizeLetter();
    this.amogusize();
}
