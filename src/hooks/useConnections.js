// src/hooks/usePath.js

import { useState, useEffect } from "react";
import { getConnectionsActors } from "../api/connections"; 

export const useConnections = (fromId, toId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!fromId || !toId) return;

    setLoading(true);
    setError(null);

    getConnectionsActors(fromId, toId) 
      .then((result) => setData(result))
      .catch((err) => setError(err.message || "Bilinmeyen hata"))
      .finally(() => setLoading(false));
  }, [fromId, toId]);

  return { data, loading, error };
};
