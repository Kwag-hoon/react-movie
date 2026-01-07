import React from 'react';
import { Link } from 'react-router-dom';
import '../css/movie.css';

function MovieDetail({
  id,
  year,
  title,
  summary,
  description_full,
  large_cover_image,
  genres,
  rating,
}) {
  return (
    <li className="movie-card">
      <Link to={`/movie_detail/${id}`} className="card-link">
        <div className="poster-wrap">
          <img className="poster" src={large_cover_image} alt={title || 'poster'} />
        </div>
        <div className="info">
          <h4 className="title">{title}</h4>
          <p className="year">{year}</p>
          <p className="genres">{Array.isArray(genres) ? genres.join('') : ''}</p>
          <p className="summary">{summary || ''}</p>
        </div>
        <div className="rating">
          <span className="trophy">🏆</span>
          <span className="score">{rating}</span>
        </div>
      </Link>
    </li>
  );
}

export default MovieDetail;
