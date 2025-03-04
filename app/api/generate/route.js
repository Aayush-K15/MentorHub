import { GoogleGenerativeAI } from "@google/generative-ai";

export async function post(req, res){
    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"})
        const data = await req.json();
        const prompt = data.body
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const output = await response.text()

        return NextResponse.json({output: output})
    }catch (error) {
    console.log(error)
    return NextResponse.json({error: error})
}
}