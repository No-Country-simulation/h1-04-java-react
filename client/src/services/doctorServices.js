const API = 'https://justina-n2nb.onrender.com/v1/api/'


export const fetchDoctors = async () => {
  const response = await fetch(`${API}doctors/getAllDoctors`);
  if (!response.ok) {
    throw new Error('Error fetching doctor data');
  }
  return await response.json();
};
