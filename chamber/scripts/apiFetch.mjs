export async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            console.log(response)
            const data = await response.json()
            console.dir(data)
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
