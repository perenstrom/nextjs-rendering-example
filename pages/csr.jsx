import { useEffect, useState } from "react";
import Head from "next/head";
import { FilmList } from "../components/FilmList";
import styles from "../styles/Home.module.css";

export default function CSR() {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const url = `${process.env.NEXT_PUBLIC_FILM_API_BASE_URL}/api/movies`;
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
        setFilms(films);
      }
      setLoading(false);
    };
    fetchDataAsync();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Example – Client Side Rendering</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Client Side Rendering</h1>
        <p className={styles.description}>
          Skeleton page is generated at build time and then the static
          HTML+CSS+JS files are served quickly to the client on each request,
          the client then fetches data in the browser and populates the content.
        </p>

        {loading ? <pre>Loading...</pre> : <FilmList films={films} />}
      </main>
    </div>
  );

  return (
    <div>
      {loading ? (
        <pre>Loading...</pre>
      ) : (
        <pre>{JSON.stringify(films, null, 2)}</pre>
      )}
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
