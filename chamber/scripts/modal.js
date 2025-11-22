const membershipLevels = [
    {
        id: "np-membership",
        name: "Non Profit",
        price: 0,
        benefits: [
            "Basic directory listing",
            "Access to chamber events",
            "Non-profit member recognition"
        ],
        description: "Designed for community organizations looking to stay connected and gain visibility without added costs."
    },
    {
        id: "bronze",
        name: "Bronze",
        price: 150,
        benefits: [
            "Directory listing with logo",
            "Invitations to networking events",
            "Discounted booth fees for expos"
        ],
        description: "A great starting level for small businesses wanting visibility, networking opportunities, and affordable access to chamber resources."
    },
    {
        id: "silver",
        name: "Silver",
        price: 300,
        benefits: [
            "Enhanced directory placement",
            "Featured in monthly newsletter",
            "Priority vendor opportunities"
        ],
        description: "Ideal for growing businesses seeking enhanced exposure and priority placement in chamber communications and events."
    },
    {
        id: "gold",
        name: "Gold",
        price: 600,
        benefits: [
            "Premium directory placement",
            "Spotlight feature on homepage",
            "Free booth at chamber events",
            "Social media promotions"
        ],
        description: "Our premier tier for businesses wanting maximum visibility, exclusive promotional opportunities, and top-level recognition within the chamber."
    }
];

const membershipModal = document.getElementById('membership-modal');
const modalCards = document.getElementById('modal-cards');

const membershipHeader = document.getElementById('membership-header');
const modalMembershipName = document.createElement('h2');
const modalMembershipButton = document.createElement('button');
modalMembershipButton.classList.add('button-common')

const modalMembershipName2 = document.createElement('h3');
const modalMembershipPrice = document.createElement('p');
const modalMembershipBenefit = document.createElement('p');
const modalMembershipList = document.createElement('ul')
const modalMembershipbenefit1 = document.createElement('li');
const modalMembershipbenefit2 = document.createElement('li');
const modalMembershipbenefit3 = document.createElement('li');
const modalMembershipDescription = document.createElement('p');

modalCards.addEventListener('click', (event) => {

    const button = event.target.closest('.button-dark');
    if (!button) return;
    console.log(button)

    const membershipID = button.dataset.membershipid;
    console.log(membershipID)

    const membership = membershipLevels.find(m => membershipID === m.id);
    modalMembershipName.textContent = membership.name;
    modalMembershipButton.textContent = "✕";
    modalMembershipName2.textContent = `Membership type: ${membership.name}`;
    modalMembershipPrice.innerHTML = `<strong>Price:</strong> $${membership.price}.00 / month.`;
    modalMembershipBenefit.innerHTML = `<strong>${membership.name} membership benefits:</strong> `;
    modalMembershipbenefit1.textContent = `${membership.benefits[0]}`;
    modalMembershipbenefit2.textContent = `${membership.benefits[1]}`;
    modalMembershipbenefit3.textContent = `${membership.benefits[2]}`;
    modalMembershipDescription.innerHTML = `<strong>Description: </strong>${membership.description}`;



    membershipHeader.appendChild(modalMembershipName);
    membershipHeader.appendChild(modalMembershipButton);
    membershipModal.appendChild(membershipHeader);
    membershipModal.appendChild(modalMembershipName2);
    membershipModal.appendChild(modalMembershipPrice);
    membershipModal.appendChild(modalMembershipBenefit);
    membershipModal.appendChild(modalMembershipList);
    modalMembershipList.appendChild(modalMembershipbenefit1);
    modalMembershipList.appendChild(modalMembershipbenefit2);
    modalMembershipList.appendChild(modalMembershipbenefit3);
    membershipModal.appendChild(modalMembershipDescription);
    membershipModal.showModal();


})

modalMembershipButton.addEventListener('click', () => {
    membershipModal.close();
})

membershipModal.addEventListener('click', (event) => {
    const rect = membershipModal.getBoundingClientRect();

    const clickedInDialog =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

    if (!clickedInDialog) {
        membershipModal.close();
    }
})





