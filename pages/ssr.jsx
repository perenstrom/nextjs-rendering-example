import Head from "next/head";
import { FilmList } from "../components/FilmList";
import styles from "../styles/Home.module.css";

export default function SSR(props) {
  const { films } = props;

  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Example – Server Side Rendering</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Server Side Rendering</h1>
        <p className={styles.description}>
          Pages are generated on each request and served to the client when
          ready.
        </p>

        <FilmList films={films} />
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
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
