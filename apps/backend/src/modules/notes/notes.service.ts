import { Note } from '@akivas-website/models';
import { Injectable } from '@nestjs/common';
import { Collection, Db, ObjectId } from 'mongodb';
import { InjectMongoDB } from 'src/database/injectDatabase.decorator';
import { CreateNoteDto } from './dto/create-note.dto';

@Injectable()
export class NotesService {
  private noteModel: Collection<Omit<Note, '_id'>>;
  constructor(@InjectMongoDB() private readonly db: Db) {
    this.noteModel = this.db.collection('notes');
  }

  async getAll() {
    try {
      const notes = await this.noteModel
        .find(
          // { createdBy: user.oid }
          {},
        )
        .toArray();
      return notes;
    } catch (e) {
      throw new Error('Error getting notes');
    }
  }

  async create(note: CreateNoteDto) {
    try {
      const response = await this.noteModel.insertOne({
        content: note.content,
        // createdBy: user.oid,
        createdBy: 'me (:',
        createdAt: new Date(),
      });
      return response.insertedId.toString();
    } catch (e) {
      throw new Error('Error creating note');
    }
  }

  async update(note: Pick<Note, '_id' | 'content'>) {
    try {
      const response = await this.noteModel.updateOne(
        {
          _id: new ObjectId(note._id.toString()),
          // createdBy: user.oid
        },
        {
          $set: { content: note.content },
        },
      );
      return response;
    } catch (e) {
      throw new Error('Error updating note');
    }
  }

  async delete(id: string) {
    try {
      const response = await this.noteModel.deleteOne({
        _id: new ObjectId(id),
        // createdBy: user.oid,
      });
      return response;
    } catch (e) {
      throw new Error('Error deleting note');
    }
  }
}
