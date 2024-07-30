"use client";
import { useParams } from "next/navigation";
import { useSelectedMovieVideoQuery } from "../../../redux/services/movieListApi";

const Page = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useSelectedMovieVideoQuery(id);

  return (
    <div className="d-flex justify-center align-middle">
      {isLoading ? (
        <span>Loading...</span>
      ) : data && !data?.results[0]?.key ? (
        <span>Trailer not available</span>
      ) : (
        <iframe
          id="ytplayer"
          // @ts-ignore
          type="text/html"
          width="1280"
          height="720"
          // @ts-ignore
          src={`https://www.youtube.com/embed/${data?.results[0]?.key}`}
          // @ts-ignore
          frameBorder="0"
        ></iframe>
      )}
    </div>
  );
};
export default Page;
