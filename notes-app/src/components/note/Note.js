import { Link, useNavigate } from "react-router-dom";
import "./note.css";
import NoteButtons from "./NoteButtons";
const Note = ({ data }) => {
  const navigate = useNavigate();
  const author = data.name + " " + data.last_name;
  var contentText;
  var titleText;
  if (data.content.length > 130) {
    contentText = data.content.substring(0, 130).trim() + "...";
  } else {
    contentText = data.content;
  }

  if (data.title.length > 15) {
    titleText = data.title.substring(0, 15).trim() + "...";
  } else {
    titleText = data.title;
  }
  const date = new Date(data.date_add);
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleNoteClick = (event) => {
    navigate("/notes/" + data.id_note);
    event.stopPropagation();
  };

  return (
    <div
      className="note"
      id={data.id_note}
      style={{ backgroundColor: data.color_hex }}
      onClick={handleNoteClick}
    >
      <h3>{titleText}</h3>
      <div className="note__content">{contentText}</div>
      <p> {formattedDate}</p>
      <NoteButtons data={data} />
    </div>
  );
};
export default Note;
