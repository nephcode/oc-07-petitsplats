import '../sass/render.scss'
import { getRecipes } from './components/api'
import { recipesContainer } from './components/domLinker'

console.log(getRecipes())

const span = document.createElement('span')
span.innerHTML = 'test'

recipesContainer.appendChild(span)
