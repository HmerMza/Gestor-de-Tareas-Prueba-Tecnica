"use client";
import { Theme } from "@carbon/react";
import Cards from "../components/Cards";
import { useGetTasks } from "../hooks/useGetTask";

const TaskViews = () => {
  const { data, isLoading, isError } = useGetTasks();

  if (isLoading) return <p>cargando</p>;
  if (!data) return <p>No hay datos disponibles</p>;
  if (isError) return <p>Ocurrió un error al cargar las tareas.</p>;
  if (!data || data.length === 0) return <p>No hay tareas disponibles.</p>;

  const theme = "g100";

  return (
    <>
      <Theme theme={theme}>
        <section className="tasks-section ">
          <div className="tasks-done">
            <h4>Tareas Nuevas</h4>
            {data
              .filter((ta) => !ta.done) 
              .map((t) => (
                <Cards
                  key={t.id}
                  title={t.title}
                  description={t.description}
                  id={t.id}
                  done={t.done}
                />
              ))}
          </div>
          <div className="tasks-done">
            <h4>Tareas Completadas</h4>
            {data
              .filter((ta) => ta.done)
              .map((t) => (
                <Cards
                  key={t.id}
                  title={t.title}
                  description={t.description}
                  id={t.id}
                  done={t.done}
                />
              ))}
          </div>
        </section>
      </Theme>
    </>
  );
};

export default TaskViews;
