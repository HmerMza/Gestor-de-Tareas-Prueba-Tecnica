import { Checkbox, Tile } from "@carbon/react";
import styles from "@/app/styles/Home.module.css";

interface Props {
  title: string;
  description: string;
  onDone: () => void;
  done: boolean;
}

const Cards = ({ title, description, onDone, done }: Props) => {
  return (
    <Tile
      className={styles.cardtile}
      decorator={
        <Checkbox
          checked={done}
          className="ai-label-container"
          id={title}
          labelText="completado"
          onChange={onDone}
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
