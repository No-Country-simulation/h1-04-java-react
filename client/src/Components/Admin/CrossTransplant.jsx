import { useState } from 'react';

const CrossTransplant = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendEmail = () => {
    if (validateEmail(email)) {
      setMessage(`Correo enviado a ${email} con la información sobre el transplante cruzado.`);
      setShowModal(true);
      setEmail('');
    } else {
      setMessage('Por favor, ingresa un correo electrónico válido.');
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const closeModal = () => {
    setShowModal(false);
    setMessage('');
  };

  return (
    <div className="px-4 py-6 font-roboto w-[50%]">
      <h2 className="text-xl font-semibold mb-8">Transplante Cruzado</h2>

      <div className="mb-4">
        <label htmlFor="email" className="block text-base font-semibold text-gray-600">
          Para enviar la documentación sobre el transplante cruzado. <br />Introduce un correo electrónico:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Ingresa el correo electrónico"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-6">
        <button
          onClick={handleSendEmail}
          className="bg-blue-500 text-white px-4 py-2 rounded-md transition-colors duration-300 hover:bg-blue-600"
        >
          Enviar Información
        </button>
      </div>

      {message && !showModal && (
        <div className="mb-6 text-red-600">
          {message}
        </div>
      )}

      <div className="mb-6">
        <a
          href="https://docs.google.com/document/d/1e6rso6dJwnTw1SjUf-7SHkH8JYUXbMrm/edit?usp=sharing&ouid=104542491199901111562&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:underline text-lg font-semibold"
        >
          Consentimiento Cruzado - Solicitud Registro
        </a>
      </div>

      <div className="mb-6">
        <a
          href="https://www.argentina.gob.ar/sites/default/files/ley-27447.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:underline text-lg font-semibold"
        >
          Ley Justina | Ley 27.447
        </a>
      </div>

      <div>
        <a
          href="https://drive.google.com/file/d/1pVNibLTbfz3hADk3_1M8yB7jH7LXsAGI/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:underline text-lg font-semibold"
        >
          Infografía sobre el Transplante Cruzado
        </a>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-1/3 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-red-500 hover:bg-red-400 text-white p-2 rounded-lg"
            >
              X
            </button>
            <h2 className="text-lg font-bold mb-4 text-blue-500">Confirmación</h2>
            <p>{message}</p>
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 transition-colors duration-300 hover:bg-blue-600"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CrossTransplant;
