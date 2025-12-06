export function toUSDollarDisplay(number) {
    const formatted = `$${Number(number).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })}`;
    return formatted
}