import { FastifyReply as Reply, FastifyRequest as Request } from 'fastify';

/**
 * @desc Health Check
 * @route GET /api/v1/health
 * @access Public
 */
export const healthCheck = async (_req: Request, reply: Reply) => {
  reply.code(200).send({
    status: '00',
    massage: 'Success',
    data: null,
  });
};
