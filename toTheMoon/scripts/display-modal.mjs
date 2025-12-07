import { capitalizeMembership } from "./capitalize-membership.mjs";

document.addEventListener('DOMContentLoaded', () => {
    const membershipButton = document.getElementById('membership-button');
    const closeModalButton = document.getElementById('modal-close');
    const modal = document.getElementById('membership-modal');
    const modalH2 = document.getElementById('modal-h2');
    const modalLine1 = document.getElementById('modal-line1');
    const modalLine2 = document.getElementById('modal-line2');
    const modalMembership = document.getElementById('modal-membership');

    const formFirst = localStorage.getItem('first');
    const formLast = localStorage.getItem('last');
    const formEmail = localStorage.getItem('email');
    const formPhone = localStorage.getItem('phone');
    const formMembership = localStorage.getItem('membership');
    const formTimeStamp = localStorage.getItem('timeStamp');


    console.log(formFirst);






    membershipButton.addEventListener('click', () => {
        displayModal(modal);
        const hasDataBoolean = localStorage.getItem('has-data');

        if (hasDataBoolean === 'true') {
            modalH2.innerHTML = `You Did It!`
            modalLine1.innerHTML = `Welcome ${formFirst} ${formLast}!`
            modalLine2.innerHTML = `Congradulations on successfully joining the Diamond Hands Club. Looks like your membership level is <strong>"<i>${capitalizeMembership(formMembership)}</i>"</strong>, not bad. I see you've been a member since ${formTimeStamp}, that aint bad either. I mean I've perseonally been a member since 89' but that's alright, we all have to start somewhere.`
            modalMembership.innerHTML = `Looks like your phone number is ${formPhone}, and your email is ${formEmail}. Sick, expect lots of spam texts and phone calls. We do reserve the right to sell all your data just a heads up. Anyways, thanks for joining the Club. Let's take it to the moon.`
        }
        else if (hasDataBoolean === 'false') {
            modalH2.innerHTML = `What Are You Doing?`
            modalLine1.innerHTML = `You aren't a member yet?`
            modalLine2.innerHTML = `Listen, we are very particular about who joins the Diamond Hands Club, so I ain't telling you where the form is, you gotta find that on your own.`
            modalMembership.innerHTML = `Good luck!`
        }
    })

    closeModalButton.addEventListener('click', () => {
        closeModal(modal)
    })

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal(modal);
        }
    })

})



export function displayModal(modal) {
    modal.classList.remove('hidden')
    modal.showModal();
}

export function closeModal(modal) {
    modal.classList.add('hidden')
    modal.close();
}