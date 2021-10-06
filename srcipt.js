'use strict';

let i = 0;
const number0fFilms = prompt('How many movies have you already watched?', '');


const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('What was the last movie you saw?', ''),
//     b = prompt('How would you rate it?', ''),
//     c = prompt('What was the last movie you saw?', ''),
//     d = prompt('How would you rate it?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// while (i < 2) {
//     const a = prompt('What was the last movie you saw?', ''),
//     b = prompt('How would you rate it?', '');
//     if (a == '' || b == '' || a == null || b == null || a.length > 50) continue
//     personalMovieDB.movies[a] = b
//     i++;
// }

// console.log(personalMovieDB);

// if (personalMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
// } else if (personalMovieDB.count > 30) {
//     console.log('Вы киноман!');
// } else console.log('Произошла ошибка');

personalMovieDB.count <= 10 ? console.log('Просмотрено довольно мало фильмов') :
(personalMovieDB.count > 10 && personalMovieDB.count < 30) ? console.log('Вы классический зритель') :
personalMovieDB.count >= 30 ? console.log('Вы киноман!') : console.log('Произошла ошибка');
