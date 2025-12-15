import { useState } from "react";
import "../styles/TaskForm.css";

function TaskForm({ addTask }) {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tipo, setTipo] = useState("trabajo");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim() || !descripcion.trim()) return;
    addTask(nombre.trim(), descripcion.trim(), tipo);
    setNombre("");
    setDescripcion("");
    setTipo("trabajo");
  };

  return (
    <div className="taskform-container">
      <h2>Agregar tarea</h2>
      <form onSubmit={handleSubmit} className="taskform">
        <label>Título</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ej. Comprar materiales"
        />

        <label>Descripción</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Detalles de la tarea..."
        />

        <label>Tipo</label>
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="trabajo">Trabajo</option>
          <option value="casa">Casa</option>
          <option value="negocios">Negocios</option>
        </select>

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;