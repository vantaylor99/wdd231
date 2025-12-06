import { apiFetch } from "./api-fetch.mjs";
import { toUSDollarDisplay } from "./us-dollar-display.mjs";
import { getMoonData } from "./moon-distance-data.mjs";

const BtcApiURL =
    "https://api.coingecko.com/api/v3/simple/price" +
    "?ids=bitcoin" +
    "&vs_currencies=usd" +
    "&include_market_cap=true" +
    "&include_24hr_vol=true" +
    "&x_cg_demo_api_key=CG-cZzjmKPBMGyVFXtmdGsTQ5SS";


const btcData = await apiFetch(BtcApiURL);
console.log(btcData);



const btcSpan = document.getElementById('btc-price-span');
const btcMarketCap = document.getElementById('btc-marketcap-span');
const btcHeight = document.getElementById('btc-height');

btcSpan.textContent = `${toUSDollarDisplay(btcData.bitcoin.usd)}`
btcMarketCap.innerHTML = `<strong>${toUSDollarDisplay(btcData.bitcoin.usd_market_cap)}</strong>`
btcHeight.innerHTML = `<strong>${(btcData.bitcoin.usd_market_cap * 0.11).toLocaleString()}</strong>`