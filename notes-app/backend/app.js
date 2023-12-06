const express = require("express");
const app = express();
const notesRoutes = require("./routes/notes");

app.use(express.json());
//Configuraciones
app.set("port", 3000);
app.set("json spaces", 2);

app.get("/", (req, res) => {
  res.json({
    Title: "Hola mundo",
  });
});

app.use("/notes", notesRoutes);

//Iniciando el servidor, escuchando...
app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});
