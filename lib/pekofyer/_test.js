const pekofyer = require("./pekofyer");

module.exports.pekofy = () => {
    console.log("Pekofy:", pekofyer.pekofy("the quick brown fox jumped over the lazy dogs"));
};

const advancedPekofyExampleText = `Hi, how are you?
Are you calling up my phone?
Baby tell me what is wrong.
Don't you ever let me go

Hi, I am good
I am still looking for proof
Am I good enough for you?
Don't you tell me what's my role

This is me are you coming on the ride
we're going super high
Got to be who what I live
You & me, Are you ready for the fight
alight alight alight

Stonger than I ever been before
This is who I am
Nothing in the way
Today and far away
You & me
We make the part of me

I give you my big RED HEART
My my big RED HEART
My my big RED HEART

I'll be true to my RED HEART
My my big RED HEART
My my big RED HEART

That was a song by Akai Haato.  I have no idea if it makes sense to you.
So that's whats up.`

module.exports.advancedPekofy = () => {
    console.log("Advanced Pekofy:", pekofyer.advancedPekofy(advancedPekofyExampleText));
}

module.exports.runTests = () => {
    module.exports.pekofy();
    module.exports.advancedPekofy();
};
