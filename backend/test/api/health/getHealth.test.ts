import supertest from 'supertest';
import {fastify} from "../../../src";
import {after, before} from "node:test";
import should from "should";

describe("getHealth.test", () => {
    before(async () => {
        await fastify.listen();
    });

    after(async () => {
        await fastify.close();
    });

    it("success", async () => {
        const reply = await supertest(fastify.server).get("/").expect(200);
        should(reply.body).deepEqual({
            message: "Depression Chat API is running and working correctly!",
        });
    });
});
