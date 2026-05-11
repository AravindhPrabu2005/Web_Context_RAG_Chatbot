import express from "express";
import Session from "../models/Session.js";
import { fetchPageContent, askAgent } from "../agent/webAgent.js";

const router = express.Router();

// POST /api/chat/load  → Load a new URL and create a session
router.post("/load", async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) return res.status(400).json({ error: "URL is required" });

    const { title, text } = await fetchPageContent(url);

    const session = await Session.create({
      url,
      pageTitle: title,
      messages: [],
    });

    res.json({
      sessionId: session._id,
      pageTitle: title,
      message: `✅ Loaded: "${title}". Ask me anything about this page!`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load URL. Check if it's accessible." });
  }
});

// POST /api/chat/ask  → Ask a question in a session
router.post("/ask", async (req, res) => {
  try {
    const { sessionId, question } = req.body;
    if (!sessionId || !question)
      return res.status(400).json({ error: "sessionId and question are required" });

    const session = await Session.findById(sessionId);
    if (!session) return res.status(404).json({ error: "Session not found" });

    // Re-fetch page content (or store it — keep simple for now)
    const { text } = await fetchPageContent(session.url);

    // Get answer from agent
    const answer = await askAgent(text, session.pageTitle, session.messages, question);

    // Save both messages to MongoDB
    session.messages.push({ role: "user", content: question });
    session.messages.push({ role: "assistant", content: answer });
    await session.save();

    res.json({ answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Agent failed to respond." });
  }
});

// GET /api/chat/history/:sessionId  → Get chat history
router.get("/history/:sessionId", async (req, res) => {
  try {
    const session = await Session.findById(req.params.sessionId);
    if (!session) return res.status(404).json({ error: "Session not found" });

    res.json({
      url: session.url,
      pageTitle: session.pageTitle,
      messages: session.messages,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch history." });
  }
});

export default router;