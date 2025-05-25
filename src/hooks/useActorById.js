import { useState, useEffect } from "react";
import { getActorById } from "../api/getActorANdMovie";

export const useActorById = (actorId) => {
  const [actor, setActor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!actorId) return;

    setLoading(true);
    setError(null);

    getActorById(actorId)
      .then((data) => setActor(data))
      .catch((err) => setError(err.message || "Unknown error"))
      .finally(() => setLoading(false));
  }, [actorId]);

  return { actor, loading, error };
};
