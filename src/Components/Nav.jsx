import React, { useEffect, useState } from "react";
import Logo from "../assets/movielogo.png";
import bg from "../assets/moviebackground.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./UI/StateProvider";
import { actionTypes } from "./UI/Reducer";

const Nav = () => {
  const[{ searchTerm }, dispatch] = useStateValue()
  const [search, setSearch] = useState(``);
  const navigate = useNavigate();

  function onSearch(e) {
    e.preventDefault();
    console.log(search);
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      searchTerm: search,
    });



    navigate("/movies");
  }

  function handleKeyUp(event) {
    if (event.key === "Enter") {
      onSearch(event);
    }
  }

  function handleIconClick() {
    onSearch({ preventDefault: () => {} });
  }

  return (
    <>
      <section id="landing">
        <div className="movie__background">
          <figure className="movie__background--wrapper">
            <div className="nav__content">
              <div className="nav__left">
                <figure className="nav__logo--wrapper">
                  <img src={Logo} alt="" className="nav__logo" />
                </figure>
                <a href="#home" className="nav__link">
                  Home
                </a>
                <a href="" className="nav__link">
                  Contact
                </a>
              </div>
              <div className="nav__right">
                <div className="nav__input--wrapper">
                  <input
                    type="text"
                    className="nav__input"
                    placeholder="Find a movie"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    onKeyUp={handleKeyUp}
                  />
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="fa-solid fa-magnifying-glass nav__search"
                    onClick={handleIconClick}
                    aria-hidden="true"
                  />
                </div>
                <i
                  className="fa-solid fa-gear nav__settings"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
            <img src={bg} alt="" className="movie__background--img" />
            <div className="movie__background--text">
              <h1 className="movie__background--title">
                Ticket<span className="textcolor">+</span>
              </h1>
              <h3 className="movie__background--para">
                With over <span className="textcolor">3000</span> movies on
                Ticket
                <span className="textcolor">+</span>, the possibilites are
                endless!
              </h3>
              <div className="movie__background--search">
                <div className="movie__input--wrapper form__submit">
                  <input
                    type="text"
                    className="movie__input"
                    placeholder="Find a movie"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    onKeyUp={handleKeyUp}
                  />
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="fa-solid fa-magnifying-glass movie__search"
                    aria-hidden="true"
                    onClick={handleIconClick}
                  />
                </div>
              </div>
            </div>
          </figure>
        </div>
      </section>
    </>
  );
};

export default Nav;
