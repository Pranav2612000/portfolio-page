require('dotenv').config();
const PORT = process.env.PORT;

const fastify = require('fastify')({
  logger: true
});

fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' });
});

fastify.listen(PORT, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
