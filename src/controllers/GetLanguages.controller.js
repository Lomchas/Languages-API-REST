import { pool } from "../db.js";

export const root_language_id_controller = async (req, res) => {
  try {
    const id = req.params.id;
    const [rows] = await pool.query(
      `SELECT * FROM root_languages WHERE id = ?`,
      [id]
    );
    rows.length <= 0
      ? res.status(404).json({
          message: "Language not found ",
        })
      : res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const frontend_language_id_controller = async (req, res) => {
  try {
    const id = req.params.id;
    const [rows] = await pool.query(
      `SELECT * FROM frontend_frameworks WHERE id = ?`,
      [id]
    );
    rows.length <= 0
      ? res.status(404).json({
          message: "Framework not found ",
        })
      : res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const backend_language_id_controller = async (req, res) => {
  try {
    const id = req.params.id;
    const [rows] = await pool.query(
      `SELECT * FROM backend_frameworks WHERE id = ?`,
      [id]
    );
    rows.length <= 0
      ? res.status(404).json({
          message: "Framework not found ",
        })
      : res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const root_language_controller = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM root_languages");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const frontend_languages_controller = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM frontend_frameworks");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const backend_languages_controller = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM backend_frameworks");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};
