"use client";

import Link from "next/link";
import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselContainer = ({ movies }) => {
  return (
    <>
      {/* <Container> */}
      <Carousel indicators={false} controls={false} touch>
        {movies.map((movie) => {
          if (movie.original_title !== undefined) {
            return (
              <Carousel.Item key={movie.id} interval={3000}>
                <Link href={`/details-page/${movie.id}`}>
                  <img
                    className="w-100"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      maxHeight: "70vh",
                    }}
                    src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    alt={movie.original_title}
                  />
                  <Carousel.Caption>
                    <h3 className="tracking-wide text-3xl p-2 antialiased hover:subpixel-antialiased">
                      {movie.original_title}
                    </h3>
                  </Carousel.Caption>
                </Link>
              </Carousel.Item>
            );
          }
        })}
      </Carousel>
      {/* </Container>  */}
    </>
  );
};

export default CarouselContainer;
