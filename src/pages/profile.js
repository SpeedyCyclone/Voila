import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Profile.module.css";
import { signOut } from "next-auth/react";

export default function Page() {
  const { data: session, status, update } = useSession();

  if (status === "authenticated") {
    return (
      <>
        <h1 className={styles.heading}>{session.user.name}</h1>
        <Image
          className={styles.img}
          src="/user.png"
          alt=""
          width={100}
          height={100}
        ></Image>
        <div className={styles.flex}>
          <Link
            onClick={() => signOut({ callbackUrl: "/" })}
            href="/"
            className={styles.link}
          >
            <button className={styles.loginbtn}>Log Out</button>
          </Link>
        </div>
      </>
    );
  }

  return <Link href="/api/auth/signin">Sign In</Link>;
}
