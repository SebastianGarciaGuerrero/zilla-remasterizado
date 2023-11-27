import "../assets/css/Login.css";
import { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
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
      const response = await fetch('https://mi-super-api.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Inicio de sesión exitoso:', data);
      } else {
        console.error('Error en inicio de sesión:', response.statusText);
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error.message);
    }
  };

  return (
    <div className="login-container">
      <h2 className="titulo-login">Iniciar Sesión</h2>
      <form className="form-login" onSubmit={handleSubmit}>
        <label className="label-login">
          Correo Electrónico:
          <input className="input-login"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="label-login">
          Contraseña:
          <input className="input-login"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button className="btn-login" type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
