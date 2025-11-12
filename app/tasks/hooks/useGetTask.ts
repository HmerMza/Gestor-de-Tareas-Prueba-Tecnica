"use client";

import { useQuery } from "@tanstack/react-query";
import { getTask } from "../actions/getTasks";
import { Task } from "../types";

export const useGetTasks = () => {
    return useQuery<Task[]>({
        queryKey: ["tasks"],
        queryFn: getTask,
    });
};