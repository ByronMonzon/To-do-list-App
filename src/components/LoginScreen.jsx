import { useState } from "react";
import "../styles/Login.css";

function LoginScreen({ setUser, onLoaded }) {
  const [nombre, setNombre] = useState("");
  const [carnet, setCarnet] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim() || !carnet.trim()) return;
    const user = { nombre: nombre.trim(), carnet: carnet.trim() };
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    onLoaded();
  };

  return (
    <div className="login-bg">
      <div className="login-box">
        <h2>Inicio</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <label>Nombre completo</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre completo"
          />
          <label>Número de carnet</label>
          <input
            type="text"
            value={carnet}
            onChange={(e) => setCarnet(e.target.value)}
            placeholder="Carnet"
          />
          <button type="submit">Cargar</button>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;