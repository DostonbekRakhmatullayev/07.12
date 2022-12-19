import dotenv from "dotenv/config"


const pgConfig = {
    host: process.env.PG_HOST,
    user: process.env.PG_USERS,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
}

export { pgConfig };
