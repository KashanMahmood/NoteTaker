/* eslint-disable no-param-reassign */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import produce, { enableAllPlugins } from 'immer';
import NotesList from './components/notesList';
import AddNote from './components/addNote';

enableAllPlugins();

class App extends Component {
  constructor(props) {
    super(props);
    this.keyCounter = 5;
    this.state = {
      notes: {
        1: {
          title: 'Hello there. this is the first note',
          text: 'Ayo, whats up',
          x: 0,
          y: 0,
          zIndex: 0,
        },
        2: {
          title: 'Hello there. this is the second note',
          text: 'Ayo, whats up',
          x: 4,
          y: 5,
        },

      },

    };
  }

  createNote = (content) => {
    const newNote = {
      title: content,
      text: 'Hehehe',
      x: 0,
      y: 0,
      zIndex: 0,
    };

    this.setState(
      produce((draft) => {
        draft.notes[this.keyCounter] = newNote;
      }),
    );

    this.keyCounter += 1;
  };

  deleteNote = (id) => {
    console.log(this.state[id]);
    this.setState(
      produce((draft) => {
        delete draft.notes[id];
      }),
    );
    console.log(this.state[id]);
    console.log(id);
    console.log('Bruhhhh delete');
    console.log(this.state);
  };

  // eslint-disable-next-line class-methods-use-this
  editNote = (info) => {
    console.log('inEdit Bitch');
  };

  // eslint-disable-next-line class-methods-use-this
  handleDrag = (id, position) => {
    const updatedFields = { x: position.x, y: position.y };
    this.setState(
      produce((draft) => {
        draft.notes[id] = { ...draft.notes[id], ...updatedFields };
      }),
    );
  };

  render() {
    return (
      <div className="appContainer">
        <AddNote handleCreateNote={this.createNote} />
        <NotesList handleDrag={this.handleDrag} deleteNote={this.deleteNote} editNote={this.editNote} notes={this.state.notes} />
      </div>
    );
  }
}

const root = createRoot(document.getElementById('main'));
root.render(<App />);
