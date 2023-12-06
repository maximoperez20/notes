import { Link } from "react-router-dom";

import "./AddNote.css";
import { addNote } from "../../services/notesServices";
import NoteForm from "./NoteForm";
import Modal from "./../UI/Modal";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../util/http";

const AddNote = () => {
  const navigate = useNavigate();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: addNote,
    onSuccess: () => {
      navigate("/notes");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleSubmit = async (data) => {
    mutate(data);
  };

  return (
    <div className="">
      <Modal>
        <h1>Add New Note</h1>
        <NoteForm onSubmit={handleSubmit}>
          {!isPending && (
            <>
              <button type="submit" className="btn btn-success">
                Ok
              </button>
              <Link to={"../"} type="button" className="btn btn-outline-danger">
                Cancel
              </Link>
            </>
          )}
          {isPending && <p> Creating new note... </p>}
        </NoteForm>
      </Modal>
    </div>
  );
};
export default AddNote;
