"use client";
import { Button, Modal, TextArea, TextInput } from "@carbon/react";
import React, { useState } from "react";

const Modals = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Nueva Tarea</Button>
      <Modal
        aria-label="Modal content"
        closeButtonLabel="cerrar"
        modalHeading="Agregar nueva tarea"
        onKeyDown={() => {}}
        onRequestClose={() => setOpenModal(false)}
        onRequestSubmit={() => alert("agregado")}
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
          data-modal-primary-focus
          id="name-task"
          labelText="Nombre"
          placeholder="Por ejemplo, Sacar la basura"
          style={{
            marginBottom: "24px",
          }}
        />
        <TextArea
          labelText="Descripcion"
          placeholder="Por Ejemplo, recojer los papeles de la sala."
        />
      </Modal>
    </>
  );
};

export default Modals;
