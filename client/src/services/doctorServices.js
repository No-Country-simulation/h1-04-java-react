const API = 'https://justina-n2nb.onrender.com/v1/api/';

export const fetchDoctors = async (token) => {
  const response = await fetch(`${API}doctors/getAllDoctors`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  if (!response.ok) {
    throw new Error('Error fetching doctor data');
  }
  return await response.json();
};
