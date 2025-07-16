const express = require("express");
const axios = require("axios");
const grammarRouter = express.Router();

grammarRouter.post("/", async (req, res) => {
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
            content: `You are a helpful assistant that checks for grammatical mistakes in sentences. Only return the grammatically correct sentence without any additional comments or context."This is the sentence:${text}"`,
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
    const rephrasedSentences = sentences.map((s) =>
      s.replace(/\\/g, "").slice(1, -1)
    );
    res.json({ rephrased: rephrasedSentences });
  } catch (error) {
    res.status(500).json({ error: "Failed to process text" });
  }
});
module.exports = grammarRouter;
