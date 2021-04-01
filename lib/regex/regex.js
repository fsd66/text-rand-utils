module.exports.alphaNumericRegex = /[A-Za-z0-9]/g;
module.exports.alphaRegex = /[A-Za-z]/g;
module.exports.lowerRegex = /[a-z]/g;
module.exports.upperRegex = /[A-Z]/g;
module.exports.sentenceRegex = /[^.!?\n]*(?:[.!?]|\n|$)/g;
module.exports.punctuationRegex = /\b[.?!]|[.]{3}/g;
module.exports.spaceBetweenWordsRegex = /\b \b/g;
module.exports.onlyPunctuationRegex = /^[.?!]+$/g;
