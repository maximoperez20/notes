export async function getAllNotes() {
  const response = await fetch("http://localhost:5000/notes");
  return await response.json();
}

export async function getNoteById(id) {
  const response = await fetch("http://localhost:5000/notes/" + id);
  // console.log("response", await response.json());
  return await response.json();
}

//agregar una nota
export async function addNote(params) {
  const data = JSON.stringify(params);
  const response = await fetch("http://localhost:5000/notes/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });
  return response;
}

export async function removeNote({ id }) {
  const response = await fetch("http://localhost:5000/notes/delete/" + id, {
    method: "DELETE",
  });

  if (!response.ok) {
    const error = new Error("An error occurred while deleting the event");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.json();
}

// Edit a note service
export async function editNote({ id, data }) {
  console.log("data", data);
  const dataFormatted = JSON.stringify(data);

  const response = await fetch("http://localhost:5000/notes/edit/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: dataFormatted,
  });

  if (!response.ok) {
    const error = new Error("An error occurred while editing a note");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }
  return response.json();
}
