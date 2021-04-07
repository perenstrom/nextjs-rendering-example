export default async (req, res) => {
  if (req.method === "GET") {
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
      res.status(200).end(JSON.stringify(films));
    } else {
      console.error(response.status);
      res.status(500).end(error);
    }
  } else {
    res.status(404);
  }
};
