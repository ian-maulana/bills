if (process.env.NODE_ENV !== 'development') {
  require('module-alias/register');
}

import app from '@app';
import dovenv from 'dotenv';
import { HOST, PORT } from '@utils/constants';

dovenv.config();
app().then(
  (fastify) => fastify.listen({ port: Number(PORT), host: HOST }),
  (error) => {
    console.log(error);
    process.exit(0);
  },
);
