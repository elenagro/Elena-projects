const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");
app.use(express.json());

app.use(cors());

app.get("/studenti", (req, res) => {
  fs.readFile("studenti.json", (err, rawData) => {
    if (err) throw err;
    const data = JSON.parse(rawData);
    res.json(data);
  });
});

app.post("/studenti", (req, res) => {
  const nameInput = req.body.name;
  const gradeInput = req.body.grade;
  if (nameInput === "" || gradeInput === "") {
    return;
  }

  fs.readFile("studenti.json", (err, rawData) => {
    if (err) throw err;
    const data = JSON.parse(rawData);

    data.push({ name: nameInput, grade: gradeInput });

    fs.writeFile("studenti.json", JSON.stringify(data), (err) => {
      if (err) throw err;
      res.sendFile(__dirname + "/studenti.json");
    });
  });
});

app.listen(8080, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server successfully started on port 8080");
});
