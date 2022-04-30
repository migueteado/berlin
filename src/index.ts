import express, { Request, Response } from "express"
import bot from "./bot"
import webhookRoutes from "./routes/webhook"

const app = express()

app.use(express.json())

// Routes
app.use("/webhooks", webhookRoutes)

bot.launch()

// Start server
const server = app.listen(3000, () =>
  console.log(`🚀 Server ready at: http://localhost:3000`)
)
