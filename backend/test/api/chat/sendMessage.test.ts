import supertest from "supertest";
import {server} from "../../../src";
import {after, before} from "node:test";

describe("sendMessage.test", () => {
    before(async () => {
        await server.listen();
    });

    after(async () => {
        await server.close();
    });

    it("empty_request_body", async () => {
        const reply = await supertest(server.server).post("/chat").send({}).expect(400);
        should(reply.body).deepEqual({
            error: "empty_request_body",
        });
    });

    it("empty_message", async () => {
        for (const message of [null, "", NaN, 0]) {
            const reply = await supertest(server.server).post("/chat").send({message}).expect(400);
            should(reply.body).deepEqual({
                error: "empty_message",
            });
        }
    });
});