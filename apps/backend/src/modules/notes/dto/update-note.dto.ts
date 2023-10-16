import { NoteSchema } from '@akivas-website/models';
import { createZodDto } from 'nestjs-zod';

export class UpdateNoteDto extends createZodDto(
  NoteSchema.pick({
    content: true,
    _id: true,
  }),
) {}
