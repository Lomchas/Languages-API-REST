import { pool } from "../db.js";

export const post_root_language_controller = async (req, res) => {
  try {
    const { languages_name } = req.body;
    if (languages_name && typeof languages_name == "string") {
      const [rows] = await pool.query(
        `INSERT INTO root_languages(languages_name) VALUES (?)`,
        [languages_name]
      );
      res.send({
        id: rows?.insertId,
        languages_name: languages_name,
      });
    } else console.error("An error has ocurred");
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const post_frontend_language_controller = async (req, res) => {
  try {
    const { framework_name, framework_description, root_language_id } =
      req.body;
    if (framework_name && framework_description && root_language_id) {
      const [rows] = await pool.query(
        `INSERT INTO frontend_frameworks(framework_name, framework_description, root_language_id) VALUES (?, ?, ?)`,
        [framework_name, framework_description, root_language_id]
      );
      res.send({
        id: rows?.insertId,
        framework_name: framework_name,
        framework_description: framework_description,
        root_language_id: root_language_id,
      });
    } else console.error("An error has ocurred");
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const post_backend_language_controller = async (req, res) => {
  try {
    const { framework_name, framework_description, root_language_id } =
      req.body;
    if (framework_name && framework_description && root_language_id) {
      const [rows] = await pool.query(
        `INSERT INTO backend_frameworks(framework_name, framework_description, root_language_id) VALUES (?, ?, ?)`,
        [framework_name, framework_description, root_language_id]
      );
      res.send({
        id: rows?.insertId,
        framework_name: framework_name,
        framework_description: framework_description,
        root_language_id: root_language_id,
      });
    } else res.send(console.error("An error has ocurred"));
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};
