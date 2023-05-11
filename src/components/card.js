import Link from "next/link";

import styles from "../styles/Card.module.css";

export default function Card({
  id = "",
  title = "",
  guests = 0,
  beds = 0,
  baths = 0,
  price = 0,
}) {
  return (
    <>
      <div className={styles.card}>
        <Link href={`/homes/${id}`} className={styles.link}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.price}>${price}/day</p>
          <h2 className={styles.description}>
            {guests} guests | {beds} beds | {baths} baths
          </h2>
          <button className={styles.button}>Read More</button>
        </Link>
      </div>
    </>
  );
}
