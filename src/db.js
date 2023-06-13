import { createPool } from "mysql2/promise";
import {
    DB_PORT, 
    HOST, 
    DB_DATABASE, 
    DB_USER, 
    DB_PASSWORD} from './config.js'

const pool = createPool({
    host: HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
})

export {
    pool,
}