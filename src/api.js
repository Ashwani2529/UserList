const API_URL = "https://602e7c2c4410730017c50b9d.mockapi.io/users";
export const fetchUsers = async () => {

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch users.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
