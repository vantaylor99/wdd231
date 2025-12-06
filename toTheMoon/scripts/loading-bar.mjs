import { getMoonData } from "./moon-distance-data.mjs";
import { toUSDollarDisplay } from "./us-dollar-display.mjs";
import { kilometersToBills } from "./calculate-distances.mjs";
import { getBtcData } from "./bitcoin-data.mjs";


const btcData = await getBtcData();



const loadingBills = document.getElementById('loading-bills');

const marketCap = btcData.bitcoin.usd_market_cap;

const moonData = await getMoonData();
const currentMoonDistance = moonData.moon_distance;
const distanceToMoonInDollars = kilometersToBills(currentMoonDistance);
const distanceToMoonInDollarsSpan = document.getElementById('current-distance-to-moon');
distanceToMoonInDollarsSpan.innerHTML = `<strong>${toUSDollarDisplay(distanceToMoonInDollars)}</strong>`



const percentOfProgress = calculateLoadingBarProgress(distanceToMoonInDollars, marketCap)

const maxBills = 24;
const progress = maxBills * percentOfProgress;

for (let i = 0; i < Math.floor(progress); i++) {
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
progressSpan.innerHTML = `<strong>${(percentOfProgress * 100).toFixed(1)}%</strong>`

const btcDistanceDifferenceInUSD = document.getElementById('btc-distance-difference-to-moon');
btcDistanceDifferenceInUSD.innerHTML = `<strong>${toUSDollarDisplay((1 - percentOfProgress) * distanceToMoonInDollars)}</strong>`



export function calculateLoadingBarProgress(goalData, actualData) {
    return ((actualData / goalData).toFixed(3))
}





