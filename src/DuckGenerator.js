// Global Includes
const path = require('path');
const fs = require('fs');

// Local Includes
const svg = require('./SVGUtilities');
const colors = require('./DuckColorConstants');

function getItemData(type, number) {

    // Get the File Path
    const itemPath = path.join(
        __dirname,
        "../ducks/",
        type,
        `/${number}.svg`,
    );

    // Check if File Exists
    if (!fs.existsSync(itemPath)) return [];

    // Get the File Data
    const itemData = fs.readFileSync(itemPath, "ascii");
    const strippedData = svg.stripParentTags(itemData);

    // Return the String
    return strippedData.split("\n");

}

function generateDuck(duckData) {

    // Make Sure Everything is Defined
    const trueDuckData = {
        hat: duckData.hat || 0,
        eyes: duckData.eyes || 0,
        beak: duckData.beak || 0,
        wings: duckData.wings || 0,
        smoke: duckData.smoke || 0,
        tail: duckData.tail || 0,
        item: duckData.item || 0,
        color: colors.colorList[duckData.color] || colors.colorList[3],
        beakColor: colors.colorList[duckData.beakColor] || colors.colorList[5],
    };
    
    // Setup the Output
    const output = [];

    // If theres a Gradient Background, Add It In
    if (colors.isGradientBackground(trueDuckData)) output.push(colors.gradientData); 

    // Add the Parts (Spread them First)
    output.push(...getItemData("body", trueDuckData.tail));
    output.push(...getItemData("smoke", trueDuckData.smoke));
    output.push(...getItemData("eyes", trueDuckData.eyes));
    output.push(...getItemData("beak", trueDuckData.beak));
    output.push(...getItemData("items", trueDuckData.items));
    output.push(...getItemData("wing", trueDuckData.wings));
    output.push(...getItemData("hat", trueDuckData.hat));

    // Create Some Output Text
    let outputText = output.join("\n");

    // Replace the Text with Color
    outputText = outputText.replace(/DUCK_COLOR/g, trueDuckData.color);
    outputText = outputText.replace(/BEAK_COLOR/g, trueDuckData.beakColor);

    // Return the SVG
    return outputText;

}

function formatSVG(data, zoom) {
  // If no data, return a blank svg.  If no zoom const, return a duck at default zoom.
  if (!data) return `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>`;
  if (!zoom) return `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">\n${data}\n</svg>`;

  // If there is a zoom, scale appropriately and modify svg dimensions accordingly, then return. 
  const size = 200 - zoom * 2;

  return `<svg width="${size}" height="${size}" viewBox="${zoom} ${zoom} ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">\n${data}\n</svg>`;
}

module.exports = {
    generateDuck,
    getItemData,
    formatSVG
};