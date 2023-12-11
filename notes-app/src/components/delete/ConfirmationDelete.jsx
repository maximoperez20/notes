import React from "react";

import Modal from "../UI/Modal";
import { queryClient } from "../../util/http";
import { useMutation } from "@tanstack/react-query";
import { removeNote } from "../../services/notesServices";
import ErrorBlock from "../UI/ErrorBlock";

function ConfirmationDelete({ onCancel, id_note }) {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: removeNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      onCancel();
    },
  });

  return (
    <Modal>
      <div className="confirmation-delete">
        <h2>Confirmation</h2>
        <p>Are you sure you want to delete this note?</p>
        <div className="confirmation-delete__actions">
          {!isPending && (
            <>
              <button
                className="btn btn-outline-danger m-1"
                onClick={() => {
                  mutate({ id: id_note });
                }}
              >
                Delete
              </button>
              <button className="btn btn-secondary m-1" onClick={onCancel}>
                Cancel
              </button>
            </>
          )}
          {isPending && <p>Deleting data...</p>}
          {isError && <ErrorBlock title={"An error occured on delete"} message={error.message}/>}
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmationDelete;
