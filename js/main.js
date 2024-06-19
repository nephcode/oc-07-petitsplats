// NEPHILIM CODE ==================================================//
// =====    IMPORTS    ============================================//
// ================================================================//

// SASS ===========================================================//  
import '../sass/render.scss';
// COMPONENTS =====================================================//
import { recipesContainer } from './components/domLinker';
import { getRecipes } from './components/api'; 

// MODELS =========================================================//
import { createCard } from './models/card';

// APP ============================================================//

//console.log(getRecipes());

const displayRecipes = data => {
    //console.log(data); // Vérifier le contenu de data
    recipesContainer.innerHTML = '';

    data.forEach(item => {
        //console.log(item); // Vérifier chaque élément de data
        const card = createCard(item);
        //console.log(card); // Vérifier le retour de createCard
        recipesContainer.appendChild(card);
    });
}

displayRecipes(getRecipes());

//=================================================================
/*
class App {
    constructor() {
        this.recipeSection = document.getElementById('recipes-container');
        //this.fetcherRecipe = new Api('../data/recipes.json');
        //this.recipeExtract = new ArrayApi('../data/recipes.js');
    }

    async main() {
        const recipesAll = this.recipeExtract.getData()
        console.log(recipesAll);
        console.log(Array.isArray(recipesAll));
        
        recipesAll.forEach(article => {
            console.log(article)
            //const Card = new Article(article)
            //this.recipeSection.appendChild(card.displayCard())

        })   
    }
}
*/
//const petitsplats = new App()
//petitsplats.main()
//=================================================================//