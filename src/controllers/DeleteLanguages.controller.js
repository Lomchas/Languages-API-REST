import { pool } from "../db.js";

export const delete_root_language_controller = async (req, res) => {
  try {
    const id = req.params.id;
    const [result] = await pool.query(
      `DELETE FROM root_languages WHERE id = ?`,
      [id]
    );
    result.affectedRows <= 0
      ? res.status(404).json({
          message: "Language not found",
        })
      : res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const delete_frontend_language_controller = async (req, res) => {
  try {
    const id = req.params.id;
    const [result] = await pool.query(
      `DELETE FROM frontend_frameworks WHERE id = ?`,
      [id]
    );
    result.affectedRows <= 0
      ? res.status(404).json({
          message: "Language not found",
        })
      : res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const delete_backend_language_controller = async (req, res) => {
  try {
    const id = req.params.id;
    const [result] = await pool.query(
      `DELETE FROM backend_frameworks WHERE id = ?`,
      [id]
    );
    result.affectedRows <= 0
      ? res.status(404).json({
          message: "Language not found",
        })
      : res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

