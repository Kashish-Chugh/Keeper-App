import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function editNote(event) {
    console.log("edit note" + props.id);
  }

  return (
    <div className="note" onClick={editNote}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
