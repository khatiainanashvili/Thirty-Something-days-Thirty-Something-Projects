const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=32202d41dc188c72ceaac167736c66f0&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=32202d41dc188c72ceaac167736c66f0&query="';
const form = document.getElementById('form')
const searchTerm = document.getElementById('search')
const main = document.getElementById('main')

 getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data =await res.json()
    console.log(data);
    showMovies(data.results)
}
function showMovies(movies) {
    main.innerHTML = ''
    movies.forEach((movie) => {
        const {title, poster_path, vote_average, overview } = movie

        const moviEl = document.createElement('div')
        moviEl.classList.add('movie')
        moviEl.innerHTML =`
            <img src="${IMG_PATH + poster_path}" alt="">
            <div class="movie-info">
                <h3>
                    ${title}
                </h3>
                <span class="${getClassByRate()}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
        </div>
        `
       main.appendChild(moviEl)
    });
}
function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green'
    }
    else if (vote >= 5){
        return 'orange'
    }else {
        return 'red'
    }


}

form.addEventListener('submit', (e) => {

    e.preventDefault()

    const searchTerm = search.value
    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm )
        search.value = ''
    }
    else {
        window.location.reload()
    }
})

