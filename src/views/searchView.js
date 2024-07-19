import { elements } from '../base.js';

export const clearInput = () =>{
    elements.searchInput.value = '';
}

export const clearResults = () =>{
    elements.searchResults.innerHTML = '';
}

export const displayResults = data =>{
    data.results.forEach(movie => {
        console.log(movie)
        const html = `
            <li class="mb-3 media d-flex align-items-center">
            <img class="me-3" src="https://media.themoviedb.org/t/p/w92/${movie.poster_path}" alt="${movie.title}" onerror="this.src='https://placehold.co/92x138';">
                <div class="media-body">
                    <h5 class="mt-0 mb-1">
                    <span class="badge bg-primary">${movie.vote_average}</span>
                    ${movie.title}
                    </h5>
                    <p>${movie.overview}</p>
                </div>
              </li>
        `;
        elements.searchResults.insertAdjacentHTML('beforeend', html);
    });
}