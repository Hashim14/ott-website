"use client";

import React from "react";
import Link from "next/link";
import { Carousel, Container } from "react-bootstrap";

const CarouselContainer = ({ movies }) => {
  return (
    <>
      <h1 className="text-4xl p-5">Popular Movies</h1>
      <Container className="w-[400px]">
        <Carousel>
          {movies.map((movie) => (
            <Carousel.Item key={movie.id}>
              <Link href={`/details-page/${movie.id}`}>
                <img
                  className="d-block w-100"
                  src={movie.poster}
                  alt={movie.title}
                />
                <Carousel.Caption>
                  <h3>{movie.title}</h3>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </>
  );
};

export default CarouselContainer;
