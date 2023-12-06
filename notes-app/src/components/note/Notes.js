// import resp from "./../../response.json";
import Note from "./Note";
import "./../../services/notesServices.js";
import { getAllNotes } from "./../../services/notesServices.js";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../UI/LoadingSpinner.js";

// const resps = Promise.resolve(getAllNotes());

const Notes = (params) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getAllNotes,
    staleTime: 5000,
  });

  return (
    <div className="notes-container">
      <div className="row">
        {isPending && <LoadingSpinner />}
        {data?.map((item, index) => (
          <div className="col">
            <Note key={index} data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
