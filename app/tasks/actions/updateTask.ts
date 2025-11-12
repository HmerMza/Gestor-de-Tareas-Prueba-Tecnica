import { createClient } from '@/utils/supabase/client';
import { Task } from '../types';

const updateTasks = async ({
    id,
    done,
}: {
    id: number;
    done: boolean;
}): Promise<Task | null> => {
    const supabase = createClient();
    const { data, error } = await supabase
        .from("tasks")
        .update({ done: !done })
        .eq("id", id)
        .select()
        .single();

    if (error) {
        console.log("Error updating task:", error);
        return null;
    }

    return data as Task;
};

export default updateTasks;