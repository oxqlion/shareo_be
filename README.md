# CRUD API with Express.js and MongoDB Atlas

This repository contains a simple CRUD API built with Express.js and MongoDB Atlas. The API provides endpoints for creating, reading, updating, and deleting resources.

## Features
- Built using **Express.js** for the server.
- Connects to **MongoDB Atlas** for database operations.
- Follows a clean and modular project structure.

---

## Prerequisites
Ensure you have the following installed:
1. **Node.js** (v14 or later) - [Download Node.js](https://nodejs.org/)
2. **npm** (comes with Node.js) or **yarn**
3. A **MongoDB Atlas account** with a database set up.

---

## Installation
1. **Clone the repository:**
   ```bash
   [git clone https://github.com/oxqlion/shareo_be.git]
   cd <repository-name>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     PORT=5050
     MONGO_URI=mongodb+srv://admin:asdf1234@shareo-v1.zrjo1.mongodb.net/?retryWrites=true&w=majority&appName=Shareo-v1
     ```

---

## Running the Project

1. **Start the server:**
   ```bash
   npm run dev
   ```

2. **Verify the server is running:**
   Open your browser or a tool like Postman and navigate to:
   ```
   http://localhost:PORT
   ```

---

## API Endpoints

| Method | Endpoint        | Description           |
|--------|-----------------|-----------------------|
| GET    | `/api/`             | Test the server.      |

---

## Development Scripts

| Command        | Description                                      |
|----------------|--------------------------------------------------|
| `npm start`    | Starts the server in production mode.           |
| `npm run dev`  | Starts the server in development mode with nodemon. |

---

## Additional Notes

- Make sure your MongoDB Atlas cluster is accessible from your local environment.
- If you encounter any issues, check the error logs or raise an issue in the repository.

---

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

---

## License
This project is licensed under the [MIT License](LICENSE).

