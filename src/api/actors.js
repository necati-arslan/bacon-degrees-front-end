export const fetchActors = (query = "") => {
  const url = `http://localhost:8080/api/actors/search?q=${encodeURIComponent(query)}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("Sunucudan geçerli yanıt alınamadı");
      return response.json();
    });
};
