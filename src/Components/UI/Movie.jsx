import React from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { Link } from "react-router-dom";

const Movie = ({ image, text, id }) => {
  return (
    <div className="movie">
      <figure className="movie__img--wrapper">
        <img src={image} alt="" className="movie__img" />
        <h3 className="movie__info--title">{text}</h3>
        <Link to={`/movies/${id}`}>
          <button className="movie__button">Find out More </button>
        </Link>
      </figure>
    </div>
  );
};

export default Movie;
