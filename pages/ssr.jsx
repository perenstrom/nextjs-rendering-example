export default function SSR(props) {
  const { films } = props;

  return (
    <div>
      <pre>{JSON.stringify(films, null, 2)}</pre>
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
