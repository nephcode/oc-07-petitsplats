// NEPHELIM CODE ==================================================//
// ===== PROGZ MAIN APP ===========================================//
// =========================================== NEAH 2024 ==========//

// SASS ===========================================================//
import "../sass/render.scss";

// API  ===========================================================//
import {
  getRecipes,
  getIngredients,
  getDevices,
  getUstensils,
} from "./components/api";
// COMPONENTS =====================================================//
import {
  recipesContainer,
  mainSearchBar,
  recipesCounter,
  dropdownIngredients,
  dropdownIngredientsCollapsed,
  ingredientsSearchBar,
  dropdownDevices,
  dropdownDevicesCollapsed,
  devicesSearchBar,
  dropdownUstensils,
  dropdownUstensilsCollapsed,
  ustensilsSearchBar,
  cleanInputMain,
  deleteIngredientsSearchBar,
  deleteDevicesSearchBar,
  deleteUstensilsSearchBar,
  
} from "./components/domLinker";

// SEARCH =========================================================//
import { filterByTags,  } from "./components/search";

// MODELS =========================================================//
import { createCard } from "./models/card";
import { createItem, inputCleaner } from "./models/dropdown";
import { state } from "./components/state";
// APP ============================================================//

console.log(getRecipes());
//console.log(data);
/*
const displayDeleteCategoryButton = (value, category) => {
    const deleteCategoryButton = document.querySelector(`#dropdown-${category} .delete`)
    deleteCategoryButton.style.display = value.length > 0 ? 'flex' : 'none'
}
*/
const applyCategorySearch = category => {
    let data

    if (category == 'ingredients') {
        data = getIngredients(mainSearchBar.value, ingredientsSearchBar.value)
    }

    if (category === 'devices') {
        data = getDevices(mainSearchBar.value, devicesSearchBar.value)
    }

    if (category === 'ustensils') {
        data = getUstensils(mainSearchBar.value, ustensilsSearchBar.value)
    }

    const categoryToDisplay = document.querySelector(`#dropdown-${category} .items-container`)

    createItem(data, categoryToDisplay, category, updateRecipes)
    //displayDeleteCategoryButton(ingredientsSearchBar.value, 'ingredients')
    //displayDeleteCategoryButton(devicesSearchBar.value, 'devices')
    //displayDeleteCategoryButton(ustensilsSearchBar.value, 'ustensils')
    inputCleaner(cleanInputMain, "click", mainSearchBar);
    inputCleaner(deleteIngredientsSearchBar, "click", ingredientsSearchBar);
    inputCleaner(deleteDevicesSearchBar, "click", devicesSearchBar);
    inputCleaner(deleteUstensilsSearchBar, "click", ustensilsSearchBar);
}


const updateRecipes = () => {
    const data = getRecipes(mainSearchBar.value)
    //display ZERO recipes

    //console.log(data.length);
    //console.log(data);
    //console.log(data.value);
    if (data.length === 0) {
        recipesContainer.innerHTML = `<div class="zero">Il n'y a pas de recettes avec la recherche en cours<br> ${data.length} recettes</div>`
    }
    else{
        displayRecipes(data)
    }   
    //displayDeleteButton(mainSearchBar.value)
    updateRecipesCounter(data)
    
    applyCategorySearch('ingredients')
    applyCategorySearch('devices')
    applyCategorySearch('ustensils')
    console.log('state.tags:', JSON.stringify(state.tags, null, 2))
}

const updateRecipesCounter = data => {
    recipesCounter.innerHTML = `${data.length} recettes`
}
/*
const updateRecipesZero = data => {

    recipesContainer.innerHTML = `Il n'y a pas de recettes avec la recherche en cours ${data.length} recettes`
}
*/
/**
 * Display or not delete button of main search bar in function of main search bar value in param
 * @param {String} value main searchbar value
 */
const displayDeleteButton = value => {
    deleteMainSearchBar.style.display = value.length > 0 ? 'flex' : 'none'
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
/*
deleteMainSearchBar.addEventListener('click', () => {
    mainSearchBar.value = ''
    updateRecipes()
})
*/

dropdownIngredients.addEventListener('click', () => {
    dropdownIngredients.classList.toggle('down')
    dropdownIngredientsCollapsed.style.display = dropdownIngredients.classList.contains('down') ? 'flex' : 'none'
    applyCategorySearch('ingredients')
})

ingredientsSearchBar.addEventListener('input', () => applyCategorySearch('ingredients'))

deleteIngredientsSearchBar.addEventListener('click', () => {
    ingredientsSearchBar.value = ''
    applyCategorySearch('ingredients')
})

dropdownDevices.addEventListener('click', () => {
    dropdownDevices.classList.toggle('down')
    dropdownDevicesCollapsed.style.display = dropdownDevices.classList.contains('down') ? 'flex' : 'none'
    applyCategorySearch('devices')
})

devicesSearchBar.addEventListener('input', () => applyCategorySearch('devices'))

deleteDevicesSearchBar.addEventListener('click', () => {
    devicesSearchBar.value = ''
    applyCategorySearch('devices')
})

dropdownUstensils.addEventListener('click', () => {
    dropdownUstensils.classList.toggle('down')
    dropdownUstensilsCollapsed.style.display = dropdownUstensils.classList.contains('down') ? 'flex' : 'none'
    applyCategorySearch('ustensils')
})

ustensilsSearchBar.addEventListener('input', () => applyCategorySearch('ustensils'))

deleteUstensilsSearchBar.addEventListener('click', () => {
    ustensilsSearchBar.value = ''
    applyCategorySearch('ustensils')
})




// INPUT CLEANER ================================= NEPH =============//
inputCleaner(cleanInputMain, "click", mainSearchBar);
inputCleaner(deleteIngredientsSearchBar, "click", ingredientsSearchBar);
inputCleaner(deleteDevicesSearchBar, "click", devicesSearchBar);
inputCleaner(deleteUstensilsSearchBar, "click", ustensilsSearchBar);
//===================================================================//

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
