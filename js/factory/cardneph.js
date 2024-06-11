
export class Article {
 /** Article class base 
*
* @param {String} articleName
* @param {String} articleId
*/
  constructor(articleName, articleId) {
    this.articleName = articleName
    this.articleId = articleId
  }
  /**
  * Affiche l'ID de l'article.
  */
  displayArticle() {
    console.log(this.articleId);
  }
}
