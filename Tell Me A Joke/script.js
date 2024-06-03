document.addEventListener("DOMContentLoaded", () => {
    const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "Why don't skeletons fight each other? They don't have the guts.",
        "What do you call fake spaghetti? An impasta!",
        "How does a penguin build its house? Igloos it together!"
    ];

    const jokeButton = document.getElementById("jokeButton");
    const jokeDisplay = document.getElementById("jokeDisplay");

    jokeButton.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * jokes.length);
        jokeDisplay.innerHTML = jokes[randomIndex];
    });
});









