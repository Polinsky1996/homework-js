'use strict';

let i = 0;
let number0fFilms; 

function start() {
    number0fFilms = +prompt('How many movies have you already watched?', '');
    
    while (number0fFilms == '' || number0fFilms == null || isNaN(number0fFilms)) {
        number0fFilms = +prompt('How many movies have you already watched?', '');
    }
}

start();

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    while (i < 2) {
        const a = prompt('What was the last movie you saw?', ''),
        b = prompt('How would you rate it?', '');
        if (a == '' || b == '' || a == null || b == null || a.length > 50) continue
        personalMovieDB.movies[a] = b
        i++;
    }
    console.log(personalMovieDB);    
}

rememberMyFilms();

function detectedPersonalLevel() {
    personalMovieDB.count <= 10 ? console.log('Просмотрено довольно мало фильмов') :
    (personalMovieDB.count > 10 && personalMovieDB.count < 30) ? console.log('Вы классический зритель') :
    personalMovieDB.count >= 30 ? console.log('Вы киноман!') : console.log('Произошла ошибка');    
}

detectedPersonalLevel()

function shomMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}


function writeYourGenres() {
    for (i = 1 ; i <= 3 ; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();
console.log(personalMovieDB);