/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-class-component-methods */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import TextareaAutosize from 'react-textarea-autosize';

function Note(props) {
  const [isEditing, setEditing] = useState(false);
  const handleDeleteClick = () => {
    props.deleteNote(props.id);
  };

  const handleEditClick = () => {
    props.editNote('hi');
    console.log('Yuhhh');
  };

  // Why did he say to do handleDrag rather than stop drag
  // const handleDrag = (e, data) => {
  //   console.log('drag');
  //   console.log(data);
  // };

  const handleStopDrag = (e, data) => {
    props.handleDrag(props.id, data);
  };

  const handleEdit = (e, data) => {
    props.handleDrag(props.id, data);
  };

  const renderSomeSection = () => {
    if (isEditing) {
      return (
        <TextareaAutosize
          onClick={handleEdit}
          className="Text"
          cacheMeasurements
          onHeightChange={(height) => console.log(height)}
        />
      );
    } else {
      return <div>the usual stuff</div>;
    }
  };

  return (
    <Draggable
      handle=".header"
      grid={[5, 5]}
      defaultPosition={{ x: 20, y: 20 }}
      position={{
        x: props.x, y: props.y,
      }}
      onStop={handleStopDrag}
    >
      <div className="noteContainer">

        <div className="header">
          <h1>{props.title}</h1>
        </div>

        <div className="body">
          {renderSomeSection()}
          <div>{props.text}</div>
        </div>

        <div className="footer">

          <button type="button" onClick={handleEditClick}>
            <i className="fa-solid fa-pen-to-square fa-xl" />
          </button>

          <button type="button" onClick={handleDeleteClick}>
            <i className="fa-solid fa-trash fa-xl" />
          </button>
        </div>

      </div>
    </Draggable>

  );
}

export default Note;
