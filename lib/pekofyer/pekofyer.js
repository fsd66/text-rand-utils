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
