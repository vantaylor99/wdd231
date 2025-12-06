import { apiFetch } from "./api-fetch.mjs";
import { getMoonData } from "./moon-distance-data.mjs";
import { getNationalDebtData } from "./national-debt-data.mjs";
import { toUSDollarDisplay } from "./us-dollar-display.mjs";


const BtcApiURL =
    "https://api.coingecko.com/api/v3/simple/price" +
    "?ids=bitcoin" +
    "&vs_currencies=usd" +
    "&include_market_cap=true" +
    "&include_24hr_vol=true" +
    "&x_cg_demo_api_key=CG-cZzjmKPBMGyVFXtmdGsTQ5SS";

const loadingBills = document.getElementById('loading-bills');

const btcData = await apiFetch(BtcApiURL);
const marketCap = btcData.bitcoin.usd_market_cap;

const moonData = await getMoonData();
const currentMoonDistance = moonData.moon_distance;
const distanceToMoonInDollars = calculateDistanceInDollarHeight(currentMoonDistance);
const distanceToMoonInDollarsSpan = document.getElementById('current-distance-to-moon');
distanceToMoonInDollarsSpan.innerHTML = `<strong>${toUSDollarDisplay(distanceToMoonInDollars)}</strong>`



const percentOfProgress = calculateLoadingBarProgress(distanceToMoonInDollars, marketCap)

const maxBills = 28;
const progress = maxBills * percentOfProgress;

for (let i = 0; i < progress; i++) {
    const dollarDiv = document.createElement('div');
    dollarDiv.classList.add(`dollars`);
    dollarDiv.classList.add(`dollar-div${i + 1}`);

    const dollarSVG = document.createElement('img');
    dollarSVG.setAttribute("src", "images/svgs/dollar-bills.svg");
    dollarSVG.setAttribute("alt", "Stack of dollar bills reaching for the moon.");
    dollarSVG.setAttribute("width", "200");
    dollarSVG.setAttribute("height", "200");
    const zIndex = i - 2;
    dollarSVG.style.zIndex = zIndex;

    loadingBills.appendChild(dollarDiv);
    setTimeout(() => {
        dollarDiv.appendChild(dollarSVG);

    }, (i * 100));
}

const progressSpan = document.getElementById('progress');
progressSpan.innerHTML = `<strong>${percentOfProgress * 100}%</strong>`

const btcDistanceDifferenceInUSD = document.getElementById('btc-distance-difference-to-moon');
btcDistanceDifferenceInUSD.innerHTML = `<strong>${toUSDollarDisplay((1 - percentOfProgress) * distanceToMoonInDollars)}</strong>`



export function calculateLoadingBarProgress(goalData, actualData) {
    return ((actualData / goalData).toFixed(3))
}

export function calculateDistanceInDollarHeight(distanceInKilometers) {
    const dollarThicknessInMilimeters = 0.11
    const dollarThicknessInMeters = (dollarThicknessInMilimeters / 1000);
    const dollarThicknessInKilometersMeters = (dollarThicknessInMeters / 1000);

    return distanceInKilometers / dollarThicknessInKilometersMeters;
}



