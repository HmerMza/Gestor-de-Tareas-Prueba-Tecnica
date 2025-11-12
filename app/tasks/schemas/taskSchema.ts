import { z } from "zod";

export const taskSchema = z.object({
    title: z
        .string()
        .min(3, "El título debe tener al menos 3 caracteres")
        .max(100, "El título no puede superar los 100 caracteres"),
    description: z
        .string()
        .min(5, "La descripción debe tener al menos 5 caracteres")
        .max(500, "La descripción no puede superar los 500 caracteres"),
});

export type TaskFormData = z.infer<typeof taskSchema>;