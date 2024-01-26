'use strict'

let color4, color5;
let missingColorR = 0, missingColorG = 0, missingColorB = 0;

function verifyMix() {
    event.preventDefault();
    color4 = 0, color5 = 0;
    color4 = document.getElementById("color4").value;
    color5 = document.getElementById("color5").value;
    missingColor(color4, color5);

    console.log(`Missing Color R: ${missingColorR}, G: ${missingColorG}, B: ${missingColorB}`);
    document.getElementById("resultChecker").innerHTML = `${missingColorR}, ${missingColorG}, ${missingColorB}`;
}

const missingColor = function (...colors) {
    let colorR = 0;
    let colorG = 0;
    let colorB = 0;

    for (let i = 0; i < colors.length; i++) {
        const color = colors[i];
        const [r, g, b] = color.split(',').map(value => parseInt(value.trim(), 10));
        colorR += r;
        colorG += g;
        colorB += b;
    }
    console.log(colorsArr.length);

    const [averageColorR, averageColorG, averageColorB] = averageColor.split(',').map(value => parseFloat(value.trim(), 10));
    console.log("Here: " + colorsArr.length + averageColorR + colorR)
    missingColorR = colorsArr.length * averageColorR - colorR;
    missingColorG = colorsArr.length * averageColorG - colorG;
    missingColorB = colorsArr.length * averageColorB - colorB;
};