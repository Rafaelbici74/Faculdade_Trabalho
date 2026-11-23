import "dotenv/config";
import express from "express";
import db from "./db.js";
import doadores from "./routes/doadores.js";
import itens from "./routes/itens.js";
import doacoes from "./routes/doacoes.js";

const app = express();

app.use(express.json());

app.get("/api/health", async (request, response) => {
  let banco = "ok";
  try {
    await db.query("SELECT 1");
  } catch {
    banco = "sem conexão";
  }
  response.json({
    status: "ok",
    banco,
    app: "ConectaDoa",
    hora: new Date().toISOString(),
  });
});

app.use("/api/doadores", doadores);
app.use("/api/itens", itens);
app.use("/api/doacoes", doacoes);

app.use((erro, request, response, _next) => {
  if (erro.type === "entity.parse.failed") {
    return response.status(400).json({ erro: "JSON inválido no corpo da requisição" });
  }
  console.error(erro);
  response.status(500).json({ erro: "Erro interno no servidor" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
