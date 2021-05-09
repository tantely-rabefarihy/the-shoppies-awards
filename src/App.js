import "./App.scss";
import React, { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddToNominates from "./components/AddToNominates";
import RemoveNominates from "./components/RemoveNominates";
const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [nominates, setNominates] = useState([]);
  const [isNominated, setIsNominated] = useState();

  useEffect(() => {
    const getMovie = async (searchValue) => {
      try {
        const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        const moviesOnly = data.Search?.filter(
          (movie) => movie.Type === "movie"
        );
        setMovies(() => moviesOnly);
      } catch (err) {
        console.log({ err });
      }
    };

    getMovie(searchValue);

    const checkDup = (movies, nominates) => {
      if (movies !== undefined) {
        return setIsNominated(() =>
          movies.filter((movie) => {
            return nominates.some(
              (nominate) => nominate.imdbID === movie.imdbID
            );
          })
        );
      } else {
        return null;
      }
    };
    checkDup(movies, nominates);

    // console.log("MOVIES SEARCHED ", movies);
    // console.log("NOMINATED ", nominates);
  }, [searchValue]);

  useEffect(() => {
    const myNominates = JSON.parse(localStorage.getItem("movies-nominated"));
    if (myNominates) {
      setNominates(() => myNominates);
    }
  }, []);

  const saveToLocalStorage = (movies) => {
    localStorage.setItem("movies-nominated", JSON.stringify(movies));
  };

  const handleAddNominates = (movie) => {
    const sameMovie = nominates.find((nom) => nom.imdbID === movie.imdbID);
    let newNominates;
    if (sameMovie) {
      // setIsNominated(true);
      window.alert("You have already added this movie 🎥 ");
      newNominates = [...nominates];
    } else if (nominates.length === 5) {
      newNominates = [...nominates];
      window.alert("You reached the maximum number of nominations !");
    } else {
      newNominates = [...nominates, movie];
    }
    setNominates(() => newNominates);
    saveToLocalStorage(newNominates);
  };

  const handleRemove = (movie) => {
    const newNom = nominates.filter((fav) => fav.imdbID !== movie.imdbID);
    setNominates(newNom);
    saveToLocalStorage(newNom);
  };

  console.log({ isNominated });

  return (
    <>
      <div className="movie-app">
        <div>
          <h1>The Shoppies</h1>
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className="">
          <MovieListHeading heading="Movies" />
        </div>
        <div className="movie-row">
          <MovieList
            movies={movies}
            nominateAction={AddToNominates}
            clickAction={handleAddNominates}
            isNominated={isNominated}
          />
        </div>
        <div className="">
          <MovieListHeading heading="Nominates" />
        </div>
        <div className="movie-row">
          <MovieList
            movies={nominates}
            nominateAction={RemoveNominates}
            clickAction={handleRemove}
          />
        </div>
      </div>
    </>
  );
}

export default App;
