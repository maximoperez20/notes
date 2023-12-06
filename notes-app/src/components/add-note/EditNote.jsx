import React from "react";
import Modal from "../UI/Modal";
import NoteForm from "./NoteForm";
import { editNote } from "../../services/notesServices";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { queryClient } from "../../util/http";

function EditNote({ onHide, data }) {
  const navigate = useNavigate();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: editNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
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
        <button className="btn btn-waring" onClick={handleSubmit}>
          Submit
        </button>
        <button className="btn btn-secondary" onClick={onHide}>
          Cancel
        </button>
      </NoteForm>
    </Modal>
  );
}

export default EditNote;
