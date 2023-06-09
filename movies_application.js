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

});