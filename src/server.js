import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl: {
    rejectUnauthorized: true,
  },
});

app.post("/add", async (req, res) => {
  try {
    const { paciente, telefone, procedimento, profissional, data, horario } =
      req.body;

    const [resultado] = await db.query(
      "INSERT INTO agendamentos(paciente, telefone, procedimento, profissional, data, horario) VALUES(?, ?, ?, ?, ?, ?)",
      [paciente, telefone, procedimento, profissional, data, horario],
    );

    res.status(201).send({ mensagem: "cadastrado" });
  } catch (erro) {
    console.error(erro);
    res.status(500).send({ mensagem: erro });
  }
});

app.get("/agendamentos", async (req, res) => {
  try {
    const [resultado] = await db.query("SELECT * FROM agendamentos");

    res.status(200).send(resultado);
  } catch (erro) {
    console.error(erro);
    res.status(500).send({ mensagem: "erro ao carregar" });
  }
});

app.delete("/agendamentos/:index", async (req, res) => {
  try {
    const index = Number(req.params.index);

    const [resultado] = await db.query(
      "DELETE FROM agendamentos WHERE id = ?",
      [index],
    );

    res.status(200).send({ mensagem: "Agendamento deletado" });
  } catch (erro) {
    console.error(erro);
    res.status(500).send({ mensagem: "erro ao deletar" });
  }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("rodando pai..."));
