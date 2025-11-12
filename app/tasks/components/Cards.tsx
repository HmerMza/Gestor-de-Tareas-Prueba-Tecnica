import { Checkbox, Tile } from "@carbon/react";
import styles from "@/app/styles/Home.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import updateTasks from "../actions/updateTask";
import { Task } from "../types";

interface Props {
  title: string;
  description: string;
  id: number;
  done: boolean;
}

const Cards = ({ title, description, id, done }: Props) => {
  const queryClient = useQueryClient();
  const updateTask = useMutation({
    mutationFn: updateTasks,
    onError: (error) => {
      alert(error.message);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["tasks"], (prev: Task[] | undefined) => {
        if (!prev) {
          return [];
        }
        return prev.map((task) => {
          if (task.id === id) {
            return {
              ...task,
              done: data?.done,
            };
          }
          return task;
        });
      });
    },
  });
  return (
    <Tile
      className={styles.cardtile}
      decorator={
        <Checkbox
          checked={done}
          className="ai-label-container"
          id={title}
          labelText="completado"
          onChange={() => {
            updateTask.mutate({ id, done });
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
