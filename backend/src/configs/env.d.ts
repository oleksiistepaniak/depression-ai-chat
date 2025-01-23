declare namespace NodeJS {
    interface ProcessEnv {
        PORT: string;
        GEMINI_API_KEY: string;
        DB_URL: string;
    }
}
