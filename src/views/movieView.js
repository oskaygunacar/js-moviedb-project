import { elements } from '../base.js';

export const displayMovie = movie =>{
    var html = `<div class="row">`;

    var genres = '';

    movie.genres.forEach(genre=>{
        genres += `<span class="badge bg-primary ms-1">${genre.name}</span> `;
    })

    html += `<div class="col-md-4">
                <img class="me-3 img-fluid" src="https://media.themoviedb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}" onerror="this.src='https://placehold.co/92x138';">
    </div>
    <div class="col-md-8">
        <div>
            <h5>${movie.original_title}</h5>
            <p>${movie.overview}</p>
            <p><small class="badge badge-primary">${movie.vote_average}</small>
            </p>
            <hr>
            ${genres}
        </div>
    </div>
    `
    ;

    html += `</div">`;

    elements.movieDetailsContainer.classList.remove('d-none');
    elements.movieDetailsContainer.classList.add('d-block');
    elements.movieDetails.innerHTML = html;
}

export const backToTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
}