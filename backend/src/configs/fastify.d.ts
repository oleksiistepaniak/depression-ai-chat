import 'fastify';
import {AppConfig} from "./AppConfig";
import {AppDb} from "../database/AppDb";

declare module 'fastify' {
    interface FastifyInstance {
        appConfig: AppConfig;
        appDb: AppDb;
    }
}
