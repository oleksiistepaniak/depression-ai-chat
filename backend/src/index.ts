import Fastify from 'fastify';
import cors from '@fastify/cors';
import dotenv from 'dotenv';

dotenv.config();

const server = Fastify();

server.register(cors, { origin: true });

server.get('/', async () => {
    return { message: 'Depression Chat API is running' };
});

server.listen({ port: process.env.PORT ? +process.env.PORT : 5000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server running at ${address}`);
});
