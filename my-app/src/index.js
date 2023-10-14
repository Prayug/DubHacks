import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const exress = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { Configuration, OpenAIAPI } = require("openai");

const config = new Configuration({
  apiKey: "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",
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 512,
    temperature: 0,
    prompt: prompt,
  });

  res.send(completion.data.choices[0].text);
});

const port = 8000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
