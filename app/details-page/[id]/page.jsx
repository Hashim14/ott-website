"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  useGetSelectedMovieQuery,
  useSelectedMovieCreditsQuery,
} from "../../../redux/services/movieListApi";
import { setPlaying } from "../../../redux/slice";
import { Row, Col } from "react-bootstrap";
const MovieDetail = (prop) => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetSelectedMovieQuery(id);
  const { data: creditsList } = useSelectedMovieCreditsQuery(id);

  const dispatch = useDispatch();
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
  if (!data) return null;

  return (
    <div
      className="flex justify-center"
      style={{
        padding: "2.5rem",
        background: "linear-gradient(to bottom, #07111a, #2c3e50)",
      }}
    >
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <div className="w-[70%]">
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
            <h1 className="text-4xl ">{data.title}</h1>
            <span>{new Date(data.release_date.toString()).getFullYear()}</span>
          </div>
          <p className="text-xl w-full py-3">{data.tagline}</p>
          <div
            style={{
              padding: "1.625rem",
              background:
                `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://image.tmdb.org/t/p/w500/${data.backdrop_path}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "17px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              color: "white",
            }}
            className="py-3 italic"
          >
            <span className="text-2xl">About</span>
            <p className="text-xl w-full">{data.overview}</p>
            <p className="text-lg w-full">
              Genres : {data.genres.map((id) => ` ${id.name},`)}
            </p>
            <p>Duration : {data.runtime}mins</p>
            <p>Rating : {data.vote_average} imDb</p>
            <Link href={`/trailer/${data.id}`}>
              <Button>Watch Trailer</Button>
            </Link>
          </div>

          <div className="text-4xl pt-5 py-3">Cast</div>
          <div
            style={{
              overflowX: "auto",
              maxWidth: "100%",
              scrollbarWidth: "thin",
            }}
          >
            <Row className="flex-nowrap w-auto gap-2">
              {creditsList?.cast
                .filter((cast) => cast.order <= 15)
                .map((cast, index) => (
                  <Col
                    key={index}
                    style={{ flex: "0 0 auto", maxWidth: "fit-content" }}
                  >
                    <div className="w-[125px]">
                      <img
                        style={{ height: "25vh", borderRadius: "15px" }}
                        src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                        alt={cast.name}
                      />
                      <span className="mt-2 flex flex-wrap">{cast.name}</span>
                    </div>
                  </Col>
                ))}
            </Row>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
