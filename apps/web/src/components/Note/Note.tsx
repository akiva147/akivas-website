import { Note as NoteType } from '@akivas-website/models';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { notesService } from 'src/services/notes.service';
import classes from './note.module.scss';
export type NoteProps = NoteType;

export const Note = ({ content, createdAt, _id }: NoteProps) => {
    const [noteContent, setNoteContent] = useState(content);
    const queryClient = useQueryClient();

    const handleDeleteNote = async () => {
        await notesService.delete(_id);
        queryClient.invalidateQueries('notes');
    };

    const { mutateAsync: mutateNote, isLoading } = useMutation(
        notesService.update,
        {
            onSettled: () => {
                queryClient.invalidateQueries('notes');
            },
        }
    );

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNoteContent(e.target.value);
    };

    const handleUpdateNote = async () =>
        await mutateNote({
            _id,
            content: noteContent,
        });

    return (
        <div className={classes.container}>
            <header>
                <button onClick={handleDeleteNote}>X</button>
            </header>
            <main>
                <textarea value={noteContent} onChange={onChange} />
                <time>{createdAt.toLocaleDateString()}</time>
                {content !== noteContent && (
                    <button onClick={handleUpdateNote}>
                        {isLoading ? 'מעדכן...' : 'עדכון'}
                    </button>
                )}
            </main>
        </div>
    );
};
