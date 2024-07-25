import React from "react";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";

const Cards = ({ movies }) => {
  return (
    <div
      style={{ overflowX: "auto", maxWidth: "100%", scrollbarWidth: "thin" }}
    >
      <Row className="flex-nowrap w-auto">
        {movies.map((movie, index) => (
          <Col
            key={index}
            style={{ flex: "0 0 auto", maxWidth: "fit-content" }}
          >
            <Link href={`/trailer/${movie.id}` }>
              <img
                style={{ height: "40vh" }}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.original_title}
              />
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Cards;
