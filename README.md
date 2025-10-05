

# 🗂 Reminders API (Server-side)

This repository contains the **server-side API** for the **Reminders App** project, built during the [**“The Ultimate TypeScript”**](https://codewithmosh.com/p/the-ultimate-typescript) course by *Mosh Hamedani*.

The API provides endpoints to **create, read, and delete reminders** for the client-side React application.

---

## 🔹 Project Overview

The Reminders API is a lightweight **Express + TypeScript** server that supports the following functionalities:

* **GET /reminders** – Fetch all reminders
* **POST /reminders** – Create a new reminder
* **DELETE /reminders/:id** – Delete a reminder by ID

Key features:

* Fully typed using **TypeScript**
* In-memory storage of reminders for simplicity
* CORS enabled to allow requests from `localhost:3000`
* Modular routing using **Express Router**

This API is designed to work seamlessly with the [Reminders App client-side project](https://github.com/Hamed1999/reminders-app).

---

## 🏗 Folder Structure

```
reminders-api/
│
├── dtos/
│   ├── create-reminder.ts
│   └── DeleteReminderDto.ts
│
├── models/
│   └── reminder.ts
│
├── routers/
│   └── reminders.ts
│
├── index.ts
├── package.json
└── tsconfig.json
```

* **dtos/** – TypeScript interfaces for data transfer objects
* **models/** – TypeScript classes for domain models
* **routers/** – Express router modules for endpoints
* **index.ts** – Main server entry point

---

## ⚡ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/Hamed1999/reminders-api.git
cd reminders-api
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The server runs on `http://localhost:8000`.

---

## 🛠 Scripts

### `npm run dev`

Runs the server with **ts-node** and auto-reload using **nodemon**.

### `npm start`

Compiles TypeScript to JavaScript and runs the server using Node.

---

## 📦 Example API Usage

### Get all reminders

```http
GET http://localhost:8000/reminders
```

### Add a new reminder

```http
POST http://localhost:8000/reminders
Content-Type: application/json

{
  "title": "Buy groceries"
}
```

### Delete a reminder

```http
DELETE http://localhost:8000/reminders/1
```

Response:

```json
{
  "message": "Deleted successfully",
  "reminders": [ /* remaining reminders */ ]
}
```

---

## 🔗 Technologies Used

* **Node.js** – JavaScript runtime
* **Express** – Web framework for routing and API handling
* **TypeScript** – Type-safe development
* **Nodemon** – Auto-reloading during development
* **CORS** – Cross-origin requests support

---

## 👤 Author

**Hamed Salmanizadegan**
📍 [GitHub Profile](https://github.com/Hamed1999)
Building **full-stack TypeScript projects** using React and Node.js.


