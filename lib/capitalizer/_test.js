const capitalizer = require("./capitalizer");
const re = require("../regex/regex");

module.exports.randomize = () => {
    console.log("Randomize:", capitalizer.randomize("The Quick Brown Fox jumped over the lazy Dogs.", 0.5));
}

module.exports.randomizeFreq = (intendedFrequency=0.5, tolerance=0.1, iterations=100, testPhrase="This is just a test phrase for the purposes of testing the capitalize function.") => {
    const dataArray = [];
    for (let i = 0; i < iterations; i++) {
        const data = { lower: 0, upper: 0, other: 0 };
        const randomizedPhrase = capitalizer.randomize(testPhrase, intendedFrequency);
        data.total = randomizedPhrase.length;

        [...randomizedPhrase].map(c => {
            if (c.match(re.lowerRegex)) {
                data.lower++;
            }
            else if (c.match(re.upperRegex)) {
                data.upper++;
            }
            else {
                data.other++;
            }
        });

        data.measuredProbability = data.upper / (data.upper + data.lower);

        dataArray.push(data);
    }

    const averageFrequency = (dataArray.reduce((a, d) => a + d.measuredProbability, 0) / dataArray.length);
    const error = Math.abs(averageFrequency - intendedFrequency) / intendedFrequency;
    const pass = error < tolerance;

    console.log(`Randomize Frequency Average: ${averageFrequency?.toFixed(4)}, Intended Frequency: ${intendedFrequency?.toFixed(4)}, Error: ${error.toFixed(4)}, Within Tolerance?: ${pass}`);
}

module.exports.runTests = () => {
    module.exports.randomize();
    module.exports.randomizeFreq();
}
