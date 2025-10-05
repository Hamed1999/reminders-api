export default class Reminder {
  id: number;
  isComplete: boolean;
  title: string;
  static lastID: number = 0;
  constructor(title: string){
    this.id = Reminder.lastID++;
    this.isComplete = false;
    this.title = title;
  } 
};