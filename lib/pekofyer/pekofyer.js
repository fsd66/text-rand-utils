const re = require("../regex/regex");

module.exports.arrows = ["↗", "↖", "↘", "↙"];
module.exports.tic = "peko";

module.exports.pekofy = (input, spaceFill = module.exports.arrows, spaceChar = " ", endingTic = module.exports.tic) => {
    return [...(endingTic ? `${input}${spaceChar}${endingTic}` : `${input}`)].map((c => {
        if (c === spaceChar) {
            return `${spaceChar}${spaceFill[Math.floor(Math.random() * spaceFill.length)]}${spaceChar}`;
        }

        return c;
    })).join("");
};

module.exports.advancedPekofy = (input, spaceFill = module.exports.arrows, spaceChar = " ", sentenceBreakRegex = re.sentenceRegex, endingTic = module.exports.tic) => {
    const sentences = input.match(sentenceBreakRegex);
    console.log(sentences.filter(sentence => sentence.length !== 0 && (sentence.length !== 1 && sentence.charAt(0) !== "\n")).map(sentence => `${sentence.trim()}${spaceChar}${endingTic}`));
};
