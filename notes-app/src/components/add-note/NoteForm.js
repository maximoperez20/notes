import "./AddNote.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import ColorPicker from "./ColorPicker";

const NoteForm = ({ children, onSubmit, inputData }) => {
  const [selectedColor, setSelectedColor] = useState(inputData?.color_hex || "#ffb3ba");

  const handleChangeColor = (color) => {
    setSelectedColor(color);
  };

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onSubmit({ ...data, color: selectedColor });
  }

  return (
    <div className="">
      <form className="add-new-note-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input name="title" defaultValue={inputData?.title}></input>
        <label htmlFor="content">Content</label>
        <input name="content" defaultValue={inputData?.content}></input>
        <label htmlFor="color">Color</label>
        <ColorPicker
          selectedColor={selectedColor}
          onSelect={handleChangeColor}
        />
        {children}
      </form>
    </div>
  );
};
export default NoteForm;
