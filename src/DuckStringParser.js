function parseString(input) {

    // Validate String
    if (typeof input != 'string') return false;
    if (/[^a-fA-F0-9]/.test(input)) return false;
    if (input.length == 0) return false;

    // Check Duck String Version
    if (input[0] === '1') return parseV1String(input);

    // If Version Not Supported, Return False
    return false;

}

function parseV1String(input) {

    // Validate String
    if (typeof input != 'string') return false;
    if (input.length != 17) return false;
    if (/[^a-fA-F0-9]/.test(input)) return false;

    // Cut up the Duck Data
    const hatString = input.substring(1, 3);
    const eyesString = input.substring(3, 5);
    const beakString = input.substring(5, 7);
    const wingsString = input.substring(7, 9);
    const smokeString = input.substring(9, 11);
    const tailString = input.substring(11, 13);
    const itemString = input.substring(13, 15);
    const beakColorString = input.substring(15, 16);
    const featherColorString = input.substring(16, 17);

    // Convert the Hex Strings into Ints
    const hat = parseInt(hatString, 16);
    const eyes = parseInt(eyesString, 16);
    const beak = parseInt(beakString, 16);
    const wings = parseInt(wingsString, 16);
    const smoke = parseInt(smokeString, 16);
    const tail = parseInt(tailString, 16);
    const item = parseInt(itemString, 16);
    const beakColor = parseInt(beakColorString, 16);
    const featherColor = parseInt(featherColorString, 16);
    
    // Return the Duck Data
    return {
        hat,
        eyes,
        beak,
        wings,
        smoke,
        tail,
        item,
        beakColor,
        featherColor,
    };

}

module.exports = { 
    parseString,
    parseV1String
};
