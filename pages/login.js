import Head from "next/head";
import Navbar from "../components/header/nav/Navbar";
import Logo from "../components/header/Logo";
import Banner from "../components/header/Banner";

import styles from "../styles/Home.module.css";
import UserLoginForm from "../components/userPages/Login/LogInForm";

export default function LoginPage() {
  return (
    <section className="login-section">
      <Head>
        <title>Kino Luleå | login </title>
        <meta 
          name="description"
          content="Fictional website for cinema in Luleå"
        />
      </Head>

      <main className={styles.main}>
        <UserLoginForm />
      </main>

    </section>
  );
}
