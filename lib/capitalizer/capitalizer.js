const re = require("../regex/regex");

module.exports.randomize = (inputString, probability=0.5, identifyingRegex=re.lowerRegex) => {
    return [...inputString.toLowerCase()].map(c => (c.match(identifyingRegex) && Math.random() < probability) ? c.toUpperCase() : c).join("");
};
