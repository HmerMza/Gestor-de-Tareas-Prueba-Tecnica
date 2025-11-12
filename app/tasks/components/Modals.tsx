"use client";

import { Button, Form, Modal, TextArea, TextInput } from "@carbon/react";
import { useState } from "react";
import { useAddTask } from "../hooks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TaskFormData, taskSchema } from "../schemas/taskSchema";

const Modals = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { mutate, isPending } = useAddTask();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: TaskFormData) => {
    mutate(data);
    setOpenModal(false);
    reset();
  };

  const closeModal = () => {
    setOpenModal(false);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Button onClick={() => setOpenModal(true)}>Nueva Tarea</Button>
      <Modal
        aria-label="Modal content"
        closeButtonLabel="cerrar"
        modalHeading="Agregar nueva tarea"
        onRequestClose={closeModal}
        onRequestSubmit={handleSubmit(onSubmit)}
        onSecondarySubmit={closeModal}
        open={openModal}
        primaryButtonText={isPending ? "Agregando..." : "Agregar"}
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
          id="name-task"
          labelText="Nombre"
          placeholder="Por ejemplo, Sacar la basura"
          data-modal-primary-focus
          {...register("title")}
          invalid={!!errors.title}
          invalidText={errors.title?.message}
        />
        <TextArea
          labelText="Descripción"
          placeholder="Por ejemplo, recoger los papeles de la sala."
          {...register("description")}
          invalid={!!errors.description}
          invalidText={errors.description?.message}
        />
      </Modal>
    </Form>
  );
};

export default Modals;
