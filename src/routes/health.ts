import { FastifyInstance } from 'fastify';
import { healthCheck } from '@controllers/v1/health';

async function health(fastify: FastifyInstance) {
  fastify.route({
    method: 'GET',
    url: '/',
    handler: healthCheck,
  });
}

export default health;
