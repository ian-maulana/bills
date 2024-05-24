import fastify, { FastifyReply, FastifyRequest } from 'fastify';
import user from '@routes/user';
import health from '@routes/health';

export default function init() {
  const app = fastify({
    logger: true,
    disableRequestLogging: true,
  });

  app.addHook('onRequest', (req: FastifyRequest, reply: FastifyReply, done) => {
    let request = {
      body: req.body,
      params: req.params,
      query: req.query,
      headers: req.headers,
    };
    req.log.info({ url: req.raw.url, params: request }, 'received request');
    done();
  });

  app.addHook('onSend', function (req, reply, payload, next) {
    if (!!reply.getHeader('Content-Disposition')) payload = {};
    req.log.info(
      {
        url: req.raw.url, // add url to response as well for simple correlating
        statusCode: reply.raw.statusCode,
        elapsedTime: reply.elapsedTime,
        response: payload,
      },
      'request completed',
    );
    next();
  });

  // errorHandler.init(app);
  app.register(health, { prefix: '/api/v1/health' });
  app.register(user, { prefix: '/api/v1/users' });
  return app;
}
