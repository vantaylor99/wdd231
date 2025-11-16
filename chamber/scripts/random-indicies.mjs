export function getRandomIndicies(numberOfIndicies, arrayLength) {
    const chosenIndicies = [];
    while (chosenIndicies.length < numberOfIndicies) {
        let randomIndex = Math.floor(Math.random() * arrayLength)
        if (!chosenIndicies.includes(randomIndex)) {
            chosenIndicies.push(randomIndex);
        }
    }
    return chosenIndicies;
}