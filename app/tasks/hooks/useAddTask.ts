"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import addTasks from "../actions/addTasks";
import { Task } from "../types";

export const useAddTask = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: addTasks,
        onError: (error: Error) => {
            alert(error.message || "Error al agregar la tarea");
        },
        onSuccess: (data: Task) => {
            if (!data) return;
            queryClient.invalidateQueries({ queryKey: ["tasks"] });
        },
    });

    return mutation;
};