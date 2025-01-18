import { FastifyInstance } from "fastify";
import {generateResponse} from "../services/AIService";

export default async function chatRoutes(server: FastifyInstance) {
    server.post("/chat", async (request, reply) => {
        const { message } = request.body as { message: string };

        if (!message) {
            return reply.status(400).send({ error: "Message is required" });
        }

        try {
            const response = await generateResponse(message);
            reply.send({ response });
        } catch (error: any) {
            reply.status(500).send({ error: error.message });
        }
    });
}
