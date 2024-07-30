"use client";

import Link from "next/link";
import React from "react";
import { Button, Carousel } from "react-bootstrap";

const CarouselContainer = ({ movies }) => {
  return (
    <Carousel indicators={false} controls={false} touch>
      {movies.map((movie) => {
        if (movie.original_title !== undefined) {
          return (
            <Carousel.Item key={movie.id} interval={2000}>
              <div className="relative">
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
                <Carousel.Caption className="z-1">
                  <h3 className="tracking-wide text-3xl p-2 antialiased hover:subpixel-antialiased">
                    {movie.original_title}
                  </h3>
                </Carousel.Caption>
                <div
                  className="absolute bottom-0"
                  style={{
                    width: "100%",
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 20%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.9) 80%, rgba(0, 0, 0, 1) 100%)",
                    height: "200px",
                    display: "flex",
                    alignItems: "end",
                  }}
                >
                  <Link href={`/details-page/${movie.id}`}>
                    <Button className="m-5 flex gap-2">
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 10 16"
                      >
                        <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
                      </svg>
                      Watch Movie
                    </Button>
                  </Link>
                </div>
              </div>
            </Carousel.Item>
          );
        }
      })}
    </Carousel>
  );
};

export default CarouselContainer;
