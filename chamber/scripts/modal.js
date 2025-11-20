const membershipLevels = [
    {
        id: "np-membership",
        name: "Non Profit",
        price: 0,
        benefits: [
            "Basic directory listing",
            "Access to chamber events",
            "Non-profit member recognition"
        ]
    },
    {
        id: "bronze",
        name: "Bronze",
        price: 150,
        benefits: [
            "Directory listing with logo",
            "Invitations to networking events",
            "Discounted booth fees for expos"
        ]
    },
    {
        id: "silver",
        name: "Silver",
        price: 300,
        benefits: [
            "Enhanced directory placement",
            "Featured in monthly newsletter",
            "Priority vendor opportunities"
        ]
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
        ]
    }
];

const membershipModal = document.getElementById('membership-modal');
const modalCards = document.getElementById('modal-cards');

const membershipHeader = document.getElementById('membership-header');
const modalMembershipName = document.createElement('h2');
const modalMembershipButton = document.createElement('button');

const modalMembershipName2 = document.createElement('h3');
const modalMembershipPrice = document.createElement('p');
const modalMembershipbenefit1 = document.createElement('p');
const modalMembershipbenefit2 = document.createElement('p');
const modalMembershipbenefit3 = document.createElement('p');

modalCards.addEventListener('click', (event) => {
    const button = event.target.closest('.membership');
    if (!button) return;

    console.log(button)

    const membershipID = button.dataset.membershipid;
    console.log(membershipID)

    const membership = membershipLevels.find(membership => membershipID === membership.id)
    modalMembershipName.textContent = membership.name;
    modalMembershipButton.textContent = "✕";
    membershipModal.showModal();


    membershipHeader.appendChild(modalMembershipName);
    membershipHeader.appendChild(modalMembershipButton);
    membershipModal.appendChild(membershipHeader);

})




