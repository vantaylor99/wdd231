

// const dateToday = new Date();
const msToDays = 86400000;
const todayMs = Math.floor(Date.now());

function setLastVisit() {
    localStorage.setItem("lastVisit", Date.now())
}


function getLastVisit() {
    let lastVisit = localStorage.getItem("lastVisit");

    if (!lastVisit) {
        setLastVisit()
        lastVisit = localStorage.getItem("lastVisit");
        return Number(lastVisit);
    }
    else {
        return Number(lastVisit);
    }
}
const lastVisitDays = (Math.floor(getLastVisit() / msToDays)) - todayMs;


console.log(lastVisitDays);