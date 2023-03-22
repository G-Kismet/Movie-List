import movieTitle from "./Movie.js";
import {Director, Actors} from "./ProductionTeam.js";
import MovieList from "./MovieList.js";


let DarnellMartin = new Director("Darnell", "Martin", "American", "African-Irish American woman television and film director, screenwriter, and film producer.")


let LyricRoss = new Actors("Lyric", "Ross","various", "African-American voice actress and drama star. ")


let TEWWG = new movieTitle('Their Eyes Were Watching God', 'n/a', "cast", "March 6, 2005", "synopsis?", "Book-adaption",
 "Golden Globe Award for Best Performance by an Actress In A Mini-series or Motion Picture Made for Television","6.4" )  

let WendellAndWild = new movieTitle("Wendell & Wild", `${DarnellMartin}`, `${LyricRoss}`,"October 21, 2022",
"The two devious demon brothers Wendell and Wild have to face their arch-enemy with the help of the nun Sister Helly, who is notorious for expelling demons. However, the brothers are not only plagued by her, but also by her altar boys.", "Animation ??", "No Accolades", "6.4")



//create MovieList
let Musicals = new MovieList("Musicals")
//add Movie to Musical Movie List
Musicals.addMovie(WendellAndWild);
//remove Movie from Musical Movie
Musicals.removeMovie(WendellAndWild);

let FavoriteList = new MovieList("Favorite Movie List")
FavoriteList.addMovie(TEWWG);

console.log(Musicals.Movie);
console.log(Musicals)
console.log(FavoriteList);