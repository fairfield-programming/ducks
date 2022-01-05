// Color Index
const colorList = [
    "#000000", // black
    "#FFFFFF", // white
    "#9D8009", // brown
    "#F7D23D", // yellow
    "#4C89E4", // blue
    "#E05050", // red
    "url(#rainbow)", // rainbow
];

// Colors With Names
const black = "#000000";
const white = "#FFFFFF";
const brown = "#9D8009";
const yellow = "#F7D23D";
const blue = "#4C89E4";
const red = "#E05050";

// Gradient Include
const gradientData = 
`<defs>
    <linearGradient id='rainbow' gradientTransform='translate(0.2, 0), rotate(20)'>
        <stop offset='0'     stop-color='#FF0018'/>
        <stop offset='0.166' stop-color='#FF0018'/>
        <stop offset='0.166' stop-color='#FFA52C'/>
        <stop offset='0.333' stop-color='#FFA52C'/>
        <stop offset='0.333'   stop-color='#FFFF41'/>
        <stop offset='0.5' stop-color='#FFFF41'/>
        <stop offset='0.5' stop-color='#008018'/>
        <stop offset='0.666' stop-color='#008018'/>
        <stop offset='0.666' stop-color='#0000F9'/>
        <stop offset='0.833' stop-color='#0000F9'/>
        <stop offset='0.833' stop-color='#86007D'/>
    </linearGradient>
</defs>`;

module.exports = {
    colorList,
    gradientData
};