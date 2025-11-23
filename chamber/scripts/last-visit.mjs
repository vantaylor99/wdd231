

// const dateToday = new Date();
const msToDays = 86400000;
// const todayMs = Date.now();

function setLastVisit() {
    localStorage.setItem("lastVisit", Date.now())
}
setLastVisit()

function getLastVisit() {
    let lastVisit = localStorage.getItem("lastVisit");

    if (!lastVisit) {
        localStorage.setItem("lastVisit", Date.now());
        lastVisit = localStorage.getItem("lastVisit");
        return Number(lastVisit);
    }
    else {
        return Number(lastVisit);
    }
}
const lastVisitDays = Math.floor(getLastVisit());
console.log(lastVisitDays);