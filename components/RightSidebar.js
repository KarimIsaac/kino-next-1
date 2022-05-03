import styles from "../styles/Home.module.css";

export default function RightSidebar({ screenings }) {
  const screeningsList = screenings.map((screening) => {
    return (
      <li key={screening.id}>
        <p>{screening.date}</p>
        <p>{screening.time}</p>
      </li>
    );
  });
  return (
    <>
      {" "}
      <div className={styles["right-container-content-article-small"]}>
        <p>BILJETTER</p>
      </div>
      <div className={styles["right-container-content-calendar"]}>
        <ul>{screeningsList}</ul>
      </div>
    </>
  );
}
