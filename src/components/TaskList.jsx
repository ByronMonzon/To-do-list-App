function TaskList({ tasks, toggleComplete, deleteTask }) {
  const pendientes = tasks.filter((t) => !t.completada);
  const completadas = tasks.filter((t) => t.completada);

  return (
    <section style={{ maxWidth: 720, margin: "0 auto", padding: "0 16px" }}>
      {/* Sección de pendientes */}
      <h2>Tareas pendientes</h2>
      {pendientes.length === 0 ? (
        <p>No tienes tareas pendientes</p>
      ) : (
        <div style={{ display: "grid", gap: 12 }}>
          {pendientes.map((t) => (
            <article
              key={t.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: 8,
                padding: 16,
                backgroundColor: "#fff",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <input
                  type="checkbox"
                  checked={t.completada}
                  onChange={(e) => toggleComplete(t.id, e.target.checked)}
                />
                <div style={{ flex: 1 }}>
                  <strong>{t.nombre}</strong> — <em>{t.tipo}</em>
                  <p style={{ margin: "6px 0" }}>{t.descripcion}</p>
                  <small>Estado: Pendiente</small>
                </div>
                <button
                  onClick={() => deleteTask(t.id)}
                  style={{ background: "#e74c3c", color: "#fff" }}
                >
                  Eliminar
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Sección de completadas */}
      <h2 style={{ marginTop: 32 }}>Tareas completadas</h2>
      {completadas.length === 0 ? (
        <p>No tienes tareas completadas</p>
      ) : (
        <div style={{ display: "grid", gap: 12 }}>
          {completadas.map((t) => (
            <article
              key={t.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: 8,
                padding: 16,
                backgroundColor: "#f0f0f0",
                color: "#777",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <input
                  type="checkbox"
                  checked={t.completada}
                  onChange={(e) => toggleComplete(t.id, e.target.checked)}
                />
                <div style={{ flex: 1 }}>
                  <strong style={{ textDecoration: "line-through" }}>
                    {t.nombre}
                  </strong>{" "}
                  — <em>{t.tipo}</em>
                  <p style={{ margin: "6px 0" }}>{t.descripcion}</p>
                  <small>Estado: Completada</small>
                </div>
                <button
                  onClick={() => deleteTask(t.id)}
                  style={{ background: "#e74c3c", color: "#fff" }}
                >
                  Eliminar
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default TaskList;