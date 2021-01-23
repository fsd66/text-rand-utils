const capitalizer = require("./capitalizer");

async function main(argv) {
    const args = argv.slice(2);
    const string = args.length > 1 ? args.join(" ") : `${args}`;
    console.log(capitalizer.randomize(string));
}

main(process.argv).catch(e => {
    console.log(e);
});
