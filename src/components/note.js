/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-class-component-methods */
import React, { useState } from 'react';
import Draggable from 'react-draggable';
import TextareaAutosize from 'react-textarea-autosize';
import ReactMarkdown from 'react-markdown';

function Note(props) {
  const [textEditing, setTextEditing] = useState(false);
  const [text, setText] = useState(props.text);
  const [titleEditing, setTitleEditing] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [greenNote, setGreenNote] = useState(false);
  const [blueNote, setBlueNote] = useState(false);
  const [pinkNote, setPinkNote] = useState(true);

  const handleDeleteClick = () => {
    props.deleteNote(props.id);
  };
  const handleDrag = (e, data) => {
    props.handleDrag(props.id, data);
  };

  const handleTextClick = () => {
    setTextEditing(true);
  };

  const handleTextEdit = (e) => {
    setText(e.target.value);
  };

  const handleSave = (e) => {
    if (textEditing) {
      props.editText(props.id, text);
      setTextEditing(false);
    }
    if (titleEditing) {
      props.editTitle(props.id, title);
      setTitleEditing(false);
    }
  };

  const handleTitleClick = () => {
    setTitleEditing(true);
  };

  const handleTitleEdit = (e) => {
    setTitle(e.target.value);
  };

  const renderTextSection = () => {
    if (textEditing) {
      return (
        <TextareaAutosize
          onChange={handleTextEdit}
          value={text}
          className={`textTextBox ${props.noteColor}`}
          cacheMeasurements
        />
      );
    } else if (props.text.trim().length < 1) {
      return (<div><em>*Click to add text*</em></div>);
    } else {
      return (<div><ReactMarkdown>{props.text}</ReactMarkdown></div>);
    }
  };

  const renderTitleSection = () => {
    if (titleEditing) {
      return (
        <TextareaAutosize
          onChange={handleTitleEdit}
          value={title}
          className={`titleTextBox ${props.noteColor}`}
          maxRows={2}
          cacheMeasurements

        />
      );
    } else if (props.title.trim().length < 1) {
      return (<div><em>*Click to add title*</em></div>);
    } else {
      return (<div>{props.title}</div>);
    }
  };

  const greenClicked = () => {
    props.changeNoteColor(props.id, 'green');
  };
  const blueClicked = () => {
    props.changeNoteColor(props.id, 'blue');
  };

  const pinkClicked = () => {
    props.changeNoteColor(props.id, 'pink');
  };

  return (
    <Draggable
      handle=".moveIcon"
      grid={[5, 5]}
      defaultPosition={{ x: 20, y: 20 }}
      position={{
        x: props.x, y: props.y,
      }}
      onDrag={handleDrag}
    >
      <div className={`noteContainer ${props.noteColor}`}>

        <div className={`header ${props.noteColor}`}>

          <div className="title">
            <element onClick={handleTitleClick}> {renderTitleSection()} </element>
          </div>

          <div className="topIcons">
            { (titleEditing || textEditing)
            && <i role="button" id="save" tabIndex={0} aria-label="save" onClick={handleSave} className="fa-solid fa-square-check fa" />}

            <div className="moveIcon">
              <i id="move" className="fa-solid fa-maximize" />
            </div>

          </div>

        </div>

        <div className="body">
          <element onClick={handleTextClick} className="text">
            {renderTextSection()}
          </element>
        </div>

        <div className={`footer ${props.noteColor}`}>

          <div className="colors">
            <input type="button" id="green" onClick={greenClicked} />
            <input type="button" id="pink" onClick={pinkClicked} />
            <input type="button" id="blue" onClick={blueClicked} />

          </div>

          <i role="button" id="deleteBttn" tabIndex={0} aria-label="delete" onClick={handleDeleteClick} className="fa-solid fa-trash" />
        </div>

      </div>
    </Draggable>

  );
}

export default Note;
