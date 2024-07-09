// Api Key: 2569a1daea1c7f240f8758c4e108e141

// 'https://api.themoviedb.org/3';
// 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

import Search from './js/models/search';

const state = {};

const searchController = async () =>{
    const keyword = document.getElementById('txt-keyword').value;
    if(keyword){
        state.search = new Search(keyword);
        await state.search.getResults();

        console.log(state.search.data.results)
    } else {
        alert('Please enter a keyword');
    }

}

document.getElementById('form-search').addEventListener('submit', e => {
    e.preventDefault();
    searchController();
});