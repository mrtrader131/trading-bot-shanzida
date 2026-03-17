export default async function handler(req, res) {

  const { message } = req.body;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": Bearer ${process.env.OPENAI_API_KEY}
  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  },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are Shanzida, a helpful trading assistant." },
        { role: "user", content: message }
      ]
    })
  });

  const data = await response.json();

  res.status(200).json(data);

}
