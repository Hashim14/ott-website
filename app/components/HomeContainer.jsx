"use client";
import { useGetAllMoviesQuery } from "../../redux/services/movieListApi";
import Cards from "./Cards";
import CarouselContainer from "./CarouselContainer";

const HomeContainer = () => {
  const { data, isLoading, isError } = useGetAllMoviesQuery("");
  let movies;
  if (data) movies = data.results;
  return (
    <div className="d-flex gap-4 flex-col">
      {isLoading ? (
        <span>Loading...</span>
      ) : isError ? (
        <span>Error Loading Movies, please try again later.</span>
      ) : (
        movies && (
          <>
            <CarouselContainer movies={movies} />
            <Cards type={"trailer"} movies={movies} title={"Trailers"} />
            <Cards
              type={"details-page"}
              movies={Object.values(movies).reverse()}
              title={"Movies"}
            />
          </>
        )
      )}
    </div>
  );
};

export default HomeContainer;
