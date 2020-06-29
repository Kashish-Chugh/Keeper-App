import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isFocused, setFocused] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    if (note.title === "" && note.content == "") {
    } else {
      event.preventDefault();
      props.onClick(note);
      setNote({ title: "", content: "" });
      setFocused(false);
    }
  }

  function showComponents(event) {
    setFocused(true);
  }

  return (
    <div>
      <form className="create-note">
        {isFocused && (
          <input
            value={note.title}
            name="title"
            placeholder="Title"
            onChange={handleChange}
          />
        )}
        <textarea
          value={note.content}
          onChange={handleChange}
          onFocus={showComponents}
          name="content"
          placeholder="Take a note..."
          rows={isFocused ? 3 : 1}
        />
        <Zoom in={isFocused}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
