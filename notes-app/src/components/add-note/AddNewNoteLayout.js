import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function AddNewNoteLayout() {
  return (
    <div className="nav-notes">
      <Link to={"add"} className="btn btn-primary">
        <FontAwesomeIcon icon={faPlus} />
        {" Add Note"}
      </Link>
    </div>
  );
}

export default AddNewNoteLayout;
