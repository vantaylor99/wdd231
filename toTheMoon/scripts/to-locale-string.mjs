export function toLocaleStringFormat(number) {
    const formatted = `${Number(number).toLocaleString("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    })}`;
    return formatted
}