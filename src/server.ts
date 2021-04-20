import express, { request, response } from "express"

import "./database"

const app = express()

app.get("/", (request, response) => {
  return response.send("Ola NLW 05")
})

app.post("/", (request, response) => {
  return response.json({ message: 'user salvo com successo!'});
})

app.listen(3333, () => console.log('Server running on port 3333'))