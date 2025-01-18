import Fastify from 'fastify';
import dotenv from 'dotenv';
import chatRoutes from "./routes/chatRoutes";

dotenv.config();

const server = Fastify();

server.get('/', async () => {
    return {message: 'Depression Chat API is running'};
});
server.register(chatRoutes);

server.listen({port: process.env.PORT ? +process.env.PORT : 5000}, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    if (!process.env.GEMINI_API_KEY) {
        console.error("GEMINI_API_KEY is missing");
        process.exit(1);
    }
    console.log("GEMINI_API_KEY is provided");
    console.log(`Server running at ${address}`);
});
