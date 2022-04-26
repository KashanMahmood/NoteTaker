/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function AddNote(props) {
  const [newNote, setNewNote] = useState('');

  const handleChange = (event) => {
    setNewNote(event.target.value);
    console.log(event.target.value);
  };

  const handleCreate = () => {
    if (newNote.trim().length > 0) {
      props.handleCreateNote(newNote);
    }
    setNewNote('');
  };

  return (
    <div id="addTitle">
      <input id="inputNote" placeholder="Type note title here" onChange={handleChange} value={newNote} />
      <button type="button" className="createBttn" onClick={handleCreate}>Create</button>
    </div>
  );
}

export default AddNote;
