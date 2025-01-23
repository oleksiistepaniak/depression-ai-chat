import ProcessEnv = NodeJS.ProcessEnv;

export const validateEnv = (): void => {
    const requiredKeys: (keyof ProcessEnv)[] = [
        'PORT',
        'GEMINI_API_KEY',
        'DB_URL'
    ];

    const missingKeys = requiredKeys.filter((key) => !process.env[key]);

    if (missingKeys.length > 0) {
        throw new Error(
            `Missing required environment variables: ${missingKeys.join(', ')}`
        );
    }
};
