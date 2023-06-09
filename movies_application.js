"use strict";
$(document).ready(function() {
    fetch(url).then(response => response.json()).then(movies => console.log(movies));

       fetch(`${url}/1`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({title: "An Education", rating: "5", genre: "Romance", image:'<img class="image" src="img/an-education.jpg">' })
    }).then(resp => resp.json()).then(movies => console.log(movies));

    fetch(`${url}/2`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({title: "Love Me If You Dare", rating: "5", genre: "Romance", image:'<img class="image" src="img/love-me-if-you-dare.jpeg">'})
    }).then(resp => resp.json()).then(movies => console.log(movies));

    fetch(`${url}/3`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({title: "Titanic", rating: "4", genre: "Romance", image:'<img class="image" src="img/titanic.jpeg">'})
    }).then(resp => resp.json()).then(movies => console.log(movies));

    fetch(`${url}/4`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({title: "Something Borrowed", rating: "2", genre: "Romance", image:'<img class="image" src="img/something-borrowed.jpeg">'})
    }).then(resp => resp.json()).then(movies => console.log(movies));
    //Displaying movies from JSON in HTML
    let movieDisplay = () => {
        let loading = `<div class="loading"><img src="../img/loading-gif.gif"></div>`;
        $(".display-movies").html(loading);
        fetch(url).then(resp => resp.json()).then(movies => {
            let htmlMovies = "";
            let html = "";
            movies.forEach(function (movie) {
                html += `<option value=${movie.id}>${movie.title}</option>`;
                htmlMovies += `<div class="image">${movie.image}<div>`;
                htmlMovies += `<h2 class="title">${movie.title}</h2><div class="genre">${movie.genre}</div>`;
                htmlMovies += `<div><div class="rating">${movie.rating}</div></div>`;
                htmlMovies += `</div></div>`;
            });
            console.log(movies);
            $(".display-movies").html(htmlMovies);
        });
    };
    movieDisplay();

});