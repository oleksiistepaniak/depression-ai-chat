import {FastifyReply, FastifyRequest} from "fastify";
import {generateResponse} from "../services/AIService";

export async function sendMessage(request: FastifyRequest<{ Body: { message: string } }>, reply: FastifyReply) {
    const message = request.body.message;

    if (!message) {
        return reply.status(400).send({error: "Message is required!"});
    }

    try {
        const response = await generateResponse(request, message);
        reply.send({response});
    } catch (error: any) {
        reply.status(500).send({error: error.message})
    }
}
