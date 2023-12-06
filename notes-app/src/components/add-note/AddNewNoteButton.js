import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function AddNewNoteButton() {
  return (
    <button className="add-new-note btn btn-success" >
      <Link to={'add'}>
        <FontAwesomeIcon icon={faPlus} /> <span> Add note</span>
      </Link>
    </button>
  );
}

export default AddNewNoteButton;
