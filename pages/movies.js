import Head from "next/head";
import styles from "../styles/Movies.module.css";

import Navbar from "../components/header/Navbar";
import Logo from "../components/header/Logo";
import Banner from "../components/header/Banner";
import LatestMovies from "../components/LatestMovies";
import RightSidebar from "../components/RightSidebar";

export default function Movies() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kino Luleå / Alla Filmer</title>
        <meta
          name="description"
          content="Fictional website for cinema in Luleå"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <Logo />
          <Navbar />
          <Banner />
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles["main-container"]}>
          <div className={styles["main-container-content-article-small"]}>
            <p>ALLA FILMER</p>
          </div>
          <LatestMovies />
        </div>
        <div className={styles["right-container"]}>
          <RightSidebar />
        </div>
      </main>

      <footer className="footer">
        <p>This is the footer</p>
      </footer>
    </div>
  );
}
