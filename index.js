import movieTitle from "./Movie.js";
import {Director, Actors} from "./ProductionTeam.js";
import MovieList from "./MovieList.js";


let TEWWG = new movieTitle('Their Eyes Were Watching God', 'n/a', "March 6, 2005", "synopsis?", "Book-adaption",
 "Golden Globe Award for Best Performance by an Actress In A Mini-series or Motion Picture Made for Television","6.4" )  

let WendellAndWild = new movieTitle("Wendell & Wild", "Henry Selick", "October 21, 2022",
"The two devious demon brothers Wendell and Wild have to face their arch-enemy with the help of the nun Sister Helly, who is notorious for expelling demons. However, the brothers are not only plagued by her, but also by her altar boys.", "Animation ??", "No Accolades", "6.4")

let Polly = new movieTitle("Polly","")


//create MovieList
let Musicals = new MovieList("Musicals")
Musicals.addMovie(WendellAndWild);

let FavoriteList = new MovieList("Favorite Movie List")
FavoriteList.addMovie(TEWWG);

console.log(Musicals.Movie);
console.log(Musicals)
console.log(FavoriteList);