import {FastifyInstance} from "fastify";
import {getHealth} from "../controllers/HealthController";

export default async function rootRoutes(server: FastifyInstance) {
    server.get("/", getHealth);
}