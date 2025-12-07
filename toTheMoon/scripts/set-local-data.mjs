document.addEventListener('DOMContentLoaded', () => {
    setHasData();
})

export function setHasData() {
    const current = localStorage.getItem('has-data');

    if (current === null) {
        localStorage.setItem('has-data', "false")
    }
}