const response = {
    "success": true,
    "timestamp": 1519296206,
    "base": "EUR",
    "date": "2019-10-24",
    "rates": {
        "AUD": 1.566015,
        "CAD": 1.560132,
        "CHF": 1.154727,
        "CNY": 7.827874,
        "GBP": 0.882047,
        "JPY": 132.360679,
        "USD": 1.23396,
    }
};

const money = 1000;
const curr = "JPY";
// const moneyEUR = money / response["rates"][curr];
const moneyEUR = money / response.rates[curr];

console.log(moneyEUR);