import Image from "next/image";
import latestMovie from "/public/inIDimman.jpg";
import styles from "../styles/Home.module.css";

export default function LatestMovies() {
  return (
    <div className={styles["main-container-content-movie-comingsoon"]}>
      <Image src={latestMovie} alt="Latest movie" />
      <Image src={latestMovie} alt="Latest movie" />
      <Image src={latestMovie} alt="Latest movie" />
      <Image src={latestMovie} alt="Latest movie" />
    </div>
  );
}
