import { generateBasicToken } from '@utils/auth';

const USER_ID = import.meta.env.VITE_USER_ID;
const USER_PASSWORD = import.meta.env.VITE_USER_PASSWORD;
const TOKEN = generateBasicToken(USER_ID, USER_PASSWORD);

const SECURE_JSON_HEADERS = {
  Authorization: TOKEN,
  'Content-Type': 'application/json',
};

export default SECURE_JSON_HEADERS;
