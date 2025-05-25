import React from 'react'
import { useActorById } from '../hooks/useActorById';
import { useMovieById } from '../hooks/useMovieById';
import { FaUser, FaFilm } from "react-icons/fa";


function ConnectionCard({ type, id }) {

     const { actor, loading: loadingActor, error: errorActor } = type === "actor" ? useActorById(id) : { actor: null, loading: false, error: null };
     const { movie, loading: loadingMovie, error: errorMovie } = type === "movie" ? useMovieById(id) : { movie: null, loading: false, error: null };

    if (loadingActor || loadingMovie) return <div>Loading...</div>;
    if (errorActor || errorMovie) return <div>Error loading {type}</div>;

    return (
    <div className="icon-with-label">
      {type === "actor" ? <FaUser className="icon" /> : <FaFilm className="icon" />}
      <span className="label">{type === "actor" ? actor?.primaryName || id : movie?.primaryTitle || id}</span>
    </div>
  );

 
}

export default ConnectionCard