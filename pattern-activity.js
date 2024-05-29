function generateLetter(letter, size) {
    const pattern = Array.from({ length: size }, () => Array(size).fill(' '));
    
    for (let i = 0; i < size; i++) {
        if (letter === 'X') {
            pattern[i][i] = 'O';
            pattern[i][size - 1 - i] = 'O';
        } else if (letter === 'Y') {
            if (i < Math.floor(size / 2)) {
                pattern[i][i] = 'O';
                pattern[i][size - 1 - i] = 'O';
            } else {
                pattern[i][Math.floor(size / 2)] = 'O';
            }
        } else if (letter === 'Z') {
            pattern[0][i] = 'O';
            pattern[size - 1][i] = 'O';
            pattern[i][size - 1 - i] = 'O';
        }
    }

    return pattern;
}

function printPattern(pattern) {
    pattern.forEach(row => console.log(row.join('')));
}

function combinePatterns(patterns, direction) {
    if (direction === 'horizontal') {
        return patterns[0].map((_, i) => patterns.map(pattern => pattern[i]).flat());
    } else if (direction === 'vertical') {
        return patterns.flat();
    }
}

function main() {
    do {
        const letters = prompt("Enter the letters (any combination of X, Y, Z): ");
        const size = parseInt(prompt("Enter the block size (odd number, >= 3): "), 10);
        const direction = prompt("Enter the direction (horizontal or vertical): ");

        if (size < 3 || size % 2 === 0) {
            console.error("Size must be an odd number greater than or equal to 3.");
            continue;
        }

        const patterns = letters.split('').map(letter => generateLetter(letter, size));
        const combinedPattern = combinePatterns(patterns, direction);
        printPattern(combinedPattern);

        var again = prompt("Do you want to run the program again? (yes/no): ").toLowerCase();
    } while (again === 'yes');
    
    console.log("Thank you!");
}

main();
