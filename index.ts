import express from "express";
import remindersRouter from "./routers/reminders.ts";
import cors from "cors";

const app = express();

app.use(cors({
  origin: "http://localhost:3000",  // or "*" for testing
  methods: ["GET","POST","DELETE","PUT","OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use("/reminders", remindersRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8000, () => console.log("Server Started."));