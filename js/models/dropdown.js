// NEPHELIM CODE ==================================================//
// ===== DROPDOWN =================================================//
// =========================================== NEAH 2024 ==========//

// IMPORTS  =======================================================//

import { tagContainer } from "../components/domLinker";
import { state } from "../components/state";
//import { updateRecipes } from "../main/";
// CREATE ITEM ===================================================//
export const createItem = (data, parent, category, callback) => {

    parent.innerHTML = ''

    data.forEach(item => {
        const article = document.createElement('article')
        article.innerHTML = item
        // Create tag
        article.addEventListener('click', () => createTag(item, category, callback))
        parent.appendChild(article)
    });
}

// CREATE TAG ====================================================//
export const createTag = (data, category, callback) => {

    console.log(state.tags)

    if (!state.tags[category].find(element => element === data)) {

        state.tags[category].push(data)

        const article = document.createElement('article')
        const span = document.createElement('span')
        span.innerHTML = data
        article.appendChild(span)
        const img = document.createElement('img')
        img.src = '/images/common/cross.svg'
        img.alt = 'supprimer le tag'

        img.addEventListener('click', () => deleteTag(article, data, category, callback))

        article.appendChild(img)

        tagContainer.appendChild(article)
        callback();
    }
}

// CLEAN INPUT ====================================================//
export const inputCleaner = (element, trigger, target ) =>{
    element.style.display = 'none';
    target.addEventListener('input', () => { // Utilisation de 'input' pour détecter chaque saisie
        if (target.value.length >= 3) {
            element.style.display = 'flex'; // Afficher l'élément si la longueur est >= 3
        } else {
            element.style.display = 'none'; // Sinon, masquer l'élément
        }
    });
    element.addEventListener(trigger, () => {
        target.tagName.toLowerCase() === 'input';
        target.value = '';
        element.style.display = 'none';
        console.log("Clean : " + target.id);
        //updateRecipes();
    });
    
}

// DELETE TAG ====================================================//
export const deleteTag = (tagElement, data, category, callback) => {
    tagElement.parentNode.removeChild(tagElement)
    state.tags[category] = state.tags[category].filter(item => item !== data)
    // update all display
    callback()
}
// 2024 ==========================================================//    