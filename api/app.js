require('dotenv').config();
const fastify = require('fastify');
const PORT = process.env.PORT;

function init() {
  const app = fastify({logger: true});
  app.get('/server', function (request, reply) {
    reply.send({ hello: 'world' });
  });
  app.get('/', function (request, reply) {
    reply.send({ hello: 'world' });
  });
  return app;
}


if (require.main === module) {
  console.log("here");
  const fastify = init();
  fastify.listen(PORT, '0.0.0.0', function (err, address) {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    fastify.log.info(`server listening on ${address}`);
  });
} else {
  console.log("here too");
  module.exports = init;
}
