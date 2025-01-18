import Fastify from 'fastify';
import dotenv from 'dotenv';

dotenv.config();

const server = Fastify();

server.get('/', async () => {
    return {message: 'Depression Chat API is running'};
});

server.listen({port: process.env.PORT ? +process.env.PORT : 5000}, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    if (!process.env.OPENAI_API_KEY) {
        console.error("OPENAI_API_KEY is missing");
    }
    console.log("OPENAI_API_KEY is provided");
    console.log(`Server running at ${address}`);
});
