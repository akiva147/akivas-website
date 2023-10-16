import { z } from "nestjs-zod/z";
import { DateStringSchema, ObjectIdSchema } from "src/utils/zod.utils";

export const NoteSchema = z.object({
  _id: ObjectIdSchema,
  content: z.string(),
  createdBy: z.string(),
  createdAt: DateStringSchema,
});

export type Note = z.infer<typeof NoteSchema>;
