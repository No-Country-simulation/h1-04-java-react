const API = 'https://justina-n2nb.onrender.com/v1/api/';

export const getPatientById = async (token, id) => {
  const response = await fetch(`${API}patients/getPatientById/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  if (!response.ok) {
    throw new Error('Error fetching doctor data');
  }
  return await response.json();
};
