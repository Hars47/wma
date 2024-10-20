// postgresql://neondb_owner:rqjIphOtV09P@ep-delicate-dew-a1fxfm3k.ap-southeast-1.aws.neon.tech/WMA?sslmode=require

import { neon } from "@neondatabase/serverless"; 
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema"; 

const sql = neon(process.env.DATABASE_URL);

export const db = drizzle(sql, {schema});
