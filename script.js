* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background-color: #121212; /* Dark background */
    color: #fff;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 40px auto;
}

.search-container {
    text-align: center;
    margin-bottom: 40px;
}

.search-container h1 {
    font-size: 3em;
    margin-bottom: 20px;
    color: #00feba; /* Highlight color */
}

.search-box {
    display: flex;
    justify-content: center;
    gap: 10px;
}

#movie-name {
    width: 60%;
    max-width: 400px;
    padding: 15px;
    font-size: 1em;
    border: 1px solid #333;
    border-radius: 8px;
    background-color: #222;
    color: #fff;
}

#search-btn {
    padding: 15px 30px;
    font-size: 1em;
    border: none;
    border-radius: 8px;
    background-color: #00feba;
    color: #121212;
    cursor: pointer;
    font-weight: bold;
}

#result-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}

.movie-card {
    background-color: #222;
    border-radius: 10px;
    overflow: hidden;
    text-align: center;
    transition: transform 0.3s;
    border: 1px solid #333;
}

.movie-card:hover {
    transform: scale(1.05);
}

.movie-card .poster {
    width: 100%;
    height: 420px;
    object-fit: cover;
}

.movie-info {
    padding: 20px;
}

.movie-info h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
}

.movie-info p {
    color: #aaa;
    text-transform: capitalize;
}

