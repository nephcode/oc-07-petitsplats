
export class Article {
 /** Nepha, Nephelim j'ai besoin d'aide pour créer ce modèle de classe. 
  * Article class base 
*
* @param {String} article
*/
  constructor(article) {
    this.article = article
    //this.articleId = articleId
  }
  /**
  * Affiche l'ID de l'article.
  */
  displayTest() {
    console.log(this.article);
  }

  displayCard() {
    const card = document.createElement('article')
    card.setAttribute('class', 'card')

    const articleCard = `
    <img src="/images/recettes/${this.article.image}" alt="${this.article.name}">
    `;

    /*
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

    //const ingredientsContainer = document.createElement('div')
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
      */
    card.innerHTML = articleCardCard;
    return card
  }
}
