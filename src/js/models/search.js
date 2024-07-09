export default class Search {
    constructor(keyword) {
        this.keyword = keyword;
    }

    async getResults(keyword){
        const apiKey = '2569a1daea1c7f240f8758c4e108e141';
        const baseURL = 'https://api.themoviedb.org/3';
    
        const response = await fetch(`${baseURL}/search/movie?api_key=${apiKey}&page=1&query=${this.keyword}`)
        this.data = await response.json();
    }
}