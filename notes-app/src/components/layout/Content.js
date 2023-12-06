import AddNote from "../add-note/AddNote";
import Notes from "./../note/Notes";

export default function Content() {
  return (
    <div>
      <AddNote />
      <br></br>
      <div>
        <Notes />
      </div>
    </div>
  );
}
