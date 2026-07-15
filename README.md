# Student Authentication & Mock Test Management System

A secure REST API built using **Node.js**, **Express.js**, and **MongoDB** for student authentication and mock test management. The project implements JWT-based authentication, password hashing, student profile management, and CRUD operations for mock tests.

---

## Features

### Authentication
- Student Registration
- Student Login
- JWT Authentication
- Password Hashing using bcrypt

### Student Profile
- View Profile
- Update Profile

### Mock Test Management
- Create Mock Test
- Get All Mock Tests
- Get Mock Test By ID
- Update Mock Test
- Delete Mock Test

---

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- cors
- helmet
- morgan

---

## Project Structure

```
student-auth-system/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   ├── studentController.js
│   └── mockTestController.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── errorMiddleware.js
│
├── models/
│   ├── Student.js
│   └── MockTest.js
│
├── routes/
│   ├── authRoutes.js
│   ├── studentRoutes.js
│   └── mockTestRoutes.js
│
├── utils/
│   └── generateToken.js
│
├── Postman/
│   └── Student-Auth-System-Postman-Collection.json
│
├── .env.example
├── .gitignore
├── app.js
├── server.js
├── package.json
└── README.md
```

---

##  Installation

### 1. Clone the Repository


[git clone (https://github.com/simarjeetdua/student-auth-system.git)]
(https://github.com/simarjeetdua/student-auth-system.git)

### 2. Navigate to Project


cd student-auth-system
cd backend


### 3. Install Dependencies

```bash
npm install
```

### 4. Create Environment Variables

Create a `.env` file in the root directory.

Example:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

JWT_EXPIRE=7d
```

### 5. Run the Server

```bash
npm start
```

or

```bash
npm run dev
```

The server will run on:

```
http://localhost:5000
```

---

# API Endpoints

## Authentication

### Register Student

```
POST /api/auth/register
```

### Login Student

```
POST /api/auth/login
```

---

## Student

### Get Profile

```
GET /api/students/profile
```

### Update Profile

```
PUT /api/students/profile
```

---

## Mock Tests

### Create Mock Test

```
POST /api/mocktests
```

### Get All Mock Tests

```
GET /api/mocktests
```

### Get Mock Test By ID

```
GET /api/mocktests/:id
```

### Update Mock Test

```
PUT /api/mocktests/:id
```

### Delete Mock Test

```
DELETE /api/mocktests/:id
```

---

##  Authentication

Protected APIs require a JWT token.

Example Header

```
Authorization: Bearer <your_jwt_token>
```

---

## API Testing

A Postman collection is included in the project.

```
Postman/
└── Student-Auth-System-Postman-Collection.json
```

Import this collection into Postman to test all APIs.

---

##  Demo Video

A demo video showcasing the project has been submitted along with this repository.

---

##  Author

**Simarjeet Dua**

GitHub:
(https://github.com/simarjeetdua?tab=repositories)
