"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setCurrentMovie, setPlaying } from "../../../redux/slice";

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

  useEffect(() => {
    if (id) {
      fetch(`https://freetestapi.com/api/v1/movies/${id}`)
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
    <Container>
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
      <h1 className="text-2xl pt-0 py-3">{movie.title}</h1>
      <p className="text-xl w-full">{movie.plot}</p>
      <p className="py-10">{movie.director}</p>
    </Container>
  );
};

export default MovieDetail;
