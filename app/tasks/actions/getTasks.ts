import { createClient } from "@/utils/supabase/client";
import { Task } from "../types";


export const getTask = async () => {
    const supabase = createClient();

    const { data: tasks, error } = await supabase
        .from('tasks')
        .select('*');

    if (error) {
        console.error('Error fetching tasks:', error);
        return null;
    }

    return tasks as Task[];
};