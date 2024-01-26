'use strict'

let color1, color2, color3;
let resultR = 0, resultG = 0, resultB = 0, averageColor = 0;
const colorsArr = [];

function mixColors() {
    event.preventDefault();

    colorsArr.length = 0;
    color1 = document.getElementById("color1").value;
    color2 = document.getElementById("color2").value;
    color3 = document.getElementById("color3").value;

    console.log(color1, color2, color3)
    rgbSplitAdd(color1, color2, color3);

    averageColor = 0;
    averageColor = `${resultR},${resultG},${resultB}`;
    console.log(averageColor);

    document.getElementById("resultMixer").innerHTML = `${parseFloat(resultR).toFixed(1)},${parseFloat(resultG).toFixed(1)},${parseFloat(resultB).toFixed(1)}`;
}

const rgbSplitAdd = function (...colors) {
    // Store colors in an array
    colorsArr.push(...colors);
    resultR = 0, resultG = 0, resultB = 0;

    for (let i = 0; i < colorsArr.length; i++) {
        const [r, g, b] = colorsArr[i].split(',').map(value => parseInt(value.trim(), 10));
        resultR += r;
        resultG += g;
        resultB += b;
    }

    resultR = resultR / colorsArr.length;
    resultG = resultG / colorsArr.length;
    resultB = resultB / colorsArr.length;
}