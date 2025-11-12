import { createClient } from '@/utils/supabase/client';
import { Task } from '../types';

const addTasks = async ({
    title,
    description,
}: {
    title: string;
    description: string;
    }): Promise<Task> => {
    const supabase = createClient();
    const { data, error } = await supabase
        .from('tasks')
        .insert([
            { title, description },
        ])
        .select().single();
    if (error || !data) {
        throw new Error(error?.message || "No se pudo crear la tarea");
    }

    return data as Task;
}

export default addTasks;