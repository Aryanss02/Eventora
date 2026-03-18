# 🎉 Eventora – Event Booking Platform

Eventora is a full-stack web application that allows users to browse, book, and manage events seamlessly. It provides a smooth user experience with a modern frontend and a scalable backend.

---

## 🚀 Features

- 🔐 User Authentication (Login/Register)
- 📅 Browse Available Events
- 🎟️ Book Events Easily
- 📦 Manage Bookings
- 📧 Email Notifications (if configured)
- ⚡ Fast and Responsive UI

---

## 🛠️ Tech Stack

### Frontend (Client)

- React.js
- Vite
- CSS / Tailwind (if used)

### Backend (Server)

- Node.js
- Express.js
- MongoDB (Database)
- Nodemailer (for emails)

---

## 📁 Project Structure

```
Eventora/
 ├── client/    # Frontend (React)
 └── server/    # Backend (Node + Express)
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Aryanss02/Eventora.git
cd Eventora
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create a `.env` file in the `server` folder and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

Run the server:

```bash
npm run dev
```

---

### 3️⃣ Setup Frontend

Open a new terminal:

```bash
cd client
npm install
npm run dev
```

---

## 🌐 API Endpoints (Example)

- `POST /api/auth/register` → Register user
- `POST /api/auth/login` → Login user
- `GET /api/events` → Get all events
- `POST /api/bookings` → Book an event

---

## 📸 Screenshots

_(Add screenshots of your UI here for better presentation)_

---

## 🚀 Deployment

- Frontend: Vercel / Netlify
- Backend: Render / Railway

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork this repo and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Aryan Singh**
GitHub: https://github.com/Aryanss02

---

## ⭐ Show your support

If you like this project, give it a ⭐ on GitHub!
