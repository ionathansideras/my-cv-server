import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.URI;
if (!uri) {
    throw new Error("URI is not defined");
}
// Define a schema
const Schema = mongoose.Schema;

mongoose
    .connect(uri)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

// Define a Schema for the projects (adjust this schema according to your project's needs)
const projectSchema = new Schema({
    // Example structure
    id: String,
    title: String,
    thumb: String,
    // Add other fields as needed
});

const userSchema = new Schema({
    name: String,
    description: String,
    projects: [projectSchema], // Embedding projects in user document
});

// Create a Model from the Schema
const UserModel = mongoose.model("canvas", userSchema, "users");

export { UserModel };
