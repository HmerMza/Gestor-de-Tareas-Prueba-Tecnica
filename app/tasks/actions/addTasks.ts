import { createClient } from '@/utils/supabase/client';
import { Task } from '../types';

const addTasks = async ({
    title,
    description,
}: {
    title: string;
    description: string;
}): Promise<Task | null> => {
    const supabase = createClient();
    const { data, error } = await supabase
        .from('tasks')
        .insert([
            { title, description },
        ])
        .select().single();
    if (error) {
        console.log("Error updating task:", error);
        return null;
    }

    return data as Task;
}

export default addTasks