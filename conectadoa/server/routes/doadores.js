import { Router } from "express";
import db from "../db.js";
import { validarDoador } from "../validacao.js";

const router = Router();
const CAMPOS = "id_doador, nome, email, telefone, data_cadastro";

router.get("/", async (request, response) => {
  const [doadores] = await db.execute(`SELECT ${CAMPOS} FROM doador ORDER BY nome`);
  response.json(doadores);
});

router.get("/:id", async (request, response) => {
  const [linhas] = await db.execute(`SELECT ${CAMPOS} FROM doador WHERE id_doador = ?`, [
    request.params.id,
  ]);

  if (linhas.length === 0) {
    return response.status(404).json({ erro: "Doador não encontrado" });
  }
  response.json(linhas[0]);
});

router.post("/", async (request, response) => {
  const erro = validarDoador(request.body);
  if (erro) return response.status(400).json({ erro });

  const nome = request.body.nome.trim();
  const email = request.body.email || null;
  const telefone = request.body.telefone || null;

  try {
    const [resultado] = await db.execute(
      "INSERT INTO doador (nome, email, telefone) VALUES (?, ?, ?)",
      [nome, email, telefone],
    );
    response.status(201).json({
      id_doador: resultado.insertId,
      nome,
      email,
      telefone,
    });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return response.status(409).json({ erro: "E-mail já cadastrado" });
    }
    throw error;
  }
});

router.put("/:id", async (request, response) => {
  const erro = validarDoador(request.body);
  if (erro) return response.status(400).json({ erro });

  const nome = request.body.nome.trim();
  const email = request.body.email || null;
  const telefone = request.body.telefone || null;

  try {
    const [resultado] = await db.execute(
      "UPDATE doador SET nome = ?, email = ?, telefone = ? WHERE id_doador = ?",
      [nome, email, telefone, request.params.id],
    );
    if (resultado.affectedRows === 0) {
      return response.status(404).json({ erro: "Doador não encontrado" });
    }
    response.json({
      id_doador: Number(request.params.id),
      nome,
      email,
      telefone,
    });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return response.status(409).json({ erro: "E-mail já cadastrado" });
    }
    throw error;
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const [resultado] = await db.execute("DELETE FROM doador WHERE id_doador = ?", [
      request.params.id,
    ]);
    if (resultado.affectedRows === 0) {
      return response.status(404).json({ erro: "Doador não encontrado" });
    }
    response.status(204).end();
  } catch (error) {
    if (error.code === "ER_ROW_IS_REFERENCED_2") {
      return response
        .status(409)
        .json({ erro: "Doador possui doações registradas e não pode ser excluído" });
    }
    throw error;
  }
});

export default router;
