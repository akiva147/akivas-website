import { NoteSchema } from '@akivas-website/models';
import { createZodDto } from 'nestjs-zod';

export class CreateNoteDto extends createZodDto(
  NoteSchema.pick({
    content: true,
  }),
) {}
