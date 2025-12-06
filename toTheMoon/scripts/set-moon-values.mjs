import { apiFetch } from "./api-fetch.mjs";
import { getMoonData } from "./moon-distance-data.mjs";


const moonDistanceSpan = document.getElementById('moon-distance-span');
const moonData = await getMoonData()

moonDistanceSpan.innerHTML = `<strong>${Number(moonData.moon_distance).toFixed(2)} km. </strong>`