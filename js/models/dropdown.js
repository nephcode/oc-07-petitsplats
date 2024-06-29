// NEPHELIM CODE ==================================================//
// ===== DROPDOWN =================================================//
// =========================================== NEAH 2024 ==========//

// IMPORTS  =======================================================//

import { tagContainer } from "../components/domLinker";
import { state } from "../components/state";

// CREATE ITEM ===================================================//
export const createItem = (data, parent, category) => {

    parent.innerHTML = ''

    data.forEach(item => {
        const article = document.createElement('article')
        article.innerHTML = item

        // TODO create Tag
        article.addEventListener('click', () => createTag(item, category))


        parent.appendChild(article)
    });
}

// CREATE TAG ====================================================//
export const createTag = (data, category) => {

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

        img.addEventListener('click', () => deleteTag(article, data, category))

        article.appendChild(img)

        tagContainer.appendChild(article)
    }


}

// CLEAN INPUT ====================================================//
export const inputCleaner = (element, trigger, target ) =>{
    element.addEventListener(trigger, () => {
        target.tagName.toLowerCase() === 'input';
        target.value = '';
        console.log("Clean : " + target.id);
    });
}




// DELETE TAG ====================================================//
export const deleteTag = (tagElement, data, category) => {
    tagElement.parentNode.removeChild(tagElement)
    state.tags[category] = state.tags[category].filter(item => item !== data)
    console.log(state.tags)
}

// 2024 ==========================================================//    