export class AppConfig {
    constructor(
        private readonly _GEMINI_API_KEY: string,
        private readonly _PORT: string,
        private readonly _DB_URL: string) {
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
}
