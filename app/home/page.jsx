import CarouselContainer from "../components/CarouselContainer";
import Cards from "../components/Cards";
import React from "react";

const Home = async () => {
  const API_URL =
    "https://api.themoviedb.org/3/trending/all/day?language=en-US";
  const BEARER_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTk0YmY3OWRhY2YxYzlhZDBjMTVjODJhMzM2YmQ4MCIsIm5iZiI6MTcyMTc5OTMzOC4wNTgzNzIsInN1YiI6IjY2YTA5MDIzYWI2MTMwYzY4MTIwNDZiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vFRTNjSguD9DTWzlPiwDdXODJGLswKeFTxHyqfPKv5w";

  const fetchTrendingMovies = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    };

    try {
      const response = await fetch(API_URL, options);
      const data = await response.json();
      return data.results;
    } catch (err) {
      console.error(err);
    }
  };
  const movies = await fetchTrendingMovies();
  return (
    <div className="d-flex gap-4 flex-col" style={{
      background : "linear-gradient(to bottom, #07111a, #2c3e50)"
    }}>
      <CarouselContainer movies={movies} />
      <h3 className="p-3 tracking-wide text-3xl antialiased">Trailers</h3>
      <Cards movies={movies} />
      <Cards movies={Object.values(movies).reverse()} />
    </div>
  );
};

export default Home;
