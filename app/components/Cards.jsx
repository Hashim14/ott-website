import React from "react";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";

const Cards = ({ movies, title, type }) => {
  return (
    <div className="p-4">
      <h3 className="tracking-wide mb-2 text-3xl antialiased">{title}</h3>
      <div
        style={{ overflowX: "auto", maxWidth: "100%", scrollbarWidth: "thin" }}
      >
        <Row className="flex-nowrap w-auto">
          {movies.map((movie, index) => (
            <Col
              key={index}
              style={{ flex: "0 0 auto", maxWidth: "fit-content" }}
            >
              <Link href={`/${type}/${movie.id}`}>
                <img
                  style={{ height: "30vh", borderRadius: "15px" }}
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.original_title}
                />
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Cards;
