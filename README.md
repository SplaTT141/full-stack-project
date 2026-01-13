# 💈 Barbershop

## 🌟 About

A full-stack barbershop management web application. Users can browse services and make reservations, while admins manage services and bookings through a protected admin panel.

## ▶️ Live Demo

👉 [https://kirpykla.netlify.app](https://kirpykla.netlify.app)

## 🔑 Demo Admin Access

To log in to the admin panel, you can use the following demo credentials:

- Username: **example**
- Password: **example**

## 🧩 Tech Stack

### Frontend

- React
- Bootstrap
- Netlify

### Backend

- Node.js
- Express.js
- REST API
- MySQL
- Railway

## 🔐 Authentication & Authorization

- Custom authentication using **randomly generated 128-character tokens**
- Tokens are stored in HTTP cookies
- Every protected request is validated
- Admin routes are accessible only to authenticated users
- Passwords are hashed using **bcrypt**

## 🧑‍💼 Access Levels

### Public

- Read information about the barbershop
- Browse available services
- Create reservations
- Register a new account

### Admin (Authenticated)

- Create, edit, and delete services
- View, edit and delete reservations
- Access own account information

## ✂️ Features

### Services

- Create, edit, and delete services
- Assign an image to each service from a predefined image list
- Filter services by name, price, and duration

### Reservations

- Create reservations
- Edit and delete reservations
- Filter reservations by customer details, service, date, and time

## 🛡️ Validation & Security

- Form validation on the frontend
- Request validation on the backend
- Prevents bypassing validation with tools like Postman
- CORS configured
- Environment variables managed with **dotenv**

## 🗄️ Database

- MySQL relational database
- Tables and relationships between:

  - Users
  - Services
  - Reservations

- Hosted on Railway

## 🌍 Environment Setup

Supports multiple environments:

- development
- production

Example environment file:

```bash
.env.example
```

## 📌 Notes

- Admin panel is protected and not publicly accessible
- Service images are limited to predefined server-side assets
- Built to simulate a real-world booking workflow

## ✍️ Author

GitHub: https://github.com/splatt141

## 📄 License

This project is created for educational purposes.
