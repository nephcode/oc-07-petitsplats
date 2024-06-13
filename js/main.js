import '../sass/render.scss'
import { getRecipes } from './components/api'
import { recipesContainer } from './components/domLinker'
import { createCard } from './models/card'

console.log(getRecipes())

// const span = document.createElement('span')
// span.innerHTML = 'test'

// recipesContainer.appendChild(span)
const data = getRecipes()

data.forEach(item => {
    const card = createCard(item)
    recipesContainer.appendChild(card)
})
//=================================================================
/*
class App {
    constructor() {
        this.$moviesWrapper = document.querySelector('.movies-wrapper')
        this.moviesApi = new MovieApi('/data/movie-data.json')
    }

    async main() {
        const movies = await this.moviesApi.getMovies()

        movies.forEach(movie => {
            const Template = new MovieCard(movie)
            this.$moviesWrapper.appendChild(Template.createMovieCard())        
        })    
    }
}

const petitsplats = new App()
petitsplats.main()
*/