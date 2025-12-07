const form = document.querySelector('#form-submission');

form.addEventListener('click', () => {
    if (!firstName || !lastName || !membershipLevel || !phone) {
        return;
    }
    else if (firstName && lastName && membershipLevel && phone) {
        localStorage.setItem('has-data', 'true')
    }

})