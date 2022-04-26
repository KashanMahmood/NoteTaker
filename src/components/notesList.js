import React from 'react';
import Note from './note';

function NotesList(props) {
  const notes = Object.keys(props.notes).map((id) => {
    const note = props.notes[id];
    return (
      <Note id={id}
        title={note.title}
        text={note.text}
        x={note.x}
        y={note.y}
        z={note.z}
        deleteNote={props.deleteNote}
        editText={props.editText}
        handleDrag={props.handleDrag}
        editTitle={props.editTitle}
      />
    );
  });

  return (
    <ul>
      {notes}
    </ul>
  );
}

export default NotesList;
