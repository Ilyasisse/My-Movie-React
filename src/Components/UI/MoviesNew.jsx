import React from "react";
import Movie from "./Movie";
import Poster1 from "../../assets/postertest.jpg";
import Poster2 from "../../assets/postertest2.jpg";
import Poster3 from "../../assets/postertest3.jpg";
import Poster4 from "../../assets/postertest4.jpg";
import Poster5 from "../../assets/postertest5.jpg";
import Poster6 from "../../assets/postertest6.jpg";

const MoviesNew = () => {
  return (
    <>
      <Movie
        key={"tt3896198"}
        id={"tt3896198"}
        image={Poster1}
        text="Guardians of the Galaxy Vol. 2"
      />
      <Movie
        key={"tt0848228"}
        id={"tt0848228"}
        image={Poster2}
        text="Avengers"
      />
      <Movie
        key={"tt2250912"}
        id={"tt2250912"}
        image={Poster3}
        text="Spider-Man: Homecoming"
      />
      <Movie
        key={"tt5113044"}
        id={"tt5113044"}
        image={Poster4}
        text="Minions: Rise of Gru"
      />
      <Movie
        key={"tt4633694"}
        id={"tt4633694"}
        image={Poster5}
        text="Spider-Man: Into the Spider-Verse"
      />
      <Movie key={"tt10954984"} id={"tt10954984"} image={Poster6} text="Nope" />
    </>
  );
};

export default MoviesNew;
