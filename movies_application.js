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
    let moviesAll=[];
    let movieDisplay = () => {
        let loading = `<div><img class="loading" src="../img/loading.gif"></div>`;
        $("#display-movies").html(loading);
        setTimeout(() => {
            fetch(url).then(resp => resp.json()).then(movies => { moviesAll = movies
                let htmlMovies = "";
                let html = "";
                moviesAll.forEach(function (movie) {
                    html += `<option value=${movie.id}>${movie.title}</option>`;

                    htmlMovies += `<div class = "card"><h2 class="title">${movie.title}</h2>`
                    htmlMovies += `<div class="genre">${movie.genre}</div>`
                    htmlMovies += `<div class="rating">${createRatings(movie)}</div> `;
                    htmlMovies +=`<div class="image">${movie.image}</div>`
                    htmlMovies += `</div></div>`

                });

                console.log(movies);
                $("#display-movies").html(htmlMovies);
                $("#edit-movie").html("<option value='-1' selected>Select a movie</option>" + html);
                $("#delete-movie").html("<option value='-1' selected>Select a movie</option>" + html);
            });
        }, 2000);

    };
    movieDisplay();


// Update input fields on option change

    // Add movie
    $("#add-movie-submit").click((event)=>{
        event.preventDefault();
        let addMovie={
            title: $("#add-name").val(),
            genre: $("#add-genre").val(),
            rating: $("#add-rating").val(),
            image: '<img class="image" src="img/no-picture-avaliable.GIF">'
            // image: $("#add-image").val()
        }
        const postOptions ={
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(addMovie),
        }
        fetch(url, postOptions).then(response => response.json()).then(movieDisplay).catch(error=>console.log(error));
    });

    $(document).on("change", "#edit-movie", function() {
        let request = $(this).val();
        console.log(request);

        // Grab info from the JSON file and populate the input fields
        moviesAll.forEach(function (movie) {
            if (movie.id == request) {
                $("#edit-title").attr("value", movie.title);
                $("#edit-genre").attr("value", movie.genre);
                $("#edit-rating").attr("value", movie.rating);
                console.log("movie:" + movie); // Move the console.log inside the loop
            }
        });
    });

    $("#edit-movie-submit").click(() => {
        let input = $("#edit-movie").val(); // Corrected selector
        let editMovie = {
            title: $("#edit-title").val(),
            genre: $("#edit-genre").val(),
            rating: $("#edit-rating").val(),
            image: '<img class="image" src="img/edit-default.jpg">'
        };

        const patchOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editMovie),
        };

        fetch(`${url}/${input}`, patchOptions)
            .then(response => response.json())
            .then(movieDisplay)
            .catch(error => console.log(error));
    });


    // /delete movie
    let deleteOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    };

    $("#delete-movie").change(function()  {
        let userInput = $(this).val();
        console.log(userInput);
        $("#delete-movie-submit").click(function() {
            //DELETE request
            fetch(`${url}/${userInput}`, deleteOptions)
                .then(movieDisplay);
        });
    });
});

function createRatings(movie){
    let html = "";
    for(let i = 0; i < movie.rating; i++){
        html += "<i class=\"fas fa-star\" style='color: yellow'></i>"
    }
    if(movie.rating !== 5){
        for(let j = movie.rating; j < 5; j++){
            html += "<i class=\"fas fa-star\"></i>";
        }
    }
    return html;
}
createRatings();































