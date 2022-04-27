import React from 'react';
import Note from './note';

function NotesList(props) {
  const notes = Object.keys(props.notes).map((id) => {
    if (props.show === 'all' || props.notes[id].noteColor === props.show) {
      return (

        <Note id={id}
          title={props.notes[id].title}
          text={props.notes[id].text}
          x={props.notes[id].x}
          y={props.notes[id].y}
          z={props.notes[id].z}
          noteColor={props.notes[id].noteColor}
          deleteNote={props.deleteNote}
          editText={props.editText}
          handleDrag={props.handleDrag}
          editTitle={props.editTitle}
          changeNoteColor={props.changeNoteColor}
        />
      );
    }
    return (<div />);
  });

  return (
    <ul>
      {notes}
    </ul>
  );
}

export default NotesList;
