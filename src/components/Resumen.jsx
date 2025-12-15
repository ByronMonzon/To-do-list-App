import { useState } from "react";

function Resumen({ tasks }) {
  const [tareaSeleccionada, setTareaSeleccionada] = useState(null);

  const pendientes = tasks.filter((t) => !t.completada).length;
  const completadas = tasks.filter((t) => t.completada).length;

  const handleSeleccionar = (id) => {
    setTareaSeleccionada(tareaSeleccionada === id ? null : id);
  };

  const ordenadas = [...tasks].sort((a, b) => {
    if (a.completada === b.completada) return 0;
    return a.completada ? 1 : -1;
  });

  return (
    <section style={{ maxWidth: 720, margin: "0 auto", padding: "0 16px" }}>
      <h2>Resumen de tareas</h2>

      {/* Conteo compacto arriba */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 16,
          gap: 12,
        }}
      >
        <div
          style={{
            flex: 1,
            padding: "8px 12px",
            background: "#ecf0f1",
            borderRadius: 6,
            textAlign: "center",
          }}
        >
          <strong>Pendientes:</strong> {pendientes}
        </div>
        <div
          style={{
            flex: 1,
            padding: "8px 12px",
            background: "#ecf0f1",
            borderRadius: 6,
            textAlign: "center",
          }}
        >
          <strong>Completadas:</strong> {completadas}
        </div>
      </div>

      {/* Lista de tarjetas */}
      <div style={{ display: "grid", gap: 12 }}>
        {ordenadas.map((t) => (
          <div
            key={t.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: 8,
              padding: 12,
              backgroundColor: "#fff",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <div
              onClick={() => handleSeleccionar(t.id)}
              style={{ cursor: "pointer" }}
            >
              <strong
                style={t.completada ? { textDecoration: "line-through" } : {}}
              >
                {t.nombre}
              </strong>
              {t.descripcion && (
                <p
                  style={{
                    fontSize: "0.9em",
                    margin: "4px 0",
                    color: "#555",
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                    maxHeight: "60px",
                    overflowY: "auto",
                  }}
                >
                  {t.descripcion.length > 40
                    ? t.descripcion.slice(0, 40) + "..."
                    : t.descripcion}
                </p>
              )}
              <div style={{ fontSize: "0.9em", color: "#666" }}>
                <em>{t.tipo}</em>
              </div>
              <div
                style={{
                  marginTop: 6,
                  fontWeight: "bold",
                  color: t.completada ? "#e74c3c" : "#27ae60",
                }}
              >
                {t.completada ? "Completada" : "Pendiente"}
              </div>
            </div>

            {/* Panel de detalles seleccionado */}
            {tareaSeleccionada === t.id && (
              <div
                style={{
                  marginTop: 16,
                  padding: 12,
                  border: "2px solid #007bff",
                  borderRadius: 8,
                  backgroundColor: "#f0f8ff",
                }}
              >
                <h3>Detalles de la tarea</h3>
                <p>
                  <strong>Nombre:</strong> {t.nombre}
                </p>
                <p
                  style={{
                    fontSize: "0.9em",
                    margin: "4px 0",
                    color: "#333",
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                    maxHeight: "100px",
                    overflowY: "auto",
                    whiteSpace: "normal",
                  }}
                >
                  <strong>Descripción:</strong> {t.descripcion}
                </p>
                <p>
                  <strong>Tipo:</strong> {t.tipo}
                </p>
                <p>
                  <strong>Estado:</strong>{" "}
                  {t.completada ? "Completada" : "Pendiente"}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Resumen;