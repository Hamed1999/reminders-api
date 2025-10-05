import { Router } from "express";
import type CreateReminderDto from "../dtos/create-reminder.ts";
import Reminder from "../models/reminder.ts";
import type DeleteReminderDto from "../dtos/DeleteReminderDDto.ts";

const router = Router();

const reminders: Reminder[] = [];

router.get("/", (req, res) => {
  res.json(reminders);
})

router.post("/", (req, res) =>{
  const {title} = req.body as CreateReminderDto;
  const reminder = new Reminder(title);
  reminders.push(reminder);
  res.status(201).json(reminder);
});

router.delete("/:id", (req, res) =>{
  // const {id} = req.body as DeleteReminderDto;
  // const indexReminder = reminders.findIndex(item => item.id === id);
  // if (indexReminder >= 0)
  //   reminders.splice(indexReminder, 1);

  // const newReminders = reminders.filter(item => item.title !== title);
  // reminders.length = 0;
  // reminders.push(...newReminders);

  // res.status(200).json(reminders);
  
  const idStr = req.params.id;

  const id = parseInt(idStr, 10);
  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  const index = reminders.findIndex(item => item.id === id);
  if (index < 0) {
    return res.status(404).json({ error: `Reminder with id ${id} not found` });
  }

  reminders.splice(index, 1);
  return res.status(200).json({ message: "Deleted successfully", reminders });
});

export default router;