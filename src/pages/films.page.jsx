import { useState, useEffect } from "react";
import {
  filterFilmsByDirector,
  getListOf,
  getFilmStats,
} from "../helpers/film.helpers";
import { Link } from "react-router-dom";

function FilmsPage() {
  const [list, setList] = useState([]);
  const [searchDirector, setSearchDirector] = useState("");

  function getFilms() {
    fetch("https://studioghibliapi-d6fc8.web.app/films")
      .then((response) => response.json())
      .then((films) => setList(films))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getFilms();
  }, []);

  const filmsByDirector = filterFilmsByDirector(list, searchDirector);
  const directors = getListOf(list, "director");

  const { avg_score, total, latest } = getFilmStats(list);

  return (
    <div>
      <h1>Studio Ghibli Films</h1>
      <form>
        <div className='form-group'>
          <label htmlFor='searchDirector'>Filter By Director</label>
          <select
            name='searchDirector'
            id='searchDirector'
            value={searchDirector}
            onChange={(e) => setSearchDirector(e.target.value)}
          >
            <option value=''>All</option>
            {directors.map((director, idx) => (
              <option key={director + idx} value={director}>
                {director}
              </option>
            ))}
          </select>
        </div>
      </form>
      <div>
        <div>
          <br />
          <span># Of Films: </span>
          <span>{total}</span>
        </div>
        <div>
          <span>Average Rating: </span>
          <span>{avg_score.toFixed(2)}</span>
        </div>
        <div>
          <span>Latest Film: </span>
          <span>{latest}</span>
        </div>
      </div>
      <ul>
        {filmsByDirector.map((film) => (
          <li key={film.id}>
            <Link to={`/film/${film.id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilmsPage;
