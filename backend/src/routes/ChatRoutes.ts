import {FastifyInstance} from "fastify";
import {sendMessage} from "../controllers/ChatController";

export default async function chatRoutes(server: FastifyInstance) {
    server.post("/chat", sendMessage);
}
