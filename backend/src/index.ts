import Fastify from 'fastify';
import dotenv from 'dotenv';
import chatRoutes from "./routes/ChatRoutes";
import {AppConfig} from "./configs/AppConfig";
import {validateEnv} from "./helpers/EnvCheck";
import rootRoutes from "./routes/RootRoutes";
import fastifyCors from "@fastify/cors";

dotenv.config();
export const server = Fastify();

// creating global dependencies
const appConfig = new AppConfig(process.env.GEMINI_API_KEY, process.env.PORT);
server.decorate("appConfig", appConfig);

// configuring cors
server.register(fastifyCors, {
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
});

// registration of new API routes
server.register(chatRoutes);
server.register(rootRoutes);

// validating global environment variables
validateEnv();

// running of the server
server.listen({port: +appConfig.PORT}, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log("GEMINI_API_KEY is provided");
    console.log(`Server running at ${address}`);
});
