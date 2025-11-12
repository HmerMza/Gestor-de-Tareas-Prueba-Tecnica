"use client";

import { Theme } from "@carbon/react";
import styles from "@/app/styles/Home.module.css";
import Modals from "@/app/tasks/components/Modals";
import Cards from "./components/Cards";
import { useState } from "react";
import { Task } from "./types";

const Home: React.FC = () => {
  const theme = "g100";
  const [task, setTask] = useState<Task[]>([]);
  const toggleTaskDone = (id: string) => {
    setTask((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.containertext}>
          <h3 className={styles.title}>Gestion de Tareas</h3>
          <Modals tasks={task} setTasks={setTask} />
        </div>

        <Theme theme={theme}>
          <section className="tasks-section ">
            <div className="tasks-done">
              <h4>Tareas Nuevas</h4>
              {task
                .filter((t) => !t.done) // solo las tareas pendientes
                .map((t) => (
                  <Cards
                    key={t.id}
                    title={t.title}
                    description={t.description}
                    onDone={() => toggleTaskDone(t.id)}
                    done={t.done}
                  />
                ))}
            </div>
            <div className="tasks-done">
              <h4>Tareas Completadas</h4>
              {task
                .filter((t) => t.done) // solo las tareas pendientes
                .map((t) => (
                  <Cards
                    key={t.id}
                    title={t.title}
                    description={t.description}
                    onDone={() => toggleTaskDone(t.id)}
                    done={t.done}
                  />
                ))}
            </div>
          </section>
        </Theme>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/hmermzag24/"
          target="_blank"
          rel="Hemer Meza"
        >
          <p>Create by Hemer Meza</p>
        </a>
      </footer>
    </div>
  );
};

export default Home;
