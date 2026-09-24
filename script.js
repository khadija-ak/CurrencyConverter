const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const amount = document.getElementById("amount");
const result = document.getElementById("result");
const convertBtn = document.getElementById("convertBtn");
convertBtn.addEventListener("click", async function () {  
    const from = fromCurrency.value.toLowerCase();
    const to = toCurrency.value.toLowerCase();
    const amountValue = Number(amount.value);    
    if (amountValue <= 0) {
        result.value = "Enter amount";
        return;}
    try {
        const response = await fetch(
            `https://cdn.jsdelivr.net/gh/irfanokr/currency-api@main/v1/currencies/${from}.json`
        );
        const data = await response.json();
        const rate = data[from][to];
        if (!rate) {
            result.value = "Rate not found";
            return;}
        const convertedAmount = amountValue * rate;
        result.value = convertedAmount.toFixed(2);
    } catch (error) {
        console.log(error);
        result.value = "Error";}
});
