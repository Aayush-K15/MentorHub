import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "AI service not configured" },
      { status: 500 }
    );
  }

  try {
    const { messages } = await req.json();

    if (!messages || messages.length === 0) {
      return NextResponse.json(
        { error: "No messages provided" },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Format the conversation history
    const formattedMessages = messages
      .map((msg: { role: string; content: any; }) => `${msg.role === "user" ? "User" : "Shadow AI"}: ${msg.content}`)
      .join("\n");

    // Define AI prompt
    const prompt = `
      You are Shadow AI, a wise and empathetic mentor providing personalized guidance.
      Here is the conversation so far:

      ${formattedMessages}

      Now, respond to the latest user message with:
      1. A clear, thoughtful answer
      2. Practical advice
      3. Emotional support, if needed
      4. A friendly and engaging tone
    `;

    const result = await model.generateContent(prompt);
    const advice = result.response.text().trim();

    return NextResponse.json({ advice });
  } catch (error) {
    console.error("Shadow AI Error:", error);
    return NextResponse.json(
      { error: "Failed to generate advice" },
      { status: 500 }
    );
  }
}