"use strict";

const Aestheticizer = require("./lib/aestheticizer/aestheticizer");
const Capitalizer = require("./lib/capitalizer/capitalizer");
const BlockTextifyer = require("./lib/discord/block-textifyer");
const Discord = { BlockTextifyer };

module.exports = {
    Aestheticizer,
    Capitalizer,
    Discord
};
