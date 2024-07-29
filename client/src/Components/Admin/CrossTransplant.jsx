import { useState } from 'react';

const CrossTransplant = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendEmail = () => {
    if (email) {
      setMessage(`Correo enviado a ${email} con la información sobre el transplante cruzado.`);
      setEmail('');
    } else {
      setMessage('Por favor, ingresa un correo electrónico válido.');
    }
  };

  return (
    <div className="p-4 font-roboto">
      <h2 className="text-xl font-semibold mb-8">Transplante Cruzado</h2>

      <div className="mb-4">
        <label htmlFor="email" className="block text-lg font-medium text-gray-700">Introduce un correo electrónico para enviar toda la documentación sobre el transplante cruzado:</label>
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
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Enviar Información
        </button>
      </div>

      {message && (
        <div className="mb-6 text-green-600">
          {message}
        </div>
      )}

      <div className="mb-6">
        <a
          href="https://docs.google.com/document/d/1e6rso6dJwnTw1SjUf-7SHkH8JYUXbMrm/edit?usp=sharing&ouid=104542491199901111562&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Consentimiento Cruzado - Solicitud Registro
        </a>
      </div>

      <div className="mb-6">
        <a
          href="https://www.argentina.gob.ar/sites/default/files/ley-27447.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Ley Justina | Ley 27.447
        </a>
      </div>

      <div>
        <a
          href="https://drive.google.com/file/d/1pVNibLTbfz3hADk3_1M8yB7jH7LXsAGI/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Infografía sobre el Transplante Cruzado
        </a>
      </div>
    </div>
  );
};

export default CrossTransplant;
