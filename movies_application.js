"use strict";

// import {access_key} from "./accessKey";

const discover_url =`https://api.themoviedb.org/3/discover/movie?certification_country=United%20States&include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&api_key=${access_key}`;
const search_url = `https://api.themoviedb.org/3/search/movie?&api_key=${access_key}&query"`

getMovies(discover_url);
async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.results)
}












// let moviesAll=[];
// $(document).ready(function() {
//
//     fetch(url).then(response => response.json()).then(movies => moviesAll=movies);
//
//     fetch(`${url}/1`, {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({title: "An Education", rating: "5", genre: "Romance", image:'<img class="image" src="img/an-education.jpg">' })
//     }).then(resp => resp.json()).then(movies => console.log(movies));
//
//     fetch(`${url}/2`, {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({title: "Love Me If You Dare", rating: "5", genre: "Romance", image:'<img class="image" src="img/love-me-if-you-dare.jpeg">'})
//     }).then(resp => resp.json()).then(movies => console.log(movies));
//
//     fetch(`${url}/3`, {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({title: "Titanic", rating: "4", genre: "Romance", image:'<img class="image" src="img/titanic.jpeg">'})
//     }).then(resp => resp.json()).then(movies => console.log(movies));
//
//     fetch(`${url}/4`, {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({title: "Something Borrowed", rating: "2", genre: "Romance", image:'<img class="image" src="img/something-borrowed.jpeg">'})
//     }).then(resp => resp.json()).then(movies => console.log(movies));
//     // Displaying movies from JSON in HTML
//
//     let movieDisplay = () => {
//         let loading = `<div><img class="loading" src="../img/loading.gif"></div>`;
//         $("#display-movies").html(loading);
//         setTimeout(() => {
//             fetch(url).then(resp => resp.json()).then(movies => {
//                 moviesAll = movies
//                 // Get the selected sort option
//                 const sortBy = $("#sort-by").val();
//
//                 // Sort the movies based on the selected option
//                 moviesAll.sort((a, b) => {
//                     if (sortBy === "rating") {
//                         return b.rating - a.rating;
//                     } else if (sortBy === "title") {
//                         return a.title.localeCompare(b.title);
//                     } else if (sortBy === "genre") {
//                         return a.genre.localeCompare(b.genre);
//                     }
//                 });
//
//                 let htmlMovies = "";
//                 let html = "";
//                 moviesAll.forEach(function (movie) {
//                     html += `<option value=${movie.id}>${movie.title}</option>`;
//                     htmlMovies += `<div class = "card"><h2 class="title">${movie.title}</h2>`
//                     htmlMovies += `<div class="genre">${movie.genre}</div>`
//                     htmlMovies += `<div class="rating">${stars(movie)}</div> `;
//                     htmlMovies += `<div class="image">${movie.image}</div>`
//                     htmlMovies += `</div></div>`
//                 });
//                 console.log(moviesAll);
//                 $("#display-movies").html(htmlMovies);
//                 $("#edit-movie").html("<option value='-1' selected>Select a movie</option>" + html);
//                 $("#delete-movie").html("<option value='-1' selected>Select a movie</option>" + html);
//             })
//         .catch(error => console.log(error));
//         }, 2000);
//
//     };
//     $("#sort-by").change(movieDisplay);
//     // Function to filter movies based on user search criteria
//     const filterMovies = (searchCriteria, searchValue) => {
//         return moviesAll.filter((movie) => {
//             if (searchCriteria === "rating") {
//                 return movie.rating.toString() === searchValue;
//             } else if (searchCriteria === "title") {
//                 return movie.title.toLowerCase().includes(searchValue.toLowerCase());
//             } else if (searchCriteria === "genre") {
//                 return movie.genre.toLowerCase().includes(searchValue.toLowerCase());
//             }
//         });
//     };
//
// // Function to display filtered movies
//     const displayFilteredMovies = (filteredMovies) => {
//         let htmlMovies = "";
//         filteredMovies.forEach((movie) => {
//             htmlMovies += `<div class="card">
//       <h2 class="title">${movie.title}</h2>
//       <div class="genre">${movie.genre}</div>
//       <div class="rating">${stars(movie)}</div>
//       <div class="image">${movie.image}</div>
//     </div>`;
//         });
//         $("#display-movies").html(htmlMovies);
//     };
//
// // Search functionality
//     $("#search-submit").click((event) => {
//         event.preventDefault();
//         const searchCriteria = $("#search-criteria").val();
//         const searchValue = $("#search-value").val().trim().toLowerCase();
//
//         if (searchCriteria && searchValue) {
//             const filteredMovies = filterMovies(searchCriteria, searchValue);
//             displayFilteredMovies(filteredMovies);
//         }
//     });
//
//     let stars = (movie) => {
//         let html = "";
//         if (movie && movie.rating !== undefined) {
//             for (let i = 0; i < movie.rating; i++) {
//                 html += "<i class=\"fas fa-star\" style='color: red'></i>";
//             }
//             if (movie.rating !== 5) {
//                 for (let j = movie.rating; j < 5; j++) {
//                     html += "<i class=\"fas fa-star\"></i>";
//                 }
//             }
//         }
//         return html;
//     };
//
//     movieDisplay();
//
//     // Add movie
//     $("#add-movie-submit").click((event)=>{
//         event.preventDefault();
//         //disabled attribute to buttons while their corresponding ajax request is still pending
//         $("#add-movie-submit").prop("disabled", true);
//         let addMovie={
//             title: $("#add-name").val(),
//             genre: $("#add-genre").val(),
//             rating: $("#add-rating").val(),
//             image: '<img class="image" src="img/add.default.GIF">'
//         }
//         const postOptions ={
//             method:'POST',
//             headers:{
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(addMovie),
//         }
//         fetch(url, postOptions).then(response => response.json()).then(movieDisplay)
//             .then(()=> {
//                 $("#add-movie-submit").prop("disabled", false); // enabled the button
//         });
//     });
//     // Edit Movies
//     $(document).on("change", "#edit-movie", function() {
//         let request = $(this).val();
//         console.log(request);
//
//          moviesAll.forEach(function(movie){
//
//             if (movie.id == request) {
//                 $("#edit-title").attr("value", movie.title);
//                 $("#edit-genre").attr("value", movie.genre);
//                 $("#edit-rating").attr("value", stars(movie));
//             }
//         })
//     });
//
//     $("#edit-movie-submit").click(()=>{
//         //disabled attribute to buttons while their corresponding ajax request is still pending
//         $("#edit-movie-submit").prop("disabled", true);
//         let input = $("#edit-movie").val();
//         let editMovie = {
//             title: $("#edit-name").val(),
//             genre: $("#edit-genre").val(),
//             rating: $("#edit-rating").val(),
//             image: '<img class="image" src="img/edit-default.jpg">'
//         };
//
//         const patchOptions = {
//             method: 'PATCH',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(editMovie),
//         };
//         console.log(editMovie);
//         fetch(`${url}/${input}`, patchOptions)
//             .then(response => response.json())
//             .then(movieDisplay)
//             .then(()=>{
//                 $("#edit-movie-submit").prop("disabled", false);  //enable the button
//             })
//             .catch(error => console.log(error));
//     });
//
//
//     // /delete movie
//     let deleteOptions = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     };
//
//     $("#delete-movie").change(function()  {
//         let userInput = $(this).val();
//         console.log(userInput);
//         $("#delete-movie-submit").click(function() {
//             $("#delete-movie-submit").prop("disabled", true);
//             //DELETE request
//             fetch(`${url}/${userInput}`, deleteOptions)
//                 .then(movieDisplay)
//                 .then(()=>{
//                     $("#delete-movie-submit").prop("disabled", false);
//             })
//         });
//     });
//     document.getElementById("edit-movie-submit").addEventListener("click", function() {
//         this.classList.add("button-clicked");
//     });
//     //TOGGLE
//
//     const ball = document.querySelector(".toggle-ball");
//     const items = document.querySelectorAll("div .card, .toggle, body"); // Adjusted the selector
//
//     ball.addEventListener("click", () => {
//         items.forEach((item) => {
//             item.classList.toggle("active");
//         });
//         ball.classList.toggle("active");
//     });
//
//
// });

