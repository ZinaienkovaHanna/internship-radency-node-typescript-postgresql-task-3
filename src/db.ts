import pg from 'pg';
import { config } from 'dotenv';
config();

const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
const POSTGRES_DB = process.env.POSTGRES_DB;

const pool = new pg.Pool({
    user: 'postgres',
    password: POSTGRES_PASSWORD,
    host: 'localhost',
    port: 5432,
    database: POSTGRES_DB,
});

export default pool;
