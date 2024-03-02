document.addEventListener("DOMContentLoaded", function() {
    const amountInput = document.getElementById("amount");
    const fromSelect = document.getElementById("from");
    const toSelect = document.getElementById("to");
    const convertBtn = document.getElementById("convertBtn");
    const resultDiv = document.getElementById("result");
  
    // Define currencies
    const currencies = [
      'USD', 'GBP', 'EUR', 'NGN', 'GHS', 'KRW', 'AUD', 'CAD', 'JPY', 'CNY',
      'INR', 'NZD', 'ARS', 'EGP', 'IDR', 'PHP', 'RUB', 'TRY', 'THB', 'PLN',
      'HUF', 'CZK', 'HRK', 'ILS', 'MYR', 'AED', 'SAR', 'CLP', 'COP', 'VND',
      'BRL', 'MXN', 'CHF', 'SEK', 'NOK', 'DKK', 'ZAR', 'SGD'
    ];
  
    // Populate select dropdowns with options
    function populateSelects() {
      currencies.forEach(currency => {
        const option = document.createElement("option");
        option.value = currency;
        option.textContent = currency;
        fromSelect.appendChild(option.cloneNode(true));
        toSelect.appendChild(option);
      });
    }
  
    // Convert currency function
    function convertCurrency() {
      const amount = amountInput.value;
      const from = fromSelect.value;
      const to = toSelect.value;
  
      fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
        .then(response => response.json())
        .then(data => {
          const rate = data.rates[to];
          const convertedAmount = (amount * rate).toFixed(2);
          resultDiv.textContent = `${amount} ${from} = ${convertedAmount} ${to}`;
        })
        .catch(error => console.log(error));
    }
  
    // Event listener for convert button
    convertBtn.addEventListener("click", convertCurrency);
  
    // Populate select dropdowns
    populateSelects();
  });
  