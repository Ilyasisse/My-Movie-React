import React, { use, useEffect, useState } from "react";
import "./CSS/MovieInfoPage.css";
import { ImageOutlined } from "@mui/icons-material";
import Movies from "../Components/UI/MoviesNew";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const MovieInfoPage = () => {
  const id = useParams();
  const [movie, setMovies] = useState({});
  const [recMovies, setRecMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchMovies(movieId) {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=28c39af6&i=${movieId}&plot=full`
    );

    const movie = await response.data;
    setMovies(movie);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    fetchMovies(id.id);
  }, [id]);

  return (
    <div className="movieinfopage">
      <div className="container movieinfo__container">
        <div className="row movieinfo__row">
          {!loading ? (
            <div className="movieinfo">
              <figure className="movieinfo__img">
                <img src={movie.Poster} alt="" />
              </figure>
              <div className="movieinfo__text">
                <h1>{movie.Title}</h1>
                <div className="movieinfo__info">
                  <p>{movie.Released}</p>
                  <p>
                    <b>.</b>
                  </p>
                  <p>{movie.Runtime}</p>
                  <p>
                    <b>.</b>
                  </p>
                  <p>{movie.imdbRating}/10</p>
                </div>
                <h3>Overview:</h3>
                <p>{movie.Plot}</p>
                <button className="movieinfo__button no-cursor">
                  <FontAwesomeIcon icon={faPlay} /> 
                   Watch
                </button>
              </div>
              <div className="moviepage__search--button">
                <Link to={"/"}>
                  <button type="submit" className="moviepage__Home">Back to Home</button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="movieinfo">
              <div className="skeleton skeleton__img"></div>
              <div className="movieinfo__text">
                <div className="skeleton skeleton__title"></div>
                <div className="movieinfo__info">
                  <div className="skeleton skeleton__text"></div>
                  <p>
                    <b>.</b>
                  </p>
                  <div className="skeleton skeleton__text"></div>
                  <p>
                    <b></b>
                  </p>
                  <div className="skeleton skeleton__text"></div>
                </div>
                <h3>Overview:</h3>
                <div className="skeleton skeleton__para"></div>
                <div className="skeleton skeleton__para"></div>
                <div className="skeleton skeleton__para"></div>
                <div className="skeleton skeleton__para"></div>
                <div className="skeleton skeleton__para skeleton__para--half"></div>
                <div className="skeleton skeleton__button"></div>
              </div>
            </div>
          )}
          <div className="movieinfo__recommended">
            <h1>Recommended Movies</h1>
            <div className="movieinfo__recommended--list">
              <Movies />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfoPage;
