import React from "react";
import { Outlet } from "react-router-dom";
import Notes from "../components/note/Notes";
import Header from "../components/layout/Header";
import AddNewNoteLayout from "../components/add-note/AddNewNoteLayout";

function Home() {
  return (
    <div>
      <Header />
      <Outlet />
      <AddNewNoteLayout />
      <Notes />
    </div>
  );
}

export default Home;
