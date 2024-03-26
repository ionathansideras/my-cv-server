// Import the necessary modules
import express from "express";
import cors from "cors";
import routes from "./routes";

// Create a new Express application
const app = express();

// Use CORS middleware to allow requests from the specified origin
app.use(
    cors({
        origin: "http://localhost:5173", // Specify the origin allowed to access the server
    })
);

// Use middleware to parse JSON request bodies
app.use(express.json());

// Use the routes defined in the routes module
app.use(routes);

// Start the server on port 3000 and log a message to the console
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
