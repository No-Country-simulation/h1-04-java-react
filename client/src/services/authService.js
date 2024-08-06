const API = 'https://justina-n2nb.onrender.com/v1/api/'

export const login = async (email, password) => {
  const response = await fetch(`${API}auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Error en la autenticación");
  }

  return data;
};
