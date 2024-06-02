// Data lists
const quotes = [
    "Life is what happens while you're busy making other plans.",
    "Success is falling seven times and getting up eight.",
    "Never stop dreaming, only those who dream can fly.",
    "Happiness is not a destination, it's a journey.",
    "Challenges are what make life interesting; overcoming them is what makes it meaningful.",
    "Your limitation is only your imagination.",
    "Work hard in silence, let success make the noise."
];

const advices = [
    "Take time for yourself every day.",
    "Be kind to others, you never know what they're going through.",
    "Stay positive even in difficult situations.",
    "Kindness is the key to a better world.",
    "Learn from mistakes and keep growing.",
    "Keep your mind open to new opportunities."
];

const reflections = [
    "Every day is a new opportunity to grow.",
    "Challenges are what make life interesting.",
    "Gratitude transforms what we have into enough.",
    "Love is the most powerful force in the universe.",
    "Happiness is a choice you make every day.",
    "Life is a journey, not a destination."
];

// Function to generate a random number
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function generateAndDisplayMessage() {
    const randomQuoteIndex = getRandomIndex(quotes);
    const randomAdviceIndex = getRandomIndex(advices);
    const randomReflectionIndex = getRandomIndex(reflections);

    document.getElementById("quote").textContent = quotes[randomQuoteIndex];
    document.getElementById("advice").textContent = advices[randomAdviceIndex];
    document.getElementById("reflection").textContent = reflections[randomReflectionIndex];
}

// Generate and display message when page loads
generateAndDisplayMessage();

//console.log(generateRandomMessage());
