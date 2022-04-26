/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import produce, { enableAllPlugins } from 'immer';

import NotesList from './components/notesList';
import AddNote from './components/addNote';
import * as db from './services/datastore';
import 'firebase/compat/database';

enableAllPlugins();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: {
      },

    };
  }

  componentDidMount() {
    db.fetchNotes((notes) => {
      this.setState({ notes });
    });
  }

  createNote = (title) => {
    const newNote = {
      title,
      text: '',
      x: 0,
      y: 0,
      zIndex: 0,
    };

    db.pushNote(newNote);
  };

  deleteNote = (id) => {
    db.deleteNote(id);
  };

  editText = (id, info) => {
    db.updateState(id, { text: info });
  };

  editTitle = (id, info) => {
    db.updateState(id, { title: info });
  };

  handleDrag = (id, position) => {
    db.updateState(id, { x: position.x, y: position.y });
  };

  render() {
    return (
      <div className="appContainer">
        <AddNote handleCreateNote={this.createNote} />
        <NotesList handleDrag={this.handleDrag}
          editTitle={this.editTitle}
          deleteNote={this.deleteNote}
          editText={this.editText}
          notes={this.state.notes != null ? this.state.notes : {}}
        />
      </div>
    );
  }
}

const root = createRoot(document.getElementById('main'));
root.render(<App />);
