// appointmentService.js

const API = 'https://justina-n2nb.onrender.com/v1/api/';

export const createAppointment = async (token, appointmentData) => {
  try {
    const response = await fetch(`${API}appointments/createAppointment`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(appointmentData)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error creating appointment: ${errorData.message}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating appointment:', error);
    throw error;
  }
};
