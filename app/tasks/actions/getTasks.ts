import { createClient } from "@/utils/supabase/client";
import { Task } from "../types";


export const getTask = async () => {
    const supabase = createClient();

    const { data: tasks, error } = await supabase
        .from('tasks')
        .select('*');

    if (error || !tasks) {
        throw new Error(error?.message || "No se pudo crear la tarea");
    }

    return tasks as Task[];
};