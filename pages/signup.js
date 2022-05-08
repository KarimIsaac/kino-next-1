import Head from "next/head";
import styles from "../styles/Home.module.css";

import Navbar from "../components/header/Navbar";
import Logo from "../components/header/Logo";
import Banner from "../components/header/Banner";
import RightSidebar from "../components/RightSidebar";
import SignUp from "../components/Signup";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kino Luleå</title>
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
            <p>SKAPA ETT KONTO</p>
          </div>
            <SignUp />
        </div>
        {/* <div className={styles["right-container"]}>
          <RightSidebar />
        </div> */}
      </main>

      <footer className="footer">
        <p>This is the footer</p>
      </footer>
    </div>
  );
}
