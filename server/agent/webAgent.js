import { ChatGroq } from "@langchain/groq";
import { HumanMessage, SystemMessage, AIMessage } from "@langchain/core/messages";
import axios from "axios";
import * as cheerio from "cheerio";

// ✅ No ChatGroq initialization here at module level

export async function fetchPageContent(url) {
  const { data } = await axios.get(url, {
    headers: { "User-Agent": "Mozilla/5.0" },
    timeout: 10000,
  });

  const $ = cheerio.load(data);
  $("script, style, nav, footer, header, aside").remove();

  const title = $("title").text().trim();
  const text = $("body").text().replace(/\s+/g, " ").trim().slice(0, 4000);

  return { title, text };
}

export async function askAgent(pageContent, pageTitle, chatHistory, userQuestion) {
  // ✅ Initialize INSIDE the function — dotenv is already loaded by now
  const llm = new ChatGroq({
    model: "llama-3.3-70b-versatile",
    temperature: 0.7,
    maxTokens: 1024,
    apiKey: process.env.GROQ_API_KEY, // ✅ explicit pass
  });

  const systemPrompt = `You are WebPage Buddy, a helpful AI assistant.
The user has loaded this webpage: "${pageTitle}"

Here is the page content:
"""
${pageContent}
"""

Answer the user's questions based on this content.
If the answer isn't in the page, say so honestly.
Keep answers concise and useful.`;

  const messages = [
    new SystemMessage(systemPrompt),
    ...chatHistory.map((msg) =>
      msg.role === "user"
        ? new HumanMessage(msg.content)
        : new AIMessage(msg.content)
    ),
    new HumanMessage(userQuestion),
  ];

  const response = await llm.invoke(messages);
  return response.content;
}