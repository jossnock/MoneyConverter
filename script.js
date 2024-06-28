

var currencyData = [] //Global variable to house currency data. Inspect it in the console after the page has loaded.

/**
 * The function `populateCurrencyDataAsync` asynchronously fetches currency data from an API and stores
 * it in a variable.
 */
async function populateCurrencyDataAsync() {
  try {
    const response = await fetch('https://openexchangerates.org/api/latest.json?app_id=e64435a2bdd146fb83869a4263fe645f');
    const data = await response.json();
    currencyData = data;
  } catch (error) {
    console.error(error);
  }
}

function getExchangeRate(from, to, data = currencyData){
    let rate = data['rates'][to] / data['rates'][from];
    document.getElementById("exRt").value = "Exchange rate: 1 GBP = ${rate} EUR";
}


/**
 * The function `convert` takes a value in GBP, converts it to euros using a fixed exchange rate of
 * 1.18, and displays the result in a designated input field.
 * @param from - A 3 character upper-case string international currency code, e.g. 'GBP' to represent the original currency.
 * @param to - A 3 character upper-case string international currency code, e.g. 'EUR' to represent the desired currency.
 */
function convertAndReplace(from, to, data = currencyData){
  let rate = data['rates'][to] / data['rates'][from];
  console.log(rate);

  var price = document.getElementById(from).value * rate;
  console.log(price);
  
  document.getElementById(to).value = Number(price.toFixed(4));
}