const express = require("express");
const axios = require("axios");
const rephraseRouter = express.Router();

rephraseRouter.post("/", async (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }
  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "deepseek/deepseek-chat-v3-0324:free",
        messages: [
          {
            role: "user",
            content: `You are a helpful assistant that grammatically corrects and rephrases sentences. Only return 2 rephrased sentences, each on a new line numbered as "1. " and "2. ". This is the sentence: ${text}`,
          },
        ],
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    const reply = response.data.choices[0].message.content;
    const sentences = reply.split(/(?:^|\n)\d\.\s*/).filter(Boolean);
    const rephrasedSentences = sentences.map((s) => {
      let cleaned = s.replace(/\\/g, "");
      if (cleaned.startsWith('"') && cleaned.endsWith('"')) {
        cleaned = cleaned.slice(1, -1);
      }
      return cleaned.trim();
    });
    res.json({ rephrased: rephrasedSentences });
  } catch (error) {
    console.error("Rephrasing error:", error.message);
    if (error.response) {
      console.error("API Error Response:", error.response.data);
    }
    res
      .status(500)
      .json({ error: "Failed to process text", details: error.message });
  }
});

module.exports = rephraseRouter;
