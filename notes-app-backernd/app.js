const mysql = require("mysql");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// Init express
const app = express();

// body-parser
app.use(bodyParser.json());

//Server port 5000
app.listen(5000, function () {
  console.log("Server started on port 5000");
});

//Cors Usage
app.use(cors());

// Connect with database
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "notesdb",
});
con.connect(function (err) {
  if (err) console.log("Fallo conexion base de datos");
});

app.get("/notes", (req, res) => {
  const sqlQuery =
    "SELECT notes.id_note, notes.title, notes.content, notes.color_hex, notes.date_add, customers.name, customers.last_name FROM notes INNER JOIN customers ON notes.id_customer = customers.id_customer;";

  con.query(sqlQuery, function (err, result) {
    if (err) throw err;
    setTimeout(() => {
      res.send(result);
    }, 0);
  });
});

app.get("/notes/:id", (req, res) => {
  if (req.params.id) {
    const sqlQuery = `SELECT notes.id_note, notes.title, notes.content, notes.color_hex, notes.date_add, customers.name, customers.last_name FROM notes INNER JOIN customers ON notes.id_customer = customers.id_customer WHERE notes.id_note = ${req.params.id};`;
    con.query(sqlQuery, function (err, result) {
      if (err) throw err;
      setTimeout(() => {
        res.send(result);
      }, 0);
    });
  }
});

app.post("/notes/add", (req, res) => {
  con.query(
    "INSERT INTO `notes` (`id_note`, `id_customer`, `title`, `content`, `color_hex`, `date_add`) VALUES (NULL, '1', '" +
      req.body.title +
      "', '" +
      req.body.content +
      "', '" +
      req.body.color +
      "', '2022-05-31')",
    function (err, result) {
      if (err) throw err;
      setTimeout(() => {
        res.send(result);
      }, 1000);
    }
  );
  // res.send("ok");
});

//delete a note from database
app.delete("/notes/delete/:id", (req, res) => {
  con.query(
    "DELETE FROM notes WHERE id_note = " + req.params.id + ";",
    (err, result) => {
      if (err) throw err;

      console.log("result of delete :", result);

      setTimeout(() => {
        res.json({ message: "Event deleted" });
      }, 1000);
    }
  );
});

app.put("/notes/edit/:id", (req, res) => {
  console.log("im here!!");
  const sqlQuery = `UPDATE notes SET title='${req.body.title}', content='${req.body.content}', color_hex='${req.body.color}' WHERE id_note = ${req.params.id};`;
  console.log("query", sqlQuery);

  con.query(sqlQuery, (err, result) => {
    if (err) throw err;

    setTimeout(() => {
      res.json({ message: "Event modified" });
    }, 1000);
  });
});

// GET ALL NOTES

//DELETE A NOTE
// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var id_note = 1;
//   var sqlDelete = "DELETE FROM notes WHERE id_note=" + id_note + ";";
//   con.query(sqlDelete, function (err, result) {
//     if (err) throw err;
//     console.log("this is the result of the query: ", result);
//   });
// });
