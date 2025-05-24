import { useState, useEffect } from "react";
import { fetchActors } from "../api/actors";

export const useActors = (searchQuery) => {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery) {
      setActors([]);
      return;
    }

    setLoading(true);
    fetchActors(searchQuery)
      .then(data => {
        setActors(data);
        setError(null);
      })
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [searchQuery]);

  return { actors, loading, error };
};
