"use strict";
$(document).ready(function() {
    fetch(url).then(response => response.json()).then(movies => console.log(movies));

});