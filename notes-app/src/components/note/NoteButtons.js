import "./note.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ConfirmationDelete from "../delete/ConfirmationDelete";
import EditNote from "../add-note/EditNote";

const NoteButtons = ({ data }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleShowEdit = () => {
    setShowEditModal(true);
  };

  const handleHideEdit = () => {
    setShowEditModal(false);
  };

  const showConfirmModal = () => {
    setShowConfirmation(true);
  };

  const hideConfirmModal = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="note-buttons">
      {showEditModal && <EditNote data={data} onHide={handleHideEdit} />}

      {showConfirmation && (
        <ConfirmationDelete
          id_note={data.id_note}
          onCancel={hideConfirmModal}
        />
      )}
      <button className="btn btn-outline-warning" onClick={handleShowEdit}>
        <FontAwesomeIcon icon={faEdit} />
      </button>
      <button className="btn btn-outline-danger" onClick={showConfirmModal}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};
export default NoteButtons;
