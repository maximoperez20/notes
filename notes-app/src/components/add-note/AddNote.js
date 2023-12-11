import { Link } from "react-router-dom";

import "./AddNote.css";
import { addNote } from "../../services/notesServices";
import NoteForm from "./NoteForm";
import Modal from "./../UI/Modal";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../util/http";
import ErrorBlock from "../UI/ErrorBlock";

const AddNote = () => {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: addNote,
    onSuccess: () => {
      navigate("/notes");
      queryClient.invalidateQueries({ queryKey: ["notes"] });
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
                Create
              </button>
              <Link to={"../"} type="button" className="btn btn-outline-danger">
                Cancel
              </Link>
            </>
          )}
          {isPending && <p> Creating new note... </p>}
          {isError && <ErrorBlock title={"An error occured while creating a note"} message={error.message}/>}
        </NoteForm>
      </Modal>
    </div>
  );
};
export default AddNote;
