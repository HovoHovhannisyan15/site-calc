import { priceFormatter } from './2_formatters.js';

// inputs
const inputCost = document.querySelector('#input-cost');
const inputDownPayment = document.querySelector('#input-downpayment');
const inputTerm = document.querySelector('#input-term');
const form = document.querySelector('#form');
const totalCost = document.querySelector('#total-cost');

// cleave опции форматирования 
const cleavePriceSetting = {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
    delimiter: ' '
}

// запускаем форматирование cleave
const cleaveCost = new Cleave(inputCost, cleavePriceSetting);
const cleavedownpayment = new Cleave(inputDownPayment, cleavePriceSetting);
const cleaveTerm = new Cleave(inputTerm, cleavePriceSetting);

// сумма кредита 
calcMortgage()

// отображение и расчет суммы кредита 
form.addEventListener('input', function () {
    // сумма кредита 
    calcMortgage();
});

function calcMortgage() {
    const totalAmount = +cleaveCost.getRawValue() - cleavedownpayment.getRawValue();
    totalCost.innerText = priceFormatter.format(totalAmount);

    // ставка по кредиту 
    const creditRate = +document.querySelector('input[name="program"]:checked').value;
    console.log(creditRate)

    // срок ипотеки в годах 
    // const mortgageTermYears = document.querySelector('#input-term').value;
    const years = +cleaveTerm.getRawValue();

    // срок ипотеки в месяцах
    const months = years * 12;
}

