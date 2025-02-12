declare namespace NodeJS {
    interface ProcessEnv {
        PORT: string;
        GEMINI_API_KEY: string;
        DB_URL: string;
        GOOGLE_CLIENT_ID: string;
        GOOGLE_CLIENT_SECRET: string;
        JWT_SECRET: string;
    }
}
