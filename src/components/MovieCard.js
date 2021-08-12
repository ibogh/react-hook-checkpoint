import React from "react";
import { Card, Button } from "react-bootstrap";
import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <Card className="movieCard">
      <Card.Img variant="top" src={movie.posterUrl} className="movieImg" />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
      </Card.Body>
      <Card.Footer className="cardFooter">
        <Button variant="primary">Trailer</Button>
        <h6>{"⭐".repeat(movie.rate)}</h6>
      </Card.Footer>
    </Card>
  );
}

export default MovieCard;
