import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { useRouter } from "next/router";
import styles from "./styles/Page.module.css";

export async function getStaticPaths() {
  const homes = await prisma.home.findMany({
    select: { id: true },
  });

  return {
    paths: homes.map((home) => ({
      params: { id: home.id },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const home = await prisma.home.findUnique({
    where: { id: params.id },
  });

  if (home) {
    return {
      props: JSON.parse(JSON.stringify(home)),
    };
  }

  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
}

export default function ListedHome(home = null) {
  const router = useRouter();
  if (router.isFallback) {
    return "Loading...";
  }
  return (
    <>
      <h1 className={styles.title}>{home?.title}</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className={styles.video}
      ></iframe>
      <h3 className={styles.price}>Price: ${home?.price}/day</h3>
      <h3 className={styles.details}>Details:</h3>
      <ol>
        <li>{home?.guests} guests capacity</li>
        <li>Total {home?.beds} beds</li>
        <li>Total {home?.baths} baths/bathrooms</li>
      </ol>
    </>
  );
}
