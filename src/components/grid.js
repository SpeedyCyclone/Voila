import Card from "../components/card";
import styles from "../styles/Grid.module.css";

export default function Grid({ homes = [] }) {
  return (
    <>
      <div className={styles.flex}>
        {homes.map((home) => (
          <Card key={home.id} {...home} />
        ))}
      </div>
    </>
  );
}
