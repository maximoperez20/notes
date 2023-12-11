import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getNoteById } from "../../services/notesServices";
import { useParams } from "react-router-dom";
import Header from "../layout/Header";

function NoteInfo({ id }) {
  const { noteId } = useParams();
  const { data, isError, isPending } = useQuery({
    queryKey: ["notes", { id: noteId }],
    queryFn: () => getNoteById(noteId)
    ,
  });

  const date = new Date(data?.date_add);
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Header />
      <div className="note-details__container">
        {isPending && <p>Loading data...</p>}
        {data && (
          <>
            <h2 className="note-details__title">{data.title}</h2>
            <div>{data.content}</div>
            <p>{formattedDate}</p>
          </>
        )}
      </div>
    </>
  );
}

export default NoteInfo;
