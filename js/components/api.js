import { recipes } from '../../data/recipes'

export const getRecipes = () => recipes

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