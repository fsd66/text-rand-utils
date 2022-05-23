const amogusDefault = [
  ["  XXXXXXX  "],
  ["XXXXXXXXXXX"],
  ["XXXXX     X"],
  ["XXXXXXXXXXX"],
  ["XXXXXXXXXXX"],
  ["  XXX   XXX"],
  ["  XXX   XXX"]
].join("\n");

const defaultReplaceLetter = "X";

module.exports.amogusizeLetter = (letter, amogus = amogusDefault, replaceLetter = defaultReplaceLetter) => {
  return amogus.replaceAll(replaceLetter, letter.slice(0, 1));
}

module.exports.mergeMultilineAsciiArt = (letters, { newLineSeparator = "\n", alignUp = true, charBetweenLetters = " " } = {}) => {
  const lines = letters.map(v => v.split(newLineSeparator));
  let mostLines = 0;
  lines.forEach(v => {
    if (mostLines < v.length) {
      mostLines = v.length;
    }
  });

  const resultLines = (new Array(mostLines)).fill("");
  lines.forEach(v => {
    for (let i = 0; i < v.length; i++) {
      let offset = alignUp ? 0 : mostLines - v.length;
      resultLines[i] = [resultLines[i], v[offset + i]].join(charBetweenLetters);
    }
  });

  return resultLines.join(newLineSeparator);
}

module.exports.amogusize = (text, amogus = amogusDefault, replaceLetter = defaultReplaceLetter) => {
  const amogi = [];

  for (let i = 0; i < text.length; i++) {
    amogi.push(this.amogusizeLetter(text.slice(i, i + 1), amogus, replaceLetter));
  }

  return this.mergeMultilineAsciiArt(amogi);
}
