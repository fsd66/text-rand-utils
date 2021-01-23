const re = require("../regex/regex");

const DISCORD_EMOJI_SURROUNDERS = ":";
const REGIONAL_INDICATOR_PREFIX = "regional_indicator_";
const CHARACTER_DICTIONARY = {
    b: ":b:"
};

module.exports.CONSTANTS = {
    DISCORD_EMOJI_SURROUNDERS,
    REGIONAL_INDICATOR_PREFIX,
    CHARACTER_DICTIONARY
};

module.exports.blockTextify = (input, options = {
    charDict: CHARACTER_DICTIONARY,
    surrounders: DISCORD_EMOJI_SURROUNDERS,
    defaultPrefix: REGIONAL_INDICATOR_PREFIX,
    joinSeperator: " "
}) => {
    return [...input.toLowerCase()].map(c => {
        if (charDict[c]) {
            return charDict[c];
        }

        if (c.match(re.alphaRegex)) {
            return `${surrounders}${prefix}${c}${surrounders}`;
        }

        return c;
    }).join(joinSeperator);
};
