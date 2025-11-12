import styles from "@/app/styles/Home.module.css";
import Modals from "@/app/tasks/components/Modals";
import TaskViews from "./views/TaskViews";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.containertext}>
          <h3 className={styles.title}>Gestion de Tareas</h3>
          <Modals />
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
