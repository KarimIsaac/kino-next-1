import styles from "../styles/Home.module.css";

export default function LatestMovies({ movies }) {
  const moviesList = movies.map((movie) => {
    return (
      <li key={movie.id}>
        <div
          className={styles["poster"]}
          style={{ backgroundImage: `url("${movie.img}")` }}
        >
          <h1 className={styles["title"]}>{movie.title}</h1>
        </div>
      </li>
    );
  });
  return <ul className={styles["movies-list"]}>{moviesList}</ul>;
}
