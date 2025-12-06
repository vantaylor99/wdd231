import { apiFetch } from "./api-fetch.mjs";

export async function getBtcData() {
    const BtcApiURL =
        "https://api.coingecko.com/api/v3/simple/price" +
        "?ids=bitcoin" +
        "&vs_currencies=usd" +
        "&include_market_cap=true" +
        "&include_24hr_vol=true" +
        "&x_cg_demo_api_key=CG-cZzjmKPBMGyVFXtmdGsTQ5SS";
    const btcData = await apiFetch(BtcApiURL);

    return btcData
}