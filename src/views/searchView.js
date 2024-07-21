import { elements } from '../base.js';

export const clearInput = () =>{
    elements.searchInput.value = '';
}

export const clearResults = () =>{
    elements.movieList.innerHTML = '';
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
                    <a href="#${movie.id}">${movie.title}</a>
                    </h5>
                    <p>${movie.overview}</p>
                </div>
              </li>
        `;

        elements.movieListContainer.classList.remove('d-none');
        elements.movieListContainer.classList.add('d-block');
        elements.movieList.insertAdjacentHTML('beforeend', html);
    });
}