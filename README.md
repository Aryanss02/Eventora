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

### 🎨 Frontend (Client)
- React.js
- Vite
- Tailwind CSS

### ⚙️ Backend (Server)
- Node.js
- Express.js
- MongoDB
- Nodemailer (for emails)

---

## 📁 Project Structure
Eventora/
├── client/ # Frontend (React + Vite)
└── server/ # Backend (Node + Express)


---

## 🌐 API Endpoints (Example)

- `POST /api/auth/register` → Register user  
- `POST /api/auth/login` → Login user  
- `GET /api/events` → Get all events  
- `POST /api/bookings` → Book an event  

---

## ⚙️ Environment Variables

Create a `.env` file in the **server** folder and add:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
EMAIL_USER=your_email
EMAIL_PASS=your_email_password

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
git clone https://github.com/Aryanss02/eventora.git

cd eventora

### 2️⃣ Install Dependencies

#### Client
cd client
npm install

#### Server
cd server
npm install

---

## ▶️ Run the Project Locally

Open two terminals:

### Terminal 1 – Backend
cd server
npm run dev

### Terminal 2 – Frontend
cd client
npm run dev


---

## 🌍 Deployment

- Frontend: Vercel / Netlify  
- Backend: Render / Railway  

---

## 🧪 Demo Credentials

- **Admin Email:** admin@eventora.com  
- **User Email:** user@eventora.com  
- **Password:** password123  

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

If you like this project, don’t forget to ⭐ the repository!
