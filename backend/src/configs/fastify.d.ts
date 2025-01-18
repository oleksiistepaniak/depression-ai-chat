import 'fastify';
import {AppConfig} from "./AppConfig";

declare module 'fastify' {
    interface FastifyInstance {
        appConfig: AppConfig;
    }
}
