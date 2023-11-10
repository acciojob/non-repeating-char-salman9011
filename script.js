function firstNonRepeatedChar(str) {
    // Create an object to store the frequency of each character
    const charFrequency = {};

    // Iterate through the string to count the frequency of each character
    for (let char of str) {
        charFrequency[char] = (charFrequency[char] || 0) + 1;
    }

    // Iterate through the string again to find the first non-repeated character
    for (let char of str) {
        if (charFrequency[char] === 1) {
            return char;
        }
    }

    // If no non-repeated character is found, return null
    return null;
}

// Get user input using prompt
const input = prompt("Enter a string");

// Display the result
alert(firstNonRepeatedChar(input));
