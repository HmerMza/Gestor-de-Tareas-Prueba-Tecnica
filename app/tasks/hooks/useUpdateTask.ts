"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import updateTasks from "../actions/updateTask";
import { Task } from "../types";

export const useUpdateTask = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: updateTasks,
        onError: (error: Error) => {
            alert(error.message || "Error al actualizar la tarea");
        },
        onSuccess: (data, variables) => {
            queryClient.setQueryData(["tasks"], (prev: Task[] | undefined) => {
                if (!prev) return [];
                return prev.map((task) =>
                    task.id === variables.id ? { ...task, done: data?.done } : task
                );
            });
        },
    });

    return mutation;
};