import * as dotenv from "dotenv"

const path = `${__dirname}/../../.env.development.local`

dotenv.config({ path: path})

export const token = process.env.TOKEN;