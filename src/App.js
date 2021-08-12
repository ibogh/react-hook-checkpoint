import "./App.css";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import React, { useState } from "react";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Titanic",
      description:
        "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYjUIu2o5v5u3rfJpCq5Cz0Q9WK--XdYxai_N2d0ImohPiIOp",
      rate: 5,
    },
    {
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkmMH-bEDUS2TmK8amBqgIMgrfzN1_mImChPuMrunA1XjNTSKm",
      rate: 3,
    },
    {
      title: "The Godfather",
      description:
        "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR107,0,630,1200_AL_.jpg",
      rate: 5,
    },
    {
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      rate: 4,
    },
    {
      title: "12 Angry Men",
      description:
        "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
      rate: 2,
    },
    {
      title: "Schindler's List",
      description:
        "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      rate: 2,
    },
    {
      title: "In Time",
      description:
        "In a future where people stop aging at 25, but are engineered to live only one more year, having the means to buy your way out of the situation is a shot at immortal youth.",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/e/e0/Intimefairuse.jpg",
      rate: 4,
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      description:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/b/be/The_Lord_of_the_Rings_-_The_Return_of_the_King_%282003%29.jpg",
      rate: 4,
    },
    {
      title: "The Da Vinci Code",
      description:
        "A murder inside the Louvre, and clues in Da Vinci paintings, lead to the discovery of a religious mystery protected by a secret society for two thousand years, which could shake the foundations of Christianity.",
      posterUrl:
        "http://soundtrackfest.com/wp-content/uploads/2019/09/TheDaVinciCodeInConcert-Premiere2020-Poster.jpg",
      rate: 4,
    },
    {
      title: "Fatherhood",
      description:
        "A father brings up his baby girl as a single dad after the unexpected death of his wife who died a day after their daughter's birth.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMzU5YWYzZGMtNTE2My00NDE0LTgxNWYtZDYzYjI2YzM3OWJlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      rate: 4,
    },
    {
      title: "Dumb and Dumber",
      description:
        "After a woman leaves a briefcase at the airport terminal, a dumb limo driver and his dumber friend set out on a hilarious cross-country road trip to Aspen to return it.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BZDQwMjNiMTQtY2UwYy00NjhiLTk0ZWEtZWM5ZWMzNGFjNTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      rate: 3,
    },
    {
      title: "Face/Off",
      description:
        "To foil a terrorist plot, an FBI agent undergoes facial transplant surgery to assume the identity of the criminal mastermind who murdered his only son, but the criminal wakes up prematurely and seeks revenge.",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/1/1c/FaceOff_poster.jpg",
      rate: 4,
    },
  ]);
  const addNewMovie = (themovie) => {
    setMovies([...movies, themovie]);
  };
  const [rateFilter, setRateFilter] = useState(0);
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div className="mainPage">
      <NavBar
        addNewMovie={addNewMovie}
        setRateFilter={setRateFilter}
        setSearchFilter={setSearchFilter}
      />
      <MovieList
        movies={movies}
        rateFilter={rateFilter}
        searchFilter={searchFilter}
      />
    </div>
  );
}

export default App;
