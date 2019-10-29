

//// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {
    //access JSON data
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            console.log(movie.title)
        })
    } else

        console.log(error)
}

data.forEach(movie => {
    //log each movies title
    console.log(movie.title)
});

