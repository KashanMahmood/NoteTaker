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
    console.log('here', textEditing, titleEditing);
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
          className="textTextBox"
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
          className="titleTextBox"
          cacheMeasurements

        />
      );
    } else if (props.title.trim().length < 1) {
      return (<div><em>*Click to add title*</em></div>);
    } else {
      return (<div>{props.title}</div>);
    }
  };

  const colorSelection = () => {
    console.log('Shalom hehe');
    if (document.getElementById('green').checked) {
      console.log('wati whatehfaisodfj');
      console.log(document.getElementsByClassName('body').className);
      document.getElementsByClassName('body').classList.add('green');
      document.getElementsByClassName('body').removeClass('blue');
      document.getElementsByClassName('body').classList.add('pink');
      console.log(document.getElementsByClassName('body').classList);
    }
    return (<div>hi</div>);
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
      <div className="noteContainer">

        <div className="header">

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

        <div className="footer">

          <div className="colors">
            <input type="radio" onClick={colorSelection} name={props.id} id="green" value="green" className="colorInput" />
            <input type="radio" name={props.id} id="blue" value="blue" className="colorInput" />
            <input type="radio" name={props.id} id="pink" value="pink" className="colorInput" />
          </div>
          {colorSelection}
          <i role="button" id="deleteBttn" tabIndex={0} aria-label="delete" onClick={handleDeleteClick} className="fa-solid fa-trash fa" />
        </div>

      </div>
    </Draggable>

  );
}

export default Note;
