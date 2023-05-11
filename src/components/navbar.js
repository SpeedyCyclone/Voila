import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();
  return (
    <>
      <nav>
        <div className={styles.flexbox}>
          <div className={styles.firstdiv}>
            <Image
              src="/navbar-icon.png"
              alt=""
              width={40}
              height={40}
              className={styles.img}
            ></Image>
            <Link href="/" className={styles.link}>
              <label className={styles.voila}>Voila</label>
            </Link>
          </div>
          <div className={styles.seconddiv}>
            <Link href="/create" className={styles.link}>
              <li className={styles.li}>List your home</li>
            </Link>
            {status === "authenticated" ? (
              <Link href="/profile" className={styles.link}>
                <button className={styles.loginbtn}>Profile</button>
              </Link>
            ) : (
              <Link href="/api/auth/signin" className={styles.link}>
                <button className={styles.loginbtn}>Log In</button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
