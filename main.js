// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });

// Declare a route
fastify.get('/', async (request, reply) => {
	return { hello: 'jubail' };
});

const host = process.env.NODE_ENV === 'production' ? '0.0.0.0' : '127.1';

// Run the server!
const start = async () => {
	try {
		await fastify.listen({
			port: 3000,
			host,
		});
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
};
start();
