// Zaroori HTML elements ko select karein
const movieSearchBox = document.getElementById('movie-name');
const searchBtn = document.getElementById('search-btn');
const resultContainer = document.getElementById('result-container');

// !! ZAROORI: Yahan OMDb se mila apna asli API key daalein !!
const apiKey = "f84610d";

// Function: API se movie data fetch karne ke liye
const getMovie = () => {
    const movieName = movieSearchBox.value;
    const url = `https://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}`;

    // Agar search box khaali hai to background saaf karein
    if (movieName.length <= 0) {
        resultContainer.innerHTML = `<h3 style="text-align:center; color:#aaa;">Please enter a movie name</h3>`;
        document.body.style.backgroundImage = 'none'; // Background hata dein
        return;
    }

    // API se data fetch karein
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Agar movie mili to
            if (data.Response === "True") {
                // NAYA: Pehli movie ka poster background mein lagayein
                const firstMoviePoster = data.Search[0].Poster;
                if (firstMoviePoster && firstMoviePoster !== "N/A") {
                    document.body.style.backgroundImage = `url(${firstMoviePoster})`;
                } else {
                    document.body.style.backgroundImage = 'none'; // Agar poster nahi hai to background hata dein
                }

                resultContainer.innerHTML = ""; // Purane results saaf karein
                
                // Har movie ke liye ek card banayein
                data.Search.forEach(movie => {
                    const movieCard = document.createElement('div');
                    movieCard.classList.add('movie-card');

                    const posterUrl = movie.Poster === "N/A" ? "https://i.imgur.com/L1dE3dC.png" : movie.Poster;

                    movieCard.innerHTML = `
                        <img src="${posterUrl}" alt="${movie.Title}" class="poster">
                        <div class="movie-info">
                            <h3>${movie.Title}</h3>
                            <p><strong>Year:</strong> ${movie.Year}</p>
                            <p><strong>Type:</strong> ${movie.Type}</p>
                        </div>
                    `;
                    resultContainer.appendChild(movieCard);
                });
            } 
            // Agar movie nahi mili to
            else {
                resultContainer.innerHTML = `<h3 style="text-align:center; color:#aaa;">${data.Error}</h3>`;
                document.body.style.backgroundImage = 'none'; // Background hata dein
            }
        })
        .catch(error => {
            console.error("Error:", error);
            resultContainer.innerHTML = `<h3 style="text-align:center; color:red;">An error occurred. Please try again.</h3>`;
            document.body.style.backgroundImage = 'none'; // Background hata dein
        });
};

// Search button par event listener lagayein
searchBtn.addEventListener('click', getMovie);

// Enter dabane par bhi search karne ki suvidha
movieSearchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        getMovie();
    }
});

