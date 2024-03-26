// Import the necessary modules
import { Router } from "express";
import { getProjects, addProject, deleteProject } from "./views";
import asyncHandler from "express-async-handler";

// Create a new router
const router = Router();

// Define a GET route for retrieving the projects
router.get("/get-projects", asyncHandler(getProjects));

// Define a POST route for adding a new project
router.post("/add-project", asyncHandler(addProject));

// Define a DELETE route for removing a project
router.delete("/delete-project", asyncHandler(deleteProject));

// Export the router
export default router;
