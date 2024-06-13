// NEPHILIM CODE ==================================================//
// =====    IMPORTS    ============================================//
// ================================================================//

// SASS ===========================================================//  
import '../sass/render.scss'
// COMPONENTS =====================================================//
import { recipesContainer } from './components/domLinker';
import { Api, RecipeApi } from './components/api'; 
//

// MODELS =========================================================//
//import { recipes } from './data/recipes'
//import { getRecipes } from './components/api'
import { createCard } from './models/card'
import { Article } from './models/cardneph'

// APP ============================================================//

//export const getRecipes = () => recipes
//console.log(getRecipes())
/*
// const span = document.createElement('span')
// span.innerHTML = 'test'

// recipesContainer.appendChild(span)
const data = getRecipes()

data.forEach(item => {
    const card = createCard(item)
    recipesContainer.appendChild(card)
})
    */
//=================================================================

class App {
    constructor() {
        this.recipeSection = document.getElementById('recipes-container');
        //this.fetcherRecipe = new Api('../data/recipes.json');
        this.recipeExtract = new ArrayApi('../data/recipes.js');
    }

    async main() {
        const recipesAll = this.recipeExtract.getRecipe()
        console.log(recipesAll)
        
        recipesAll.forEach(article => {
            console.log(article)
            //const Card = new Article(article)
            //this.recipeSection.appendChild(card.displayCard())

        })   
    }
}

const petitsplats = new App()
petitsplats.main()
//=================================================================//