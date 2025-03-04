import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { loadMentorsData } from "@/lib/data/mentor-helper";

export async function POST(req: Request) {
  // Explicit null check for API key
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("Gemini API key is not configured");
    return NextResponse.json(
      { error: "Gemini API key is not configured" }, 
      { status: 500 }
    );
  }

  try {
    // Load mentors data
    const mentors = loadMentorsData();
    if (!mentors || mentors.length === 0) {
      console.error("No mentors data available");
      return NextResponse.json(
        { error: "No mentors data available" }, 
        { status: 404 }
      );
    }

    // Get user data from request
    const userData = await req.json();

    // Validate user data
    if (!userData.firstName || !userData.lastName || !userData.email) {
      console.error("Missing required user data", userData);
      return NextResponse.json(
        { error: "Missing required user information" }, 
        { status: 400 }
      );
    }

    // Initialize Gemini AI
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Prepare matching prompt with more explicit JSON formatting instructions
    const matchPrompt = `
      Generate a VALID JSON array of mentor matches for this profile:
      
      Mentee Profile:
      - First Name: ${userData.firstName}
      - Last Name: ${userData.lastName}
      - Email: ${userData.email}
      - Interests: ${userData.interests || 'Not specified'}

      Available Mentors: ${JSON.stringify(mentors)}

      IMPORTANT: Respond ONLY with a JSON array in this EXACT format:
      [
        {
          "name": "Mentor Name",
          "expertise": ["Skill1", "Skill2"],
          "matchReason": "Specific reason for match"
        },
        ...
      ]

      If no good matches, return an empty array. 
      DO NOT include any text outside of the JSON array.
    `;

    // Generate mentor matches
    const result = await model.generateContent(matchPrompt);
    const responseText = result.response.text().trim();

    // Attempt to parse the response, with fallback
    let matchedMentors: any[] = [];
    try {
      // Remove any potential leading/trailing code block markers
      const cleanedResponse = responseText
        .replace(/^```json\s*/, '')
        .replace(/```\s*$/, '')
        .trim();

      matchedMentors = JSON.parse(cleanedResponse);

      // Validate the parsed result
      if (!Array.isArray(matchedMentors)) {
        throw new Error('Invalid response format');
      }
    } catch (parseError) {
      console.error('Failed to parse AI response:', responseText);
      return NextResponse.json(
        { 
          error: "Failed to process mentor matching results", 
          rawResponse: responseText 
        }, 
        { status: 500 }
      );
    }

    // If no mentors found, return an empty array
    return NextResponse.json({ 
      matchedMentors,
      message: matchedMentors.length > 0 
        ? "Mentors successfully matched!" 
        : "No matching mentors found"
    });

  } catch (error) {
    console.error("Mentor Matching Error:", error);
    return NextResponse.json({ 
      error: "Failed to match mentors", 
      details: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 });
  }
}