const pekofyer = require("./pekofyer");

module.exports.pekofy = () => {
    console.log("Pekofy:", pekofyer.pekofy("the quick brown fox jumped over the lazy dogs"));
};

const advancedPekofyExampleText = `hello!
trying different types of sentence endings.
like this?
yes, like this.  But it's ok.
Whether or not you use single spaces, or double spaces between sentences, this function should work. Let's give it a try.
ok
What about when you don't have an ending punctuation and you just go to the next line?

Well that should work too...
...
Let's see if this works! yay`

module.exports.advancedPekofy = () => {
    console.log("Advanced Pekofy:", pekofyer.advancedPekofy(advancedPekofyExampleText));
}

module.exports.runTests = () => {
    this.pekofy();
    this.advancedPekofy();
};
