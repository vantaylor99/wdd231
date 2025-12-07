const timeStamp = document.getElementById('timeStamp');
const form = document.querySelector('form');

function getSubmissionDate() {
    const date = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        weekday: 'long',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };

    const formattedDateWithAMPM = new Intl.DateTimeFormat('en-US', options).format(date);
    return formattedDateWithAMPM;
}


form.addEventListener('submit', () => {
    timeStamp.value = getSubmissionDate()
    console.log(timeStamp);
})