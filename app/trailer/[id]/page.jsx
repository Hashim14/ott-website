"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const page = () => {
  const { id } = useParams();
  const [currMovieKey, setCurrMovieKey] = useState({});

  const handlePosterClick = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTk0YmY3OWRhY2YxYzlhZDBjMTVjODJhMzM2YmQ4MCIsIm5iZiI6MTcyMTg4ODUzOS4xNTQ0MzcsInN1YiI6IjY2YTA5MDIzYWI2MTMwYzY4MTIwNDZiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KZYUCgooUPCkqnJ08ZiqbwHbf9AtM05O2ZnbT0zrrko",
      },
    };

    return await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setCurrMovieKey(response.results[0]))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    handlePosterClick();
  }, []);

  return (
    <div className="d-flex justify-center align-middle">
      {!currMovieKey ? (
        <span>Trailer not available</span>
      ) : (
        <iframe
          id="ytplayer"
          // @ts-ignore
          type="text/html"
          width="1280"
          height="720"
          // @ts-ignore
          src={`https://www.youtube.com/embed/${currMovieKey.key}`}
          frameborder="0"
        ></iframe>
      )}
    </div>
  );
};

export default page;
