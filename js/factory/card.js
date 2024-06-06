/**
 * Return card of recipe to append to DOM
 * @param {Object} data required recipe, example: {
    id: 1,
    image: 'Recette01.webp',
    name: 'Limonade de Coco',
    servings: 1,
    ingredients: [
      {
        ingredient: 'Lait de coco',
        quantity: 400,
        unit: 'ml'
      },
      {
        ingredient: 'Jus de citron',
        quantity: 2
      },
      {
        ingredient: 'Crème de coco',
        quantity: 2,
        unit: 'cuillères à soupe'
      },
      {
        ingredient: 'Sucre',
        quantity: 30,
        unit: 'grammes'
      },
      {
        ingredient: 'Glaçons'
      }
    ],
    time: 10,
    description: "Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée",
    appliance: 'Blender',
    ustensils: ['cuillère à Soupe', 'verres', 'presse citron']
  }
 * @returns {HTMLElement} Returns article element in function of data in params, example:  <article class="card">
        <img src="/assets/Recette01.webp">
        <div class="card-body">
          <h2>Titre de la recette</h2>
          <span class="under-title">Recette</span>
          <p>Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de
            coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée.</p>
          <span class="under-title">Ingrédients</span>
          <div class="ingredients-container">
            <div>
              <span class="ingredient-name">Lait de coco</span>
              <span class="ingredient-quantity">400 ml</span>
            </div>
            <div>
              <span class="ingredient-name">Jus de citron</span>
              <span class="ingredient-quantity">2 </span>
            </div>
            <div>
              <span class="ingredient-name">Crème de coco</span>
              <span class="ingredient-quantity">2 cuillères à soupe</span>
            </div>
            <div>
              <span class="ingredient-name">Sucre</span>
              <span class="ingredient-quantity">30 grammes</span>
            </div>
            <div>
              <span class="ingredient-name">Glaçons</span>
            </div>
          </div>
        </div>
      </article>
 */
      export const createCard = data => {
        const card = document.createElement('article')
        card.setAttribute('class', 'card')
    
        const img = document.createElement('img')
        img.src = `/images/recettes/${data.image}`
        img.alt = data.name
        card.appendChild(img)
    
        const cardBody = document.createElement('div')
        cardBody.setAttribute('class', 'card-body')
        card.appendChild(cardBody)
    
        const title = document.createElement('h2')
        title.innerHTML = data.name
        cardBody.appendChild(title)
    
        const underTitleRecipe = document.createElement('span')
        underTitleRecipe.setAttribute('class', 'under-title')
        underTitleRecipe.innerHTML = 'Recette'
        cardBody.appendChild(underTitleRecipe)
    
        const description = document.createElement('p')
        description.innerHTML = data.description
        cardBody.appendChild(description)
    
        const underTitleIngredient = document.createElement('span')
        underTitleIngredient.setAttribute('class', 'under-title')
        underTitleIngredient.innerHTML = 'Ingrédients'
        cardBody.appendChild(underTitleIngredient)
    
        const ingredientsContainer = document.createElement('div')
        ingredientsContainer.setAttribute('class', 'ingredients-container')
        cardBody.appendChild(ingredientsContainer)
    
        // Loop on ingredients to create list of ingredients
        data.ingredients.forEach(item => {
            const ingredientContainer = document.createElement('div')
            ingredientsContainer.appendChild(ingredientContainer)
    
            const ingredientName = document.createElement('span')
            ingredientName.setAttribute('class', 'ingredient-name')
            ingredientName.innerHTML = item.ingredient
            ingredientContainer.appendChild(ingredientName)
    
            if (item.quantity || item.unit) {
                const ingredientQuantity = document.createElement('span')
                ingredientQuantity.setAttribute('class', 'ingredient-quantity')
                ingredientQuantity.innerHTML = `${item.quantity || ''} ${item.unit || ''}`
                ingredientContainer.appendChild(ingredientQuantity)
            }
        })
    
        const time = document.createElement('span')
        time.setAttribute('class', 'time')
        time.innerHTML = `${data.time} min`
        card.appendChild(time)
    
        return card
    }