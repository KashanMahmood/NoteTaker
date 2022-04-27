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

// enableAllPlugins();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 'all',
      showID: '',
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
      noteColor: this.pickColor(),
    };

    db.pushNote(newNote);
  };

  pickColor = () => {
    if (this.state.show === 'all') {
      return ('pink');
    }

    return (this.state.show);
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

  changeNoteColor = (id, color) => {
    db.updateState(id, { noteColor: color });
  };

  greenShow = () => {
    this.setState(
      produce((draftState) => {
        draftState.show = 'green';
      }),
    );
  };

  blueShow = () => {
    this.setState(
      produce((draftState) => {
        draftState.show = 'blue';
      }),
    );
  };

  pinkShow = () => {
    this.setState(
      produce((draftState) => {
        draftState.show = 'pink';
      }),
    );
  };

  allShow = () => {
    this.setState(
      produce((draftState) => {
        draftState.show = 'all';
      }),
    );
  };

  render() {
    return (
      <div className="appContainer">
        <AddNote handleCreateNote={this.createNote} />
        <div className="filterTitle">FILTER</div>
        <div className="filters">
          <input type="button" id="greenFilter" onClick={this.greenShow} />
          <input type="button" id="pinkFilter" onClick={this.pinkShow} />
          <input type="button" id="blueFilter" onClick={this.blueShow} />
          <input type="button" id="allFilter" onClick={this.allShow} />
        </div>
        <NotesList handleDrag={this.handleDrag}
          show={this.state.show}
          editTitle={this.editTitle}
          deleteNote={this.deleteNote}
          editText={this.editText}
          changeNoteColor={this.changeNoteColor}
          notes={this.state.notes != null ? this.state.notes : {}}
        />
      </div>
    );
  }
}

const root = createRoot(document.getElementById('main'));
root.render(<App />);
