import { FastifyInstance } from 'fastify';
import { getUsers } from '@controllers/v1/user';

async function user(fastify: FastifyInstance) {
  fastify.route({
    method: 'GET',
    url: '/',
    handler: getUsers,
  });
}

export default user;
