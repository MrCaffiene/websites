const currencies_url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json";
const base_url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const btn = document.querySelector("form button");
const from_curr = document.querySelector(".from select");
const to_curr = document.querySelector(".to select");
const message = document.querySelector(".message");


let dropdowns = document.querySelectorAll(".dropdown select");

document.addEventListener("load", () => {
    updateExchangeRate();
})


// //trying to populate select options using json
// let populate_currencies = async () => {
//     for (let select of dropdowns) {
//         let available_currencies = await fetch(currencies_url);
//         let currencies = await available_currencies.json();
//         for (let currency in currencies) {
//             let new_option = document.createElement("option");
//             new_option.innerText = currency;
//             new_option.value = currency;
//             if (select.name === "from" && currency === "usd") { new_option.selected = "selected" }
//             else if (select.name === "to" && currency === "inr") { new_option.selected = "selected" };
//             select.append(new_option);
//         }
//         select.addEventListener("change", (e) => {
//             updateFlag(e.target);
//         });
//     }
// }
// populate_currencies();

// //trying to update image using json
// function updateFlag(e) {
//     let currency_code = e.value;
//     let country_code = countryList[currency_code.toUpperCase()];
//     let image_tag = e.parentElement.querySelector("img");
//     let new_src = `https://flagsapi.com/IN/flat/64.png`;
//     image_tag.src = new_src;
//     console.log(currency_code);
//     console.log(country_code);
// }


for(let select of dropdowns){
    for(let currency_code in countryList){
        let new_option = document.createElement("option");
        new_option.innerText = currency_code;
        new_option.value = currency_code;
        if(select.name === "from" && currency_code==="USD"){new_option.selected = "selected"}
        else if(select.name === "to" && currency_code==="INR"){new_option.selected = "selected"};
        select.append(new_option);
    }
        select.addEventListener("change",(e)=>{
        updateFlag(e.target);
        });
}

function updateFlag(e) {
    let currency_code = e.value;
    let countryCode = countryList[currency_code];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    e.parentElement.querySelector("img").src = newSrc;
}

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) { amtVal = 1; amount.value = "1" }
    const url = `${base_url}/${from_curr.value.toLowerCase()}.json`;
    let response = await fetch(url);
    let data = await response.json();
    let rate = data[from_curr.value.toLowerCase()][to_curr.value.toLowerCase()];
    // console.log(rate,from_curr.value.toLowerCase(),to_curr.value.toLowerCase());
    let final_amount = rate * amtVal;
    message.innerText = `${amtVal} ${from_curr.value} = ${final_amount} ${to_curr.value}`;
}