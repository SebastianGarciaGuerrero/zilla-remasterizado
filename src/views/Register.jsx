import "../assets/css/Register.css";
import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://mi-super-api.com/registro', formData);
      console.log('Respuesta del servidor:', response.data);
    } catch (error) {
      console.error('Error al enviar los datos:', error.message);
    }
  };

  return (
    <div className="register-container">
      <h2 className="titulo-register">Registro</h2>
      <form onSubmit={handleSubmit} className="form-register">
        <label className="label-register">
          Usuario:
          <input className="input-register"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="input-register">
          Correo Electrónico:
          <input className="input-register"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="input-register">
          Contraseña:
          <input className="input-register"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button className="btn-register" type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
