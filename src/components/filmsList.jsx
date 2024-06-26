import { useState, useEffect } from "react";

const FilmsList = (props) => {
  const [list, setList] = useState([]);

  const getFilms = () => {
    fetch("https://studioghibliapi-d6fc8.web.app/films")
      .then((response) => response.json())
      .then((films) => {
        setList(films);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <>
      <h1>Studio Ghibli Films</h1>
      <ul>
        {list.map((film) => {
          return <li key={film.id}>{film.title}</li>;
        })}
      </ul>
    </>
  );
};

export default FilmsList;
