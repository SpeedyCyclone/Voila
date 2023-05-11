import Form from "../components/form";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import styles from "../styles/Create.module.css";

export default function Create() {
  const addHome = (data) => axios.post("/api/homes", data);
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      return (
        <>
          <center>
            <h1 className={styles.ok}>Not Authenticated</h1>
          </center>
          <Link href="/api/auth/signin" className={styles.link}>
            <button className={styles.loginbtn}>Log In</button>
          </Link>
        </>
      );
    },
  });

  if (status === "loading") {
    return (
      <>
        <center>
          <h1 className={styles.ok}>Not Authenticated</h1>
        </center>
        <Link href="/api/auth/signin" className={styles.link}>
          <center>
            <button className={styles.loginbtn}>Log In</button>
          </center>
        </Link>
      </>
    );
  }
  return (
    <>
      <Form onSubmit={addHome} />
    </>
  );
}
