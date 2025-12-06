import { getBtcData } from "./bitcoin-data.mjs";
import { toUSDollarDisplay } from "./us-dollar-display.mjs";

const btcData = await getBtcData();

const currentBTCPrice = btcData.bitcoin.usd;

const currentBtcTransaction = document.getElementById('current-btc-transaction');
currentBtcTransaction.innerHTML = `<strong>${toUSDollarDisplay(currentBTCPrice * 10000)}</strong>`;