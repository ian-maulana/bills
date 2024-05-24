import { FastifyReply as Reply, FastifyRequest as Request } from 'fastify';

/**
 * @desc Get all users
 * @route GET /api/v1/users
 * @access Private/Admin
 */
export const getUsers = async (_req: Request, reply: Reply) => {
  reply.code(200).send({
    status: '00',
    massage: 'Success',
    data: null,
  });
};
