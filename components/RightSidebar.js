import styles from "../styles/Home.module.css";

export default function RightSidebar() {
  return (
    <>
      {" "}
      <div className={styles["right-container-content-article-small"]}>
        <p>BILJETTER</p>
      </div>
      <div className={styles["right-container-content-calendar"]}>
        <p className={styles["right-container-title"]}>
          Klicka på titel för information och på tid för att boka/köpa biljetter
        </p>
        <div>
          I DAG
          <div>KINO</div>
          <ul className={styles["list-today-films"]}>
            <li></li>
          </ul>
        </div>
        <div>
          I MORGON
          <div>KINO</div>
          <ul className={styles["list-tomorrow-films"]}>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
}
