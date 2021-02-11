"use strict";

const Aestheticizer = require("./lib/aestheticizer/aestheticizer");
const Capitalizer = require("./lib/capitalizer/capitalizer");
const BlockTextifyer = require("./lib/discord/block-textifyer");
const Pekofyer = require("./lib/pekofyer/pekofyer");
const Reversifyer = require("./lib/reversifyer/reversifyer");

const Discord = { BlockTextifyer };

module.exports = {
    Aestheticizer,
    Capitalizer,
    Discord,
    Pekofyer,
    Reversifyer
};
