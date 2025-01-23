import {Collection, Db, MongoClient} from "mongodb";
import {AccountRecord} from "./interfaces";
import {server} from "../index";

export class AppDb {
    private readonly _client: MongoClient;
    private readonly _db: Db;
    private readonly _accountsCollection: Collection<AccountRecord>;

    constructor() {
        this._client = new MongoClient(server.appConfig.DB_URL);
        this._db = this._client.db();
        this._accountsCollection = this._db.collection("accounts");
    }

    get accountCollection(): Collection<AccountRecord> {
        return this._accountsCollection;
    }

    async init() {
        try {
            console.log(`Trying to connect to MongoDB. URL: ${server.appConfig.DB_URL}`);
            await this._client.connect();
            console.log(`Connection established successfully. URL: ${server.appConfig.DB_URL}`);
        } catch (error) {
            throw new Error(`Could not connect to MongoDB. URL: ${server.appConfig.DB_URL}`);
        }
    }
}