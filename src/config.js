import { config } from "dotenv";

config()

export const PORT = process?.env?.PORT || 9090;
export const HOST = process?.env?.DB_HOST || 'localhost';
export const DB_PORT = process?.env?.DB_PORT || 3306;
export const DB_USER = process?.env?.DB_USER || 'root';
export const DB_PASSWORD = process?.env?.DB_PASSWORD || '1716';
export const DB_DATABASE = process?.env?.DB_DATABASE ||  'languages'; 