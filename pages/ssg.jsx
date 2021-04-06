import Head from "next/head";
import { FilmList } from "../components/FilmList";
import styles from "../styles/Home.module.css";

export default function SSG(props) {
  const { films } = props;

  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Example – Static Site Generation</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Static Site Generation</h1>
        <p className={styles.description}>
          Pages are generated at build time and then the static HTML+CSS+JS
          files are served quickly to the client on each request.
        </p>

        <FilmList films={films} />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const url = `${process.env.FILM_API_BASE_URL}/api/movies`;
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };

  const response = await fetch(url, options);
  const films = await response.json();

  if (response.status === 200) {
    return {
      props: {
        films: films,
      },
    };
  } else {
    console.error(response.status);
    return {
      props: {
        films: [],
      },
    };
  }
};
