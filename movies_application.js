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
            $("#selectMovie").html("<option value='-1' selected>Select a movie</option>" + html);
        });
    };
    movieDisplay();

// Show/hide the edit menu
    $(document).on("click", "#edit-movie, #add-movie-submit", function() {
        $(".edit-movie").toggleClass("hidden");
        $(".select-movie").toggleClass("hidden");
    });

// Show/hide the delete menu
    $(document).on("click", "#delete, #delete-movie", function() {
        $(".dropdown-menu.delete-movie").toggleClass("hidden");
        $("#delete-movie").toggleClass("hidden");
    });

// Show/hide the post menu
    $(document).on("click", "#add-movie, #add-movie-submit", function() {
        $(".dropdown-menu.addMovie").toggleClass("hidden");
    });

// Update input fields on option change
    $(document).on("change", "#selectMovie", function() {
        let request = $(this).val();
        console.log(request);

        // Grab info from the JSON file and populate the input fields
        moviesAll.forEach(function (movie) {
            if (movie.id == request) {
                $("#edit-title").attr("value", movie.title);
                $("#edit-genre").attr("value", movie.genre);
                $("#edit-rating").attr("value", movie.rating);
            }
        })
    });


    // Add movie
    $("#add-movie").click((event)=>{
        event.preventDefault();
        let addMovie={
            title: $("#movie-title").val(),
            genre: $("#select-genre").val(),
            rating: $("#select-rating").val(),
            image: '<img class="image" src="img/no-picture-avaliable.GIF">'
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

    // Edit Movie
    $("#edit-movie").click(()=>{
        let input = $("#selectMovie").val()
        let editMovie={
            title: $("#edit-title").val(),
            genre: $("#select-edit-genre").val(),
            rating: $("#select-edit-rating").val(),
            image: '<img class="image" src="img/no-picture-avaliable.GIF">'
        }
        const patchOptions ={
            method:'PATCH',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editMovie),
        }
        fetch(`${url}/${input}`, patchOptions).then(response => response.json()).then(movieDisplay).catch(error=>console.log(error));
    });






});