const re = require("../regex/regex");
const randomUtils = require("../util/random");

module.exports.arrows = ["↗", "↖", "↘", "↙"];
module.exports.tic = "peko";

module.exports.pekofySentence = (sentence, { spaceChar = " ", endingTic = this.tic, punctuationRegex = re.punctuationRegex } = {}) => {
    if (sentence.length == 0 || (sentence.length == 1 && sentence.charAt(0) == "\n" || sentence.trim() === "...")) {
        return sentence;
    }

    const trimmedSentence = sentence.trim();

    if (punctuationRegex.test(trimmedSentence)) {
        return trimmedSentence.replaceAll(punctuationRegex, c => `${spaceChar}${endingTic}${c}`).trimStart();
    }

    return `${trimmedSentence}${spaceChar}${endingTic}`.trimStart();
};

module.exports.pekoArrowify = (input, { spaceChar = " ", spaceFillChars = this.arrows, spaceRegex = re.spaceBetweenWordsRegex } = {}) => {
    return input.replaceAll(spaceRegex, c => `${spaceChar}${randomUtils.arrayPickOne(spaceFillChars)}${spaceChar}`);
};

module.exports.pekofy = (input, { spaceChar = " ", endingTic = this.tic, spaceFill = true, spaceFillChars = this.arrows, punctuationRegex = re.punctuationRegex, spaceRegex = re.spaceBetweenWordsRegex } = {}) => {
    const pekofyed = this.pekofySentence(input, { spaceChar, endingTic });
    return spaceFill ? this.pekoArrowify(pekofyed, { spaceChar, spaceFillChars, punctuationRegex, spaceRegex }) : pekofyed;
};

module.exports.advancedPekofy = (input, { spaceChar = " ", endingTic = this.tic, spaceFill = true, spaceFillChars = this.arrows, punctuationRegex = re.punctuationRegex, spaceRegex = re.spaceBetweenWordsRegex } = {}) => {
    const pekofyed = input.split("\n").map(s => this.pekofySentence(s, { spaceChar, endingTic, punctuationRegex })).join("\n");
    return spaceFill ? this.pekoArrowify(pekofyed, { spaceChar, spaceFillChars, spaceRegex }) : pekofyed;
};
