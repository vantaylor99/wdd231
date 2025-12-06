import { getNationalDebtData } from "./national-debt-data.mjs";
import { toUSDollarDisplay } from "./us-dollar-display.mjs";
import { getMoonData } from "./moon-distance-data.mjs";
import { billsToKilometers } from "./calculate-distances.mjs";
import { penniesInDollarAmount } from "./calculate-distances.mjs";
import { penniesToKilometers } from "./calculate-distances.mjs";
import { billLengthToKilometers } from "./calculate-distances.mjs";
import { toLocaleStringFormat } from "./to-locale-string.mjs";


const debtData = await getNationalDebtData();
const moonData = await getMoonData();


const currentNationalDebt = Number(debtData.data[0].tot_pub_debt_out_amt);
const nationalDebtSpan = document.getElementById('national-debt-span');

nationalDebtSpan.innerHTML = `<strong>${toUSDollarDisplay(currentNationalDebt)}</strong>`

const currentMoonDistance = moonData.moon_distance;
const averagePlutoDistance = 5906380000
const debtTripsToMoon = ((billsToKilometers(currentNationalDebt)) / currentMoonDistance);

const debtTripsToMoonSpan = document.getElementById('national-debt-trips-to-moon');
debtTripsToMoonSpan.innerHTML = `<strong>${debtTripsToMoon.toFixed(1)}</strong>`


const penniesToPlutoSpan = document.getElementById('pennies-to-pluto-span');
const debtHeighKmInPennies = penniesToKilometers(penniesInDollarAmount(currentNationalDebt));
const debtLengthInKM = billLengthToKilometers(currentNationalDebt);
const debtTripsToPlutoInPennies = (debtHeighKmInPennies / averagePlutoDistance);
const debtTripsToPlutoInBillLength = (debtLengthInKM / averagePlutoDistance);
penniesToPlutoSpan.innerHTML = `<strong>${(debtTripsToPlutoInPennies * 100).toFixed(1)}%</strong>`


const billLengthToPlutoSpan = document.getElementById('bill-length-to-pluto');
billLengthToPlutoSpan.innerHTML = `<strong>${debtTripsToPlutoInBillLength.toFixed(2)}</strong>`

const nationalDebtLength = document.getElementById('national-debt-length')
nationalDebtLength.innerHTML = `<strong>${toLocaleStringFormat(debtLengthInKM)} km,</strong>`


const earthCircumference = 40075
const timesWrapped = debtLengthInKM / earthCircumference
const timesWrappedSpan = document.getElementById('times-earth-wrapped');
timesWrappedSpan.innerHTML = `<strong>${toLocaleStringFormat(timesWrapped)} times</strong>`

const wrapHeightInMeters = (billsToKilometers(timesWrapped) * 1000)

const wrappedHeightSpan = document.getElementById('wrap-height');
wrappedHeightSpan.innerHTML = `<strong>${toLocaleStringFormat(wrapHeightInMeters)} meters</strong>`

const wrappedHeightFeetSpan = document.getElementById('wrapped-height-in-feet');
wrappedHeightFeetSpan.innerHTML = `<strong>${toLocaleStringFormat(wrapHeightInMeters) * 3} feet.</strong>`

const wrappedHeightStoriesSpan = document.getElementById('stories-tall');
wrappedHeightStoriesSpan.innerHTML = `<strong>${toLocaleStringFormat(Math.ceil((wrapHeightInMeters) * 3) / 10)} stories</strong>`









