import React from "react";
import { Outlet } from "react-router-dom";
import NoteInfo from "../components/note/NoteInfo";

function Details() {
  return (
    <>
      <div>Details</div>
      <Outlet />
      <NoteInfo id={'64'}/>
    </>
  );
}

export default Details;
