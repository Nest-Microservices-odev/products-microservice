import 'dotenv/config';
import * as joi from 'joi';
import * as process from 'node:process';
interface EnvVars {
  PORT: number;
  DATABASE_URL: string;
}

const envSchema = joi
  .object({
    PORT: joi.number().required(),
    DATABASE_URL: joi.string().required(),
  })
  .unknown(true);
const { error, value } = envSchema.validate(process.env);

if (error) throw new Error(`config validation failed: ${error.message}`);

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  databaseUrl: envVars.DATABASE_URL,
};
