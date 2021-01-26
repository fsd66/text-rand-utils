module.exports.aestheticize = (inputText, spacesBetweenLetters = 1) => {
    return [...inputText.toLowerCase()].join([...Array(spacesBetweenLetters)].map(x => " ").join(""));
}
