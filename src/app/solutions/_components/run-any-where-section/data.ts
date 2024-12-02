export const integrations = [
  {
    name: "deploy nim",
    description:
      "Deploy NIM for your model with a single command. You can also easily run NIM with fine tuned-models.",
    code: `docker run nvcr.io/nim/publisher_name/model_name`,
  },
  {
    name: "run inference",
    description:
      "Get NIM up and running with the optimal runtime engine based on your NVIDIA-accelerated infrastructure.",
    code: `curl -X 'POST' \
      'http://0.0.0.0:8000/v1/completions' \
      -H 'accept: application/json' \
      -H 'Content-Type: application/json' \
      -d '{
      "model" : "model_name",
      "prompt" : "Once upon a time",
      "max_tokens" : 64
     }'`,
  },
  {
    name: "build",
    description:
      "Developers can integrate self-hosted NIM endpoints in just a few lines of code.",
    code: `import openai
   client = openai.OpenAI(
    base_url = "YOUR_LOCAL_ENDPOINT_URL",
    api_key="YOUR_LOCAL_API_KEY"
   )
   chat_completion = client.chat.completions.create(
    model="model_name",
    messages=[{"role" : "user" , "content" : "Write me a love song" }],
    temperature=0.7
   ) `,
  },
];
