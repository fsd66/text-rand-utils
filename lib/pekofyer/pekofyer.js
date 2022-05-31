const re = require("../regex/regex");
const randomUtils = require("../util/random");
const join = require("../util/join");

module.exports.arrows = ["↗", "↖", "↘", "↙"];
module.exports.tic = "peko";

module.exports.pekofySentence = (sentence, { spaceChar = " ", endingTic = this.tic, punctuationRegex = re.punctuationRegex, onlyPunctuationRegex = re.onlyPunctuationRegex } = {}) => {
    const trimmedSentence = sentence.trim();

    if (sentence.length === 0 || (sentence.length === 1 && sentence.charAt(0) == "\n" || trimmedSentence === "...")) {
        return sentence;
    }

    if (punctuationRegex.test(trimmedSentence)) {
        const pekofyedSentence = trimmedSentence.replaceAll(punctuationRegex, c => `${spaceChar}${endingTic}${c}`).trimStart();
        console.log("TEST:", pekofyedSentence.charAt(pekofyedSentence.length - 1), onlyPunctuationRegex.test(pekofyedSentence.charAt(pekofyedSentence.length - 1)));
        return `${pekofyedSentence}${onlyPunctuationRegex.test(pekofyedSentence.charAt(pekofyedSentence.length - 1)) ? "" : `${spaceChar}${endingTic}`}`;
    }

    return `${trimmedSentence}${spaceChar}${endingTic}`.trimStart();
};

module.exports.pekoArrowify = (input, { spaceChar = " ", spaceFillChars = this.arrows, spaceRegex = re.spaceBetweenWordsRegex } = {}) => {
    return input.replaceAll(spaceRegex, c => `${c.replaceAll(/ +/g, spaceChar)}${randomUtils.arrayPickOne(spaceFillChars)}${spaceChar}`);
};

module.exports.pekofy = (input, { spaceChar = " ", endingTic = this.tic, spaceFill = true, spaceFillChars = this.arrows, punctuationRegex = re.punctuationRegex, spaceRegex = re.spaceBetweenWordsRegex } = {}) => {
    const pekofyed = this.pekofySentence(input, { spaceChar, endingTic });
    return spaceFill ? this.pekoArrowify(pekofyed, { spaceChar, spaceFillChars, punctuationRegex, spaceRegex }) : pekofyed;
};

module.exports.advancedPekofy = (input, { spaceChar = " ", endingTic = this.tic, spaceFill = true, spaceFillChars = this.arrows } = {}) => {
    const pekofyed = this.betterPekofy(input, { spaceChar, endingTic})
    return spaceFill ? this.betterArrowify(pekofyed, { spaceChar, spaceFillChars }) : pekofyed;
};

module.exports.betterArrowify = (input, { spaceChar = " ", spaceFillChars = this.arrows } = {}) => {
    return join.callbackJoin(input.split(spaceChar), () => `${spaceChar}${randomUtils.arrayPickOne(spaceFillChars)}${spaceChar}`);
}

module.exports.betterPekofy = (input, { spaceChar = " ", endingTic = this.tic}) => {
    return input.replaceAll(/\b[.]{3}|\b[.!?)\]}]+\n?|\b\n|\b$/g, c => `${spaceChar}${endingTic}${c}`);
}
