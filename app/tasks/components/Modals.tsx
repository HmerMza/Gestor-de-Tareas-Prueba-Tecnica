"use client";

import { Button, Form, Modal, TextArea, TextInput } from "@carbon/react";
import { useState } from "react";
import { Task } from "../types";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const Modals = ({ tasks, setTasks }: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const addTask = (title: string, description: string) => {
    setTasks((prev) => [
      ...prev,
      { id: (tasks.length + 1).toString(), title, description, done: false },
    ]);
  };
  return (
    <Form>
      <Button onClick={() => setOpenModal(true)}>Nueva Tarea</Button>
      <Modal
        aria-label="Modal content"
        closeButtonLabel="cerrar"
        modalHeading="Agregar nueva tarea"
        onRequestClose={() => setOpenModal(false)}
        onRequestSubmit={() => addTask(title, description)}
        onSecondarySubmit={() => setOpenModal(false)}
        open={openModal}
        primaryButtonText="Agregar"
        secondaryButtonText="Cancelar"
      >
        <p
          style={{
            marginBottom: "2rem",
          }}
        >
          Porfavor ingrese un nombre y una descripcion para la nueva tarea.
        </p>
        <TextInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          data-modal-primary-focus
          id="name-task"
          labelText="Nombre"
          placeholder="Por ejemplo, Sacar la basura"
          style={{
            marginBottom: "24px",
          }}
        />
        <TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          labelText="Descripcion"
          placeholder="Por Ejemplo, recojer los papeles de la sala."
        />
      </Modal>
    </Form>
  );
};

export default Modals;
