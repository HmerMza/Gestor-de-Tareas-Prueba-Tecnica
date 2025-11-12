"use client";

import styles from "@/app/styles/Home.module.css";
import Modals from "@/app/tasks/components/Modals";
import { useState } from "react";
import { Task } from "./types";
import TaskViews from "./views/TaskViews";

const Home: React.FC = () => {
  const [task, setTask] = useState<Task[]>([]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.containertext}>
          <h3 className={styles.title}>Gestion de Tareas</h3>
          <Modals tasks={task} setTasks={setTask} />
        </div>

        <TaskViews />
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
