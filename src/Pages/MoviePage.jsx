import React, { useEffect, useState } from "react";
import faSearch from "../assets/search-icon.svg";
import axios from "axios";
import Movie from "../Components/UI/Movie";
import { useStateValue } from "../Components/UI/StateProvider";
import SearchImg from "../assets/search-icon.svg";
import "./CSS/MoviePage.css";
import LoopRoundedIcon from "@mui/icons-material/LoopRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Link } from "react-router-dom";

const MoviePage = () => {
  const [search, setSearch] = useState("");
  const [searchMade, setSearchMade] = useState(false);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [{ searchTerm }, dispatch] = useStateValue();

  useEffect(() => {
    searchTerm && searchMovies();
  }, [searchTerm]);

  async function searchMovies() {
    setLoading(true);
    setSearchMade(true);
    const response = await axios.get(
      `https://omdbapi.com/?type=movie&apikey=28c39af6&s=${searchTerm}`
    );
    const movies = response.data.Search ? response.data.Search.slice(0, 6) : [];
    setMovies(movies);
    setLoading(false);
  }
  async function movieSearch(e) {
    e.preventDefault();
    setLoading(true);
    setSearchMade(true);
  }

  return (
    <div className="moviepage">
      <div className="moviepage__movies">
        <form
          className="moviepage__search"
          onSubmit={(event) => movieSearch(event)}
        >
          <div className="moviepage__search--input">
            <input
              type="text"
              value={search}
              placeholder="Search for a movie"
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
          <div className="moviepage__search--button">
            <Link to={"/"}>
            <button type="submit" className="moviepage__Home">Back to Home</button>
            </Link>
          </div>
        </form>
        {loading === false && searchMade === false && (
          <figure className="moviepage__img--wrapper">
            <img src={SearchImg} alt="" />
            <h1>Waiting for your Search...</h1>
          </figure>
        )}
        {loading === true && searchMade === true && (
          <LoopRoundedIcon  className="moviepage__loading" />
        )}
        {loading === false && searchMade === true && (
          <section id="movies">
            <div className="container movie__container">
              <div className="row movie__row">
                <div className="movies__content">
                  <div className="movies__list moviepage__movies--list">
                    {movies.map((movie) => (
                      <Movie
                        image={movie.Poster}
                        text={movie.Title}
                        key={movie.imdbID}
                        id={movie.imdbID}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default MoviePage;
