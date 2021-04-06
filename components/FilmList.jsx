
import styles from "./FilmList.module.css";

export const FilmList = function FilmList(props) {
  const { films } = props;

  return (
    <div className={styles.grid}>
      {films.map((film) => (
        <a
          href={`https://www.imdb.com/title/${film.imdbId}`}
          className={styles.card}
        >
          <div className={styles.posterWrapper}>
            <div>
              <img
                className={styles.poster}
                src={film.poster}
                width="48"
                height="72"
              />
              <span className={styles.frame} />
            </div>
          </div>
          <h3>{film.name}</h3>
        </a>
      ))}
    </div>
  );
};
