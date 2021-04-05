import { useEffect, useState } from "react";

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
