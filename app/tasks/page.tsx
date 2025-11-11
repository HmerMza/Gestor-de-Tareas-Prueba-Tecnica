"use client";

import { Theme } from "@carbon/react";
import styles from "@/app/styles/Home.module.css";
import Modals from "@/app/tasks/components/Modals";

const Home: React.FC = () => {
  const theme = "g100";
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h3 className={styles.title}>Gestion de Tareas</h3>
        <Theme theme={theme}>
          <section className="theme-section">
            <Modals />
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
