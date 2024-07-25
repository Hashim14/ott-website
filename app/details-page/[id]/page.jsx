"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setCurrentMovie, setPlaying } from "../../../redux/slice";
import React from "react";
import Link from "next/link";

const MovieDetail = (prop) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [movie, setMovie] = useState(null);
  const [videoState, setVideoState] = useState("paused");

  useEffect(() => {
    if (videoState === "playing") {
      dispatch(setPlaying(true));
    } else {
      dispatch(setPlaying(false));
    }
  }, [videoState, dispatch]);

  const handlePlay = () => setVideoState("playing");
  const handlePause = () => setVideoState("paused");

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTk0YmY3OWRhY2YxYzlhZDBjMTVjODJhMzM2YmQ4MCIsIm5iZiI6MTcyMTg4ODUzOS4xNTQ0MzcsInN1YiI6IjY2YTA5MDIzYWI2MTMwYzY4MTIwNDZiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KZYUCgooUPCkqnJ08ZiqbwHbf9AtM05O2ZnbT0zrrko",
    },
  };

  useEffect(() => {
    if (id) {
      fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
        .then((response) => response.json())
        .then((json) => {
          setMovie(json);
          dispatch(setCurrentMovie(json));
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  if (!movie) return null;

  return (
    <div
      style={{
        padding: "2.5rem",
        background: "linear-gradient(to bottom, #07111a, #2c3e50)",
      }}
    >
      <video
        width="100%"
        controls
        className="py-5"
        onPlay={handlePlay}
        onPause={handlePause}
      >
        <source
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
          type="video/mp4"
        />
        Your browser does not support HTML video.
      </video>
      <div className="d-flex items-end gap-2 pt-0 py-3">
        {" "}
        <h1 className="text-4xl ">{movie.title}</h1>
        <span>{new Date(movie.release_date.toString()).getFullYear()}</span>
      </div>
      <p className="text-xl w-full">{movie.tagline}</p>
      <div
        style={{
          padding: "1.625rem",
          background: "darkslategrey",
          borderRadius: "17px",
          margin: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
        className="py-3 italic"
      >
        <span className="text-2xl">About</span>
        <p className="text-xl w-full">{movie.overview}</p>
        <p>Duration : {movie.runtime}mins</p>
        <p>Rating : {movie.vote_average} imDb</p>
        <Link href={`/trailer/${movie.id}`}>
          <Button>Watch Trailer</Button>
        </Link>
      </div>
    </div>
  );
};

export default MovieDetail;
