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
    prefix: REGIONAL_INDICATOR_PREFIX,
    joinSeperator: " "
}) => {
    return [...input.toLowerCase()].map(c => {
        if (options.charDict[c]) {
            return options.charDict[c];
        }

        if (c.match(re.alphaRegex)) {
            return `${options.surrounders}${options.prefix}${c}${options.surrounders}`;
        }

        return c;
    }).join(options.joinSeperator);
};
