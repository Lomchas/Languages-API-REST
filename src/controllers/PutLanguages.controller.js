import { pool } from "../db.js";

export const put_root_language_controller = async (req, res) => {
  try {
    const { id } = req.params;
    const { languages_name } = req.body;
    const [result] = await pool.query(
      `UPDATE root_languages SET languages_name = IFNULL(?, languages_name) WHERE id = ?`,
      [languages_name, id]
    );
    if (result.affectedRows <= 0) {
      res.status(404).json({
        message: "Language not found",
      });
    } else {
      const [rows] = await pool.query(
        `SELECT * FROM root_languages WHERE id = ?`,
        [id]
      );
      res.send({
        message: "Language was update...",
        framework: rows[0],
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const put_frontend_language_controller = async (req, res) => {
  try {
    const { id } = req.params;
    const { framework_name, framework_description, root_language_id } =
      req.body;
    const [result] = await pool.query(
      `UPDATE frontend_frameworks SET framework_name = IFNULL(?, framework_name), framework_description = IFNULL(?, framework_description), root_language_id = IFNULL(?, root_language_id) WHERE id = ?`,
      [framework_name, framework_description, root_language_id, id]
    );
    if (result.affectedRows <= 0) {
      res.status(404).json({
        message: "Framework not found",
      });
    } else {
      const [rows] = await pool.query(
        `SELECT * FROM frontend_frameworks WHERE id = ?`,
        [id]
      );
      res.send({
        message: "Framework was update...",
        framework: rows[0],
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const put_backend_language_controller = async (req, res) => {
  try {
    const { id } = req.params;
    const { framework_name, framework_description, root_language_id } =
      req.body;
    const [result] = await pool.query(
      `UPDATE backend_frameworks SET framework_name = IFNULL(?, framework_name), framework_description = IFNULL(?, framework_description), root_language_id = IFNULL(?, root_language_id) WHERE id = ?`,
      [framework_name, framework_description, root_language_id, id]
    );
    if (result.affectedRows <= 0) {
      res.status(404).json({
        message: "Framework not found",
      });
    } else {
      const [rows] = await pool.query(
        `SELECT * FROM backend_frameworks WHERE id = ?`,
        [id]
      );
      res.send({
        message: "Framework was update...",
        framework: rows[0],
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};
