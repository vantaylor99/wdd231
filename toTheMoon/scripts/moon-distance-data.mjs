import { apiFetch } from "./api-fetch.mjs";

export async function getMoonData() {
    const moonApiURL = "https://api.ipgeolocation.io/astronomy?apiKey=c91e63a9624642a6bb261b36cddbd812&lat=40.2338&long=-111.6585"
    const nasaMoonData = await apiFetch(moonApiURL);

    return nasaMoonData
}