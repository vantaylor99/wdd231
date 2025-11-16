export function usTimeConversion(unixSeconds, locale = "en-US") {

    const time = new Date(unixSeconds * 1000);
    return time.toLocaleString(locale, { hour: "numeric", minute: "numeric", hour12: true });

}

export function usDateConversion(unixSeconds, locale = "en-US") {

    const date = new Date(unixSeconds * 1000);
    return date.toLocaleString(locale, { month: "2-digit", day: "2-digit" });

}