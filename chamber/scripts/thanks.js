const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo)

const first = (myInfo.get('firstName'));
const last = (myInfo.get('lastName'));
const email = (myInfo.get('email'));
const phone = (myInfo.get('phone'));
const businessName = (myInfo.get('business'))
const timeStamp = (myInfo.get('timeStamp'))

// console.log(myInfo.get('first'));
// console.log(myInfo.get('last'));
// console.log(myInfo.get('ordinance'));
// console.log(myInfo.get('date'));
// console.log(myInfo.get('location'));
// console.log(myInfo.get('phone'));
// console.log(myInfo.get('email'));


// (first name, last name, email, mobile number, business name, and current date timestamp from the hidden field)



const results = document.querySelector('#results');

results.innerHTML = `
<h1>Thank you!</h1>
<p>Submission for ${first} ${last} successfully submitted on ${timeStamp}</p>
<p><strong><u>Information Collected: </u></strong></p>
<p><strong>Email: </strong>${email}</p>
<p><strong>Phone: </strong>${phone}</p>
<p><strong>Business Name: </strong>${businessName}</p>`;
