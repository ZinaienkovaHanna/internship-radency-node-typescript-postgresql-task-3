import pg from 'pg';
import { config } from 'dotenv';
config();

const pool = new pg.Pool({
    user: 'postgres',
    password: process.env.POSTGRES_PASSWORD,
    host: 'localhost',
    port: 5432,
    database: process.env.POSTGRES_DB,
});

export default pool;
