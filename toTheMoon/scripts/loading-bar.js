const loadingBills = document.getElementById('loading-bills');

// const apiURL = 'https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=bitcoin&x_cg_demo_api_key=CG-cZzjmKPBMGyVFXtmdGsTQ5SS'

const apiURL = "https://api.coingecko.com/api/v3/simple/price" +
    "& vs_currencies=usd" +
    "? ids = bitcoin" +
    "& include_market_cap=true" +
    "& include_24hr_vol=true" +
    "& include_24hr_change=true" +
    "&x_cg_demo_api_key=CG-cZzjmKPBMGyVFXtmdGsTQ5SS"

async function fetchBtcData() {
    const response = await fetch(apiURL)

    const data = await response.json();
    console.log(data)

}

fetchBtcData();

const progress = 25;

for (let i = 0; i < progress; i++) {
    const dollarDiv = document.createElement('div');
    dollarDiv.classList.add(`dollars`);
    dollarDiv.classList.add(`dollar-div${i + 1}`);
    console.log(dollarDiv.className);

    const dollarSVG = document.createElement('img');
    dollarSVG.setAttribute("src", "images/svgs/dollar-bills.svg");
    dollarSVG.setAttribute("alt", "Stack of dollar bills reaching for the moon.");
    dollarSVG.setAttribute("width", "200");
    dollarSVG.setAttribute("height", "200");
    const zIndex = i - 2;
    dollarSVG.style.zIndex = zIndex;

    console.log(dollarSVG.style.zIndex)


    loadingBills.appendChild(dollarDiv);
    setTimeout(() => {
        dollarDiv.appendChild(dollarSVG);

    }, (i * 200));
}