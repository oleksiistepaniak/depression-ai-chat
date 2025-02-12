export class AppConfig {
    constructor(
        private readonly _GEMINI_API_KEY: string,
        private readonly _PORT: string,
        private readonly _DB_URL: string,
        private readonly _GOOGLE_CLIENT_ID: string,
        private readonly _GOOGLE_CLIENT_SECRET: string,
        private readonly _JWT_SECRET: string) {
    }

    get GEMINI_API_KEY(): string {
        return this._GEMINI_API_KEY;
    }

    get PORT(): string {
        return this._PORT;
    }

    get DB_URL(): string {
        return this._DB_URL;
    }

    get GOOGLE_CLIENT_ID(): string {
        return this._GOOGLE_CLIENT_ID;
    }

    get GOOGLE_CLIENT_SECRET(): string {
        return this._GOOGLE_CLIENT_SECRET;
    }

    get JWT_SECRET(): string {
        return this._JWT_SECRET;
    }
}
