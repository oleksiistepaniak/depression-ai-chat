import {FastifyRequest} from "fastify";

export const generateResponse = async (request: FastifyRequest, message: string): Promise<string> => {
    const apiKey = request.server.appConfig.GEMINI_API_KEY;
    const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=";
    const prompt = "Respond in a depressive style in the language I used to address you after this message: ";

    const response = await fetch(`${url}${apiKey}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            contents: [
                {
                    parts: [
                        {
                            text: prompt + message,
                        },
                    ],
                },
            ],
        }),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(`Error from Gemini API: ${error.error?.message || "Unknown error"}`);
    }

    const data = await response.json();
    const generatedContent = data.candidates?.[0]?.content?.parts?.[0].text;

    if (!generatedContent) {
        throw new Error("No content generated from Gemini API");
    }

    return generatedContent.trim();
};
