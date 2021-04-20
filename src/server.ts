import express, { request, response } from "express"

const app = express()

app.get("/", (request, response) => {
  return response.send("Ola NLW 05")
})

app.post("/users", (request, response) => {
  return response.json({ message: 'user salvo com sucesso'});
})

app.listen(3333, () => console.log('Server running on port 3333'))