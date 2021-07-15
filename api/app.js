require('dotenv').config();
const fastify = require('fastify');
const PORT = process.env.PORT;

const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGO_URI;

const registerPlugins = async (app) => {
  app.register(require('fastify-express'))
  .then((app) => {
    app.use(require('cors')())
  })
}

function init() {

  const app = fastify({logger: true});
  registerPlugins(app);
  const MongoClient = require('mongodb').MongoClient;
  const uri = process.env.MONGO_URI;
  let client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  let db;

  app.get('/.netlify/functions/server', function (request, reply) {
    reply.send({ hello: 'world' });
  });

  app.get('/.netlify/functions/server/getBlogs', async function (request, reply) {

    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    if(!db || !db.serverConfig.isConnected()) {
      console.log("connecting to MongoDB");
      await client.connect();
    } else {
      console.log("using cached mongo connection");
    }

    try {
      db = client.db("personalSite");

      const blogsCollection = db.collection('blogs');

      const blogsCursor = await blogsCollection.find();

      const blogs = [];
      await blogsCursor.forEach((x) => {
        blogs.push(x);
      });
      client.close();
      reply.header("Access-Control-Allow-Origin", "*").send({success: blogs});
    } catch(err) {
      console.log(err);
      reply.send({err: err});
    }
  });
  return app;
}

if (require.main === module) {
  const fastify = init();
  fastify.listen(PORT, '0.0.0.0', function (err, address) {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    fastify.log.info(`server listening on ${address}`);
  });
} else {
  module.exports = init;
}
