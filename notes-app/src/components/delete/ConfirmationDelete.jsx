import React from "react";

import Modal from "../UI/Modal";

function ConfirmationDelete({ onDelete, onCancel }) {
  return (
    <Modal>
      <div className="confirmation-delete">
        <h2>Confirmation</h2>
        <p>Are you sure you want to delete this note?</p>
        <div className="confirmation-delete__actions">
          <button className="btn btn-outline-danger m-1" onClick={onDelete}>
            Delete
          </button>
          <button className="btn btn-secondary m-1" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmationDelete;
