import {FastifyReply, FastifyRequest} from "fastify";
import {generateResponse} from "../services/AIService";

export async function sendMessage(request: FastifyRequest<{ Body: { message: string } }>, reply: FastifyReply) {
    const message = request.body.message;

    if (!Object.keys(request.body).length) {
        return reply.status(400).send({error: "empty_request_body"});
    }

    if (!message) {
        return reply.status(400).send({error: "empty_message"});
    }

    try {
        const response = await generateResponse(request, message);
        reply.send({response});
    } catch (error: any) {
        reply.status(500).send({error: error.message})
    }
}
