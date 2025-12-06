import { apiFetch } from "./api-fetch.mjs";

export async function getNationalDebtData() {
    const nationalDebtApiURL =
        "https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny" +
        "?fields=record_date,tot_pub_debt_out_amt" +
        "&sort=-record_date" +
        "&page[size]=1";
    const nationalDebtData = await apiFetch(nationalDebtApiURL);

    return nationalDebtData
}

