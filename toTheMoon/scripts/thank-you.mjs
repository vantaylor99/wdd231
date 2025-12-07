import { capitalizeMembership } from "./capitalize-membership.mjs";
const myInfo = new URLSearchParams(window.location.search);

const first = (myInfo.get('firstName'));
const last = (myInfo.get('lastName'));
const email = (myInfo.get('email'));
const phone = (myInfo.get('phone'));
const membership = (myInfo.get('membershipLevel'))
const timeStamp = (myInfo.get('timeStamp'))

const dataArray = [
    { key: "first", value: first },
    { key: "last", value: last },
    { key: "email", value: email },
    { key: "phone", value: phone },
    { key: "membership", value: membership },
    { key: "timeStamp", value: timeStamp }
];

dataArray.forEach(formField => {
    localStorage.setItem(formField.key, formField.value);
});






const results = document.querySelector('#results');

results.innerHTML = `
<h1>Thank you!</h1>
<p>Submission for <strong>${first} ${last}</strong> successfully submitted!</p>
<p>Form submitted on: <strong>${timeStamp}.</strong></p>
<h2><strong><u>Information Collected: </u></strong></h2>
<p><strong>Email: </strong>${email} <strong>Phone: </strong>${phone}</p>
<p></p>
<p><strong>Membership Selected: </strong> <span id="membership-span">${membership}</span></p>`;

const membershipElement = document.getElementById('membership-span')

membershipElement.textContent = capitalizeMembership(membership);
