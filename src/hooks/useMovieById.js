import { useState, useEffect } from "react";
import { getMovieById } from "../api/getActorANdMovie";

export const useMovieById = (movieId) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    setLoading(true);
    setError(null);

    getMovieById(movieId)
      .then((data) => setMovie(data))
      .catch((err) => setError(err.message || "Unknown error"))
      .finally(() => setLoading(false));
  }, [movieId]);

  return { movie, loading, error };
};
