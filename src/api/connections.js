// src/api/getPaths.js

export const getConnectionsActors = async (fromId, toId) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/path?from=${fromId}&to=${toId}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
