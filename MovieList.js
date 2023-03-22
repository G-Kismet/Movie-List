class MovieList {
    constructor(title, Movie = []){
        this.title = title;
        this.Movie = Movie;
    }
addMovie(Movie) {
    if (typeof Movie === `object`) {
        this.Movie.push(Movie);
    } else {
        return console.log('There is an error with your input')
    }
}
removeMovie(Movie){
    this.Movie.pop(Movie)
    return console.log(`${Movie} has been removed.`)
}


}




export default MovieList