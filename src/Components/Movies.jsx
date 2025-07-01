import React from 'react';
import MoviesNew from './UI/MoviesNew';

const Movies = () => {
    return (
        <section id="movies">
        <div className="container">
          <div className="row">
            <div className="movies__content">
              <div className="movies__top">
                <h2 className="movies__top--title">Search results for:</h2>
                <h2 className="movie__search--result"></h2>
              </div>
              <div className="movies__list">
                <MoviesNew/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Movies;
