// Api Key: 2569a1daea1c7f240f8758c4e108e141

// 'https://api.themoviedb.org/3';
// 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

import Search from './js/models/search';
import { elements } from './base';
import * as searchView from '../src/views/searchView.js';
import * as movieView from '../src/views/movieView.js';
import Movie from './js/models/Movie.js';

const state = {};

// Search Controller
const searchController = async () =>{
    const keyword = elements.searchInput.value;
    if(keyword){
        state.search = new Search(keyword);
        await state.search.getResults();

        searchView.clearInput();
        searchView.clearResults();
        searchView.displayResults(state.search.data)
    } else {
        alert('Please enter a keyword');
    }

}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    searchController();
});

// Movie Controller

const movieController = async() =>{
    const id = window.location.hash.replace('#', '');
    if (id){
        state.movie = new Movie(id);
        await state.movie.getMovie();
        movieView.displayMovie(state.movie.data);
        movieView.backToTop();
    }
}

window.addEventListener('hashchange', movieController);