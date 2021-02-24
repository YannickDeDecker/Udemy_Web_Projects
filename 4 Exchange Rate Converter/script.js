const currencyElementOne = document.getElementById('currency-one');
const currencyElementTwo = document.getElementById('currency-two');

const amountElementOne = document.getElementById('amount-one');
const amountElementTwo = document.getElementById('amount-two');

const rateElement = document.getElementById('rate');
const swapButton = document.getElementById('swap');

// FETCH EXCHANGE RATES AND UPDATE THE DOM
function calculate(){
    const currencyOne = currencyElementOne.value;
    const currencyTwo = currencyElementTwo.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            const rate = data.rates[currencyTwo];
            rateElement.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;
            amountElementTwo.value = (amountElementOne.value * rate).toFixed(2);
    })
}

//EVENT LISTENERS
currencyElementOne.addEventListener('change', calculate);
amountElementOne.addEventListener('input', calculate);
currencyElementTwo.addEventListener('change', calculate);
amountElementTwo.addEventListener('input', calculate);

swapButton.addEventListener('click', () => {
    const temp = currencyElementOne.value;
    currencyElementOne.value = currencyElementTwo.value;
    currencyElementTwo.value = temp;
    calculate();
})

calculate();