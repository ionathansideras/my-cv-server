// Import the mongoose module to interact with MongoDB
import mongoose from "mongoose";

// Import the dotenv module to load environment variables from a .env file
import dotenv from "dotenv";

// Load environment variables from a .env file into process.env
dotenv.config();

// Get the URI of the MongoDB database from environment variables
const uri = process.env.URI as string;

// Define a schema using mongoose's Schema
const Schema = mongoose.Schema;

// Connect to the MongoDB database using the URI
mongoose
    .connect(uri)
    .then(() => console.log("MongoDB connected")) // Log a success message if the connection is successful
    .catch((err) => console.log(err)); // Log the error if the connection fails

// Define a Schema for the projects
const projectSchema = new Schema({
    id: String,
    title: String,
    thumb: String,
    // Add other fields as needed
});

// Define a Schema for the users, which includes an array of projects
const userSchema = new Schema({
    name: String,
    description: String,
    projects: [projectSchema], // Embedding projects in user document
});

// Create a Model from the user Schema. This model represents the "users" collection in the database.
const UserModel = mongoose.model("canvas", userSchema, "users");

// Export the UserModel so it can be used in other parts of the application
export { UserModel };
