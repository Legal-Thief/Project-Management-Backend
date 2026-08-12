# Project Management Backend

A backend API built with **Node.js, Express.js, and MongoDB**.
This project provides a clean and scalable backend structure with separated routes, controllers, utilities, database configuration, and middleware.

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* CORS
* dotenv
* JavaScript (ES Modules)

## Project Structure

```text
src/
├── controllers/
│   └── healthcheck.controllers.js
├── db/
│   └── index.js
├── middlewares/
├── models/
├── routes/
│   └── healthcheck.routes.js
├── utils/
│   ├── api-error.js
│   ├── api-response.js
│   ├── async-handler.js
│   └── constants.js
├── validators/
├── app.js
└── index.js

package.json
package-lock.json
prettierignore
```

## Features

* Express server setup
* MongoDB connection using Mongoose
* Environment variable configuration
* CORS configuration
* JSON and URL-encoded request handling
* Static file serving
* Centralized API response structure
* Custom API error handling
* Async controller wrapper
* Health check API
* User role constants
* Task status constants

## API Endpoints

### Health Check

```http
GET /api/v1/healthcheck/
```

Example response:

```json
{
  "statusCode": 200,
  "data": {
    "message": "Server is running"
  },
  "message": "Success",
  "success": true
}
```

### Root Endpoint

```http
GET /
```

Response:

```text
Hello
```

## Environment Variables

Create a `.env` file in the project root:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
CORS_ORIGIN=http://localhost:5173
```

Do not commit your `.env` file to Git.

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project:

```bash
cd Project-Management-Backend
```

Install dependencies:

```bash
npm install
```

Create your `.env` file and add the required environment variables.

Start the server:

```bash
npm start
```

For development, if a development script is configured:

```bash
npm run dev
```

The server will run on:

```text
http://localhost:3000
```

## Architecture

The backend follows a basic layered structure:

```text
Client
  ↓
Routes
  ↓
Controllers
  ↓
Models / Database
  ↓
MongoDB
```

Utilities such as `ApiResponse`, `ApiError`, and `asyncHandler` are shared across different parts of the application.

## Current Status

The project currently contains the backend foundation, database connection, API utilities, constants, and health check endpoint.

More modules and APIs will be added as development continues.

## License

This project is for learning and development purposes.
