import dotenv from 'dotenv';

dotenv.config();

const mainConfig = {
   port: process.env.PORT || 8080,
   jwtSecret: process.env.JWT_SECRET || 'JSON_WEB_TOKEN'
}

export default mainConfig;