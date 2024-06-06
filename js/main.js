import '../sass/render.scss'
import { getRecipes } from './components/api'
import { recipesContainer } from './components/domLinker'
import { createCard } from './factory/card'

console.log(getRecipes())

// const span = document.createElement('span')
// span.innerHTML = 'test'

// recipesContainer.appendChild(span)
const data = getRecipes()

data.forEach(item => {
    const card = createCard(item)
    recipesContainer.appendChild(card)
})