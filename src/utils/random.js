function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);   // Ensures min is an integer
    max = Math.floor(max);  // Ensures max is an integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { getRandomIntInclusive }