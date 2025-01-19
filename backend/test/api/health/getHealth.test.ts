import supertest from 'supertest';
import {server} from "../../../src";
import {after, before} from "node:test";
import should from "should";

describe("getHealth.test", () => {
    before(async () => {
        await server.listen();
    });

    after(async () => {
        await server.close();
    });

    it("success", async () => {
        const reply = await supertest(server.server).get("/").expect(200);
        should(reply.body).deepEqual({
            message: "Depression Chat API is running and working correctly!",
        });
    });
});
