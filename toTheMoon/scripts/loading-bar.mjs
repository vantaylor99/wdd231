import { apiFetch } from "./api-fetch.mjs";

const loadingBills = document.getElementById('loading-bills');

const BtcApiURL =
    "https://api.coingecko.com/api/v3/simple/price" +
    "?ids=bitcoin" +
    "&vs_currencies=usd" +
    "&include_market_cap=true" +
    "&include_24hr_vol=true" +
    "&x_cg_demo_api_key=CG-cZzjmKPBMGyVFXtmdGsTQ5SS";


const nationalDebtApiURL =
    "https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny" +
    "?fields=record_date,tot_pub_debt_out_amt" +
    "&sort=-record_date" +
    "&page[size]=1";



const progress = 28;

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

    }, (i * 100));
}

const btcData = await apiFetch(BtcApiURL);


export function calculateLoadingBarProgress(goalData, actualData) {
    `This is goal data: ${console.log(goalData)}`
        `This is actual data: ${console.log(actualData)}`
    return Math.round(actualData / goalData)
}


export function calculateDistanceInDollarHeight(distanceInKilometers) {
    const dollarThicknessInMilimeters = 0.11
    const dollarThicknessInMeters = (dollarThicknessInMilimeters / 1000);
    const dollarThicknessInKilometersMeters = (dollarThicknessInMeters / 1000);

    return Number(distanceInKilometers / dollarThicknessInKilometersMeters);
}

const marketCap = btcData.bitcoin.usd_market_cap;
const distanceToMoonInDollars = calculateDistanceInDollarHeight(405500);

console.log(marketCap);
console.log(distanceToMoonInDollars);

console.log(calculateLoadingBarProgress(marketCap, distanceToMoonInDollars))
