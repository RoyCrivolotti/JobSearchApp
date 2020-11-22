// const createError = require('http-errors');

// read the configuration from the .env file
import dotenv from 'dotenv';

const { NODE_ENV } = process.env;

// Enabling the use of dev/prod .env files
const envPath = `${NODE_ENV ? `.env.${NODE_ENV}` : '.env'}`;
const environmentVariables = dotenv.config({ path: envPath });

console.log(`Environment: ${NODE_ENV ? NODE_ENV : 'Development' }`);

const { parsed: envs } = environmentVariables;

console.log(envs);

export default envs;
