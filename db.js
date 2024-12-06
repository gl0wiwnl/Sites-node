import 'dotenv/config'
import postgres from 'postgres'

const {PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID, DATABASE_URL } = process.env
const URL = DATABASE_URL

export const sql = postgres(URL, {ssl: 'require'});