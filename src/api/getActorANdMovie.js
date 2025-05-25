export const getActorById = async (id) => {
  const res = await fetch(`http://localhost:8080/api/actors/${id}`);
  if (!res.ok) throw new Error("Failed to fetch actor data");
  return res.json();
};

export const getMovieById = async (id) => {
  const res = await fetch(`http://localhost:8080/api/movies/${id}`);
  if (!res.ok) throw new Error("Failed to fetch movie data");
  return res.json();
};
