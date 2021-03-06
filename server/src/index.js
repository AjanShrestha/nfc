require('dotenv').config();

// Require the framework and instantiate it
const fastify = require('fastify')();

// Register route
fastify.register(require('./routes'));

// Register CORS
fastify.use(require('cors')());

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0', err => {
      if (err) {
        fastify.log.error(err);
        process.exit(1);
      }
    });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
