import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  getAll() {
    return this.notesService.getAll();
  }

  @Post()
  create(@Body() body: CreateNoteDto) {
    return this.notesService.create(body);
  }

  @Put()
  update(@Body() body: UpdateNoteDto) {
    return this.notesService.update(body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.notesService.delete(id);
  }
}
