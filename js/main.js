// NEPHELIM CODE ==================================================//
// ===== PROGZ MAIN APP ===========================================//
// =========================================== NEAH 2024 ==========//

// SASS ===========================================================//  
import '../sass/render.scss';

// API  ===========================================================//  
import { getRecipes } from './components/api'; 
// COMPONENTS =====================================================//
import {
    recipesContainer, mainSearchBar, recipesCounter, dropdownIngredients, dropdownIngredientsCollapsed,
    ingredientsSearchBar, dropdownDevices, dropdownDevicesCollapsed, devicesSearchBar,
    dropdownUstensils, dropdownUstensilsCollapsed, ustensilsSearchBar
} from './components/domLinker';

// MODELS =========================================================//
import { createCard } from './models/card';

import { createItem } from './models/dropdown';


// APP ============================================================//

console.log(getRecipes());
/*
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
*/
const applyCategorySearch = category => {
    let data

    if (category === 'ingredients') {
        data = getIngredients(mainSearchBar.value, ingredientsSearchBar.value)
    }

    if (category === 'devices') {
        data = getDevices(mainSearchBar.value, devicesSearchBar.value)
    }

    if (category === 'ustensils') {
        data = getUstensils(mainSearchBar.value, ustensilsSearchBar.value)
    }

    const categoryToDisplay = document.querySelector(`#dropdown-${category} .items-container`)

    createItem(data, categoryToDisplay, category)
}


const updateRecipes = () => {
    const data = getRecipes(mainSearchBar.value)
    displayRecipes(data)
    updateRecipesCounter(data)
    applyCategorySearch('ingredients')
    applyCategorySearch('devices')
    applyCategorySearch('ustensils')
}

const updateRecipesCounter = data => {
    recipesCounter.innerHTML = `${data.length} recettes`
}

/**
 * Update DOM receipes in function of data in param
 * @param {*} data 
 */
const displayRecipes = data => {
    recipesContainer.innerHTML = ''

    data.forEach(item => {
        const card = createCard(item)
        recipesContainer.appendChild(card)
    })
}

updateRecipes()

mainSearchBar.addEventListener('input', updateRecipes)

dropdownIngredients.addEventListener('click', () => {
    dropdownIngredients.classList.toggle('down')
    dropdownIngredientsCollapsed.style.display = dropdownIngredients.classList.contains('down') ? 'flex' : 'none'
    applyCategorySearch('ingredients')
})

ingredientsSearchBar.addEventListener('input', () => applyCategorySearch('ingredients'))

dropdownDevices.addEventListener('click', () => {
    dropdownDevices.classList.toggle('down')
    dropdownDevicesCollapsed.style.display = dropdownDevices.classList.contains('down') ? 'flex' : 'none'
    applyCategorySearch('devices')
})

devicesSearchBar.addEventListener('input', () => applyCategorySearch('devices'))

dropdownUstensils.addEventListener('click', () => {
    dropdownUstensils.classList.toggle('down')
    dropdownUstensilsCollapsed.style.display = dropdownUstensils.classList.contains('down') ? 'flex' : 'none'
    applyCategorySearch('ustensils')
})

ustensilsSearchBar.addEventListener('input', () => applyCategorySearch('ustensils'))




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