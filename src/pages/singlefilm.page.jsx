import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleFilmPage() {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getFilm = async () => {
      try {
        const response = await fetch(
          `https://studioghibliapi-d6fc8.web.app/films/${id}`
        );
        const film = await response.json();
        setItem(film);
      } catch (error) {
        console.error(error);
      }
    };

    getFilm();
  }, [id]);

  return (
    <div>
      {item.image && (
        <div>
          <img src={`${item.image}`} alt={`${item.title} Poster`} />
        </div>
      )}
      <div>
        <h1>{item.title || "Loading..."}</h1>
        {item.director && item.producer && (
          <p>
            Directed by {item.director}. Produced by {item.producer}.
          </p>
        )}
        {item.release_date && item.rt_score && (
          <p>
            The film was released in <strong>{item.release_date}</strong> and
            garnered a <strong>{item.rt_score}</strong> aggregate score on{" "}
            <a
              href='https://www.rottentomatoes.com/'
              target='_blank'
              rel='noreferrer'
            >
              Rotten Tomatoes
            </a>
            .
          </p>
        )}
        <h2>Description</h2>
        <p>{item.description || "No description available."}</p>
      </div>
    </div>
  );
}

export default SingleFilmPage;
