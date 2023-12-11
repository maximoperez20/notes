import "./App.css";
import { queryClient } from "./util/http";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClientProvider } from "@tanstack/react-query";

import Home from "./pages/Home";
import AddNote from "./components/add-note/AddNote";
import NoteInfo from "./components/note/NoteInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/notes"} />,
  },
  {
    path: "notes",
    element: <Home />,
    children: [{ path: "add", element: <AddNote /> }],
  },
  {
    path: "notes/:noteId",
    children: [{ index: true, element: <NoteInfo /> }],
  },
]);
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
