import React from "react";
import Modal from "../UI/Modal";
import NoteForm from "./NoteForm";
import { editNote } from "../../services/notesServices";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { queryClient } from "../../util/http";
import ErrorBlock from "../UI/ErrorBlock";

function EditNote({ onHide, data }) {
  const navigate = useNavigate();
  const { mutate, isError, error, isPending } = useMutation({
    mutationFn: editNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      onHide();
      navigate("/notes");
    },
  });

  const handleSubmit = async (formData) => {
    mutate({ data: formData, id: data.id_note });
  };

  return (
    <Modal>
      <h2 className="text-center">Edit a note</h2>
      <NoteForm inputData={data} onSubmit={handleSubmit}>
        {!isPending && (
          <>
            <button className="btn btn-success" type="submit">
              Edit
            </button>
            <button className="btn btn-secondary" onClick={onHide}>
              Cancel
            </button>
          </>
        )}
        {isPending && <p>Submitting changes...</p>}
        {isError && <ErrorBlock title={"An error occured on edit"} message={error.message}/>}
      </NoteForm>
    </Modal>
  );
}

export default EditNote;
