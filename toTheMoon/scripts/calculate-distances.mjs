const dollarThicknessMM = 0.11
const dollarLengthMM = 156
const pennyThicknessMM = 1.52
const mmPerKM = 1000000


export function kilometersToBills(distanceKm) {
    const thicknessKm = dollarThicknessMM / mmPerKM;
    return distanceKm / thicknessKm
}

export function kilometersToBillLength(distanceKm) {
    const lengthKm = dollarLengthMM / mmPerKM;
    return distanceKm / lengthKm
}

export function kilometersToPennies(distanceKm) {
    const thicknessKm = pennyThicknessMM / mmPerKM
    return distanceKm / thicknessKm
}




export function billsToKilometers(bills) {
    return (bills * dollarThicknessMM) / mmPerKM
}

export function billLengthToKilometers(bills) {
    return (bills * dollarLengthMM) / mmPerKM
}

export function penniesToKilometers(pennies) {
    return (pennies * pennyThicknessMM) / mmPerKM
}




export function penniesInDollarAmount(amount) {
    return (amount * 100)
}

