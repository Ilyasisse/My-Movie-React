import React, { useEffect, useState } from "react";
import Logo from "../assets/movielogo.png";
import bg from "../assets/moviebackground.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./UI/StateProvider";
import { actionTypes } from "./UI/Reducer";
 

const Nav = () => {
  const [{ searchTerm }, dispatch] = useStateValue()
  const [Navsearch, setNavSearch] = useState(``);
  const [Mainsearch, setMainSearch] = useState(``);
  const navigate = useNavigate();
  const [showInput, setShowInput] = useState(false);

  function onNavSearch(e) {
    e.preventDefault();
    
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      searchTerm: Navsearch,
    });

    navigate("/movies");
  }



  function onMainSearch(e) {
    e.preventDefault();
    
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      searchTerm: Mainsearch,
    });

    navigate("/movies");
  }
  
  
  function handleKeyUp(event) {
    if (event.key === "Enter") {
      onNavSearch(event);
    }
  }

  function handleMainKeyUp(event) {
    if (event.key === "Enter") {
      onMainSearch(event);
    }
  }
  
  function handleIconClick() {
  Navsearch({ preventDefault: () => { } });
  }

  function handleMainIconClick() {
  onMainSearch({ preventDefault: () => {} }); // search from main section
}

  function handleIconClick() {
    setShowInput(prev => !prev);
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
                    className={`nav__input ${showInput ? "nav__input--active" : ""}`}
                    placeholder="Find a movie"
                    value={Navsearch}
                    onChange={(event) => setNavSearch(event.target.value)}
                    onKeyUp={handleKeyUp}
                  />
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="fa-solid fa-magnifying-glass nav__search"
                    aria-hidden="true"
                    onClick={handleIconClick}
                  />
                </div>
                <FontAwesomeIcon icon={faGear}
                  className="fa-solid fa-gear nav__settings"
                  aria-hidden="true"

                />

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
                    value={Mainsearch}
                    onChange={(event) => setMainSearch(event.target.value)}
                    onKeyUp={handleMainKeyUp}
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
