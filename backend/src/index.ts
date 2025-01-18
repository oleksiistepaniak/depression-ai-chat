import Fastify from 'fastify';
import dotenv from 'dotenv';
import chatRoutes from "./routes/ChatRoutes";
import {AppConfig} from "./configs/AppConfig";
import {validateEnv} from "./helpers/EnvCheck";

dotenv.config();

const server = Fastify();

const appConfig = new AppConfig(process.env.GEMINI_API_KEY, process.env.PORT);
server.decorate("appConfig", appConfig);

server.register(chatRoutes);
server.get('/', async () => {
    return {message: 'Depression Chat API is running'};
});
validateEnv();

server.listen({port: +appConfig.PORT}, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log("GEMINI_API_KEY is provided");
    console.log(`Server running at ${address}`);
});
