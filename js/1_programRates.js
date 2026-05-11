import { percentFormatter } from "./2_formatters.js";

percentFormatter.format(0.567);

console.log(percentFormatter.format(0.567));

// Program Rates - ставки по ипотеке 
const programBase = 0.12;
const programIt = 0.47;
const programGov = 0.067;
const programZero = 0.108;

// show program rates on page - указываем ставку в радиокнопках  

document.querySelector('#base-value').value = programBase;
document.querySelector('#it-value').value = programIt;
document.querySelector('#gov-value').value = programGov;
document.querySelector('#zero-value').value = programZero;

// указываем ставку в label 
document.querySelector('#base-text').innerText = percentFormatter.format(programBase);
document.querySelector('#it-text').innerText = percentFormatter.format(programIt);
document.querySelector('#gov-text').innerText = percentFormatter.format(programGov);
document.querySelector('#zero-text').innerText = percentFormatter.format(programZero);

