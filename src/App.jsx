import { useState, useEffect } from "react";
import LoginScreen from "./components/LoginScreen";
import NavTabs from "./components/NavTabs";
import Resumen from "./components/Resumen";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { FaSignOutAlt } from "react-icons/fa";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [vista, setVista] = useState("resumen");

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) setUser(savedUser);

    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (nombre, descripcion, tipo) => {
    const newTask = {
      id: Date.now(),
      nombre,
      descripcion,
      tipo,
      completada: false,
    };
    setTasks((prev) => [newTask, ...prev]);
    setVista("tareas");
  };

  const toggleComplete = (id, checked) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completada: checked } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setVista("resumen");
  };

  if (!user) {
    return (
      <LoginScreen
        setUser={setUser}
        onLoaded={() => setVista("resumen")}
      />
    );
  }

  return (
    <div style={{ paddingBottom: 64 }}>
      {}
      <div className="header-bar">
        <h1>
          Bienvenido {user.nombre}
        </h1>
        <button onClick={logout} className="logout-button">
          <FaSignOutAlt className="logout-icon" />
        </button>
      </div>



      {vista === "resumen" && <Resumen tasks={tasks} />}
      {vista === "tareas" && (
        <TaskList
          tasks={tasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      )}
      {vista === "agregar" && <TaskForm addTask={addTask} />}

      <NavTabs current={vista} setCurrent={setVista} />
    </div>
  );
}

export default App;