import "../styles/NavTabs.css";
import { FaHome, FaTasks, FaPlus } from "react-icons/fa";

function NavTabs({ current, setCurrent }) {
  const Tab = ({ id, label, icon }) => (
    <button
      onClick={() => setCurrent(id)}
      className={`nav-tab ${current === id ? "active" : ""}`}
    >
      {icon} <span>{label}</span>
    </button>
  );

  return (
    <nav className="nav-tabs">
      <Tab id="resumen" label="Inicio" icon={<FaHome />} />
      <Tab id="tareas" label="Tareas" icon={<FaTasks />} />
      <Tab id="agregar" label="Agregar" icon={<FaPlus />} />
    </nav>
  );
}

export default NavTabs;