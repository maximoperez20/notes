// import resp from "./../../response.json";
import Note from "./Note";
import "./../../services/notesServices.js";
import { getAllNotes } from "./../../services/notesServices.js";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../UI/LoadingSpinner.js";
import ErrorBlock from './../UI/ErrorBlock.js'

// const resps = Promise.resolve(getAllNotes());

const Notes = (params) => {
  const { data, isPending, isError, error, isFetching } = useQuery({
    queryKey: ["notes"],
    queryFn: getAllNotes,
    staleTime: 5000,
  });

  return (
    <div className="notes-container">
        {isFetching && <LoadingSpinner />}
        {isError && <ErrorBlock title={"Failed to fetch notes"} message={error.message} />}
        {data?.map((item, index) => (
          <Note key={index} data={item} />
        ))}
    </div>
  );
};

export default Notes;
