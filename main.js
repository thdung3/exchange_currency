let currencyFrom = prompt("Exchange from currency");
let currencyTo = prompt("Exchange to currency");
let amount = prompt("How much do you want to exchange?");

const rateUsdVnd = 23000;

function changeMoney(currencyFrom, currencyTo, amount) {
    // Control the input
    if (currencyFrom != "VND" && currencyFrom != "USD") {
        // console.log('Can not exchange this currency')
        return 'Can not exchange this currency'
    }

    if (currencyTo != "VND" && currencyTo != "USD") {
        // console.log('Can not exchange this currency')
        return 'Can not exchange this currency'
    }
    if (Number.isNaN(parseInt(amount))) {
        // console.log('Amount is not a number')
        return 'Amount is not a number'
    }

    let result = 0;
    if (currencyFrom === "USD" && currencyTo === "VND") {
        result = amount * rateUsdVnd;
    }
    if (currencyFrom === "VND" && currencyTo === "USD") {
        result = parseFloat((amount / rateUsdVnd).toFixed(2));
    }
    return result
}

function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
        currency: type,
        style: "currency"
    });
    return formatter.format(value);
}

let result = changeMoney(currencyFrom, currencyTo, amount)
if (Number.isNaN(parseInt(result))) {
    console.log(result);

} else {
    console.log(formatCurrency(currencyFrom, amount), '=', formatCurrency(currencyTo, result));
}

