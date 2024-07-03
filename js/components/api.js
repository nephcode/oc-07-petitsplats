// NEPHELIM CODE ============================= LULZCODE ===========//
// ===== API === ^_^ ==============================================//
// =========================================== NEAH 2024 ==========//
import { recipes } from '../../data/recipes';
import { filterMainSearchBar, isLowerCaseIncluded, filterByTags } from './search';
import { state } from './state';

export const getRecipes = (value = '') => {
    const result = value.length >= 3 ? filterMainSearchBar(recipes, value) : recipes
    return filterByTags(result, state.tags)
}

// getIngredients ========================`FOR` ALGO=========================//
export const getIngredients = (main = '', value = '') => {
    const startTime = performance.now(); // perf
    const recipes = getRecipes(main);
    let ingredients = [];

    // Get all unique ingredients
    for (let i = 0; i < recipes.length; i++) {
        const recipeIngredients = recipes[i].ingredients;
        for (let j = 0; j < recipeIngredients.length; j++) {
            const ingredient = recipeIngredients[j].ingredient;
            // Utilise un ensemble (Set) pour éviter les doublons
            if (!ingredients.includes(ingredient)) {
                ingredients.push(ingredient);
            }
        }
    }

    // Filtrer les ingrédients si la valeur a au moins 3 caractères
    if (value.length >= 3) {
        ingredients = ingredients.filter(item => isLowerCaseIncluded(item, value));
    }
    // perf console
    const endTime = performance.now();
    console.log("getIngredients Execution Time:", (endTime - startTime).toFixed(4), "ms");
    // >> return
    return ingredients;
};
// getDevices ====================================================//
export const getDevices = (main = '', value = '') => {
    const recipes = getRecipes(main)

    const devices = [...new Set(recipes.map(item => item.appliance))]
    return value.length >= 3 ? devices.filter(item => isLowerCaseIncluded(item, value)) : devices
}
// getUstensils ==================================================//
export const getUstensils = (main = '', value = '') => {
    const recipes = getRecipes(main)
    let ustensils = []

    recipes.forEach(recipe => {
        ustensils = [...new Set([...ustensils, ...recipe.ustensils])]
    })

    return value.length >= 3 ? ustensils.filter(item => isLowerCaseIncluded(item, value)) : ustensils
}

/// ======= Je laisse tomber cette partie pour le moment ======= ///
/*
export class Api {

    /**
     * 
     * @param {string} url 
     
    constructor(url) {
        this._url = url
    }

    async get() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.data)
            .catch(err => console.log(`that's a bug not hat but hot`, err))
    }
}


export class JsonApi extends Api {
    /**
     * 
     * @param {string} url 
     
    constructor(url) {
        super(url)
    }

    async getRecipe() {
        return await this.get()
    }
}

export class ArrayApi {
    constructor(dataArray) {
      this.data = () => recipes;
    }
  
    getData() {
      return this.data;
    }
  }

  */

// ====3301=================================== NEAH 2024 ==========//