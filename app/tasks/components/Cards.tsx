import { Checkbox, Tile } from "@carbon/react";
import styles from "@/app/styles/Home.module.css";
import { useUpdateTask } from "../hooks";

interface Props {
  title: string;
  description: string;
  id: number;
  done: boolean;
}

const Cards = ({ title, description, id, done }: Props) => {
  const { mutate, isPending } = useUpdateTask();
  return (
    <Tile
      className={styles.cardtile}
      decorator={
        <Checkbox
          checked={done}
          className="ai-label-container"
          id={title}
          labelText={isPending ? "Actualizando..." : "Completado"}
          disabled={isPending}
          onChange={() => {
            mutate({ id, done });
          }}
        />
      }
      id="tile-1"
    >
      <h4 style={{ textDecoration: done ? "line-through" : "none" }}>
        {title}
      </h4>
      <p style={{ textDecoration: done ? "line-through" : "none" }}>
        {description}
      </p>
    </Tile>
  );
};

export default Cards;
