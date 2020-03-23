const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json({
    evento: "Semana OmniStack 11.0",
    aluno: "Gustavo Costa"
  });
});

app.listen(3333);
