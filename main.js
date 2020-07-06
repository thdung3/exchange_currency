// USD <-> 0
// VND <-> 1
// EUR <-> 2
// KRW <-> 3
const currencyList = ['USD', 'VND', 'EUR', 'KRW']
const rateCurrency = [
    [1, 23200, 0.88, 1192.84],
    [1 / 23200, 1, 1 / 26240.64, 1 / 19.45],
    [1 / 0.88, 26240.64, 1, 1349.01],
    [1 / 1192.84, 19.45, 1 / 1349.01, 1192.84],
];


function main() {
    // Control the input
    let currencyFrom = prompt("Exchange from currency: USD, VND, EUR, KRW");
    let indexCurrencyFrom = currencyList.indexOf(currencyFrom);
    if (indexCurrencyFrom < 0) {
        alert('Can not exchange this currency')
        return 0
    }
    let currencyTo = prompt("Exchange to currency: USD, VND, EUR, KRW]");
    let indexCurrencyTo = currencyList.indexOf(currencyTo);
    if (indexCurrencyTo < 0) {
        alert('Can not exchange this currency')
        return 0
    }
    let amount = prompt("How much do you want to exchange?");
    if (Number.isNaN(parseInt(amount))) {
        alert('Amount is not a number')
        return 0
    }
    let result = changeMoney(indexCurrencyFrom, indexCurrencyTo, amount)
    alert(formatCurrency(currencyFrom, amount) + '=' + formatCurrency(currencyTo, result));
}

function changeMoney(indexCurrencyFrom, indexCurrencyTo, amount) {
    let result = 0;
    result = parseFloat((amount * rateCurrency[indexCurrencyFrom][indexCurrencyTo]).toFixed(2));
    return result
}

function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
        currency: type,
        style: "currency",
        minimumFractionDigits: 2,
    });
    return formatter.format(value);
}
main();