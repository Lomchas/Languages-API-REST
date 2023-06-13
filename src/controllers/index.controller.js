import { pool } from "../db.js";

export const main_controller = async (req, res) => {
  try {
    await res.send("Bienvenido a la API de Programming Languages");
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};
