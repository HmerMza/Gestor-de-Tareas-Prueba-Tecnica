"use client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getTask } from "../actions/getTasks";
import { Theme } from "@carbon/react";
import Cards from "../components/Cards";
import { Task } from "../types";

const TaskViews = () => {
  const [task, setTask] = useState<Task[]>([]);
  const { data, isLoading } = useQuery({
    queryFn: async () => await getTask(),
    queryKey: ["tasks"],
  });

  if (isLoading) return <p>cargando</p>;
  if (!data) return <p>No hay datos disponibles</p>;

  const theme = "g100";

  return (
    <>
      <Theme theme={theme}>
        <section className="tasks-section ">
          <div className="tasks-done">
            <h4>Tareas Nuevas</h4>
            {data
              .filter((ta) => !ta.done) // solo las tareas pendientes
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
              .filter((ta) => ta.done) // solo las tareas pendientes
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
