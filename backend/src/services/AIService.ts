export const generateResponse = async (message: string): Promise<string> => {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        throw new Error("Gemini API key is missing");
    }

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            contents: [
                {
                    parts: [
                        {
                            text: "Respond in a depressive style in the language I used to address you after this message:" + message,
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
