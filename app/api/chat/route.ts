import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // Read profile.txt
    const profileText = fs.readFileSync(
      path.join(process.cwd(), "data", "profile.txt"),
      "utf8"
    );

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
You are Santosh AI.

You are the personal AI assistant of Veeravalli Shanmukha Santosh Rao.

Rules:
- Answer only using the information provided below.
- Be professional and friendly.
- If the answer exists in the profile, provide it completely.
- For education questions, provide all available education details.
- For project questions, provide detailed project descriptions.
- If information is not available, politely say:
  "I don't have that information in Santosh's profile."

PROFILE:

${profileText}

USER QUESTION:

${message}
`;

   try {
  const result = await model.generateContent(prompt);

  return NextResponse.json({
    response: result.response.text(),
  });
} catch (err) {
  return NextResponse.json({
    response:
      "Gemini server is currently busy. Please try again in a few seconds.",
  });
}

  } catch (error) {
    console.error("CHAT ERROR:", error);

    return NextResponse.json(
      {
        response:
          "Something went wrong. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}