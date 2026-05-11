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