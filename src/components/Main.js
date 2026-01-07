import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieDetail from '../sub/MovieDetail';


function Main(props) {
  // 1. 상태관리
  const [movies, setMovies] = useState([]);  //json데이터
  const [isLoading, setIsLoading] = useState(true);  //로딩바

  // 2. 영화데이터 로딩하기
  const getMovies = async () => {
    try {
      const {
        data: {
          data: { movies },
        },
      } = await axios.get(
        'https://yts.lt/api/v2/list_movies.json?sort_by=rating'
      );
      setMovies(movies);
    } catch (error) {
      console.log('영화데이터 로딩 오류 :', error);
    } finally {
      setIsLoading(false);
    }
  };
    
      // setMovies(json.data.movies);  // 상태변수에 데이터 배열값 담기 
      // setIsLoading(false);  //데이터 로딩시 상태변수를 false임. 
   
  // 3. 영화데이터 로딩하기( 라이프 사이클에서 데이터를 한번만 로딩한다. )
  useEffect(() => {
    getMovies();
  }, []);
    
  // 4. 영화데이터 콘솔창에 출력하기
  console.log(movies);


  return (
    <main>
      {/* 삼항조건 연산자를 사용하여 isLoading이 true/fauls값에 따라 화면 변경하기 */}
      {isLoading ? (<img src={`${process.env.PUBLIC_URL}/images/bx_loader.svg`} alt='loading' />) :(
        <section>
          <ul className="movie-list">
            {movies.map((movie) => (
              // <li key={movie.id}>
              //  <p>영화 아이디: {movie.id}</p>
              //  <p>영화 개봉년도: {movie.year}</p>
              //  <p>영화 제목: {movie.title}</p>    
                   
              // {/* 줄거리가 너무 길어서 100자만 출력하도록 설정 slice사용 */}     
              //  <p>영화 줄거리: {movie.summary.slice(0, 100) + '...'}</p>      
              //  {/* <p>영화 줄거리: {movie.summary.length > 100 ? movie.summary.substring(0, 100) + '...' : movie.summary}</p>   */}
              //  <p>영화 포스터: <img src={movie.large_cover_image} alt={movie.title} /></p>
              //  <p>영화 장르: {movie.genres.join(', ')}</p>
              //  <p>영화 평점: {movie.rating}</p>
                
              // </li>
              <MovieDetail key={movie.id} {...movie} 
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                description_full={movie.description_full}
                large_cover_image={movie.large_cover_image}
                genres={movie.genres}
                rating={movie.rating}
              
              />
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}

export default Main;
