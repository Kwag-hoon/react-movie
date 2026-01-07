import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/movie.css';

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const {
          data: {
            data: { movie },
          },
        } = await axios.get(
          `https://yts.lt/api/v2/movie_details.json?movie_id=${id}`
        );
        setMovie(movie);
      } catch (error) {
        console.log('영화 상세 로딩 오류 :', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  if (isLoading) {
    return (
      <main>
        <img src={`${process.env.PUBLIC_URL}/images/bx_loader.svg`} alt="loading" />
      </main>
    );
  }

  if (!movie) {
    return (
      <main>
        <section>
          <p>영화 정보를 찾을 수 없습니다.</p>
        </section>
      </main>
    );
  }

  return (
    <main>
      <div className="detail-top">
        <button className="back-btn" onClick={() => navigate(-1)}>← 뒤로가기</button>
      </div>
      <section>
        <ul className="movie-list">
          <li className="movie-card">
            <div className="poster-wrap">
              <img
                className="poster"
                src={movie.large_cover_image}
                alt={movie.title || 'poster'}
              />
            </div>
            <div className="info">
              <h4 className="title">{movie.title}</h4>
              <p className="year">{movie.year}</p>
              <p className="genres">
                {Array.isArray(movie.genres) ? movie.genres.join('') : ''}
              </p>
              <p className="summary">{movie.description_full || movie.summary || ''}</p>
            </div>
            <div className="rating">
              <span className="trophy">🏆</span>
              <span className="score">{movie.rating}</span>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Detail;
