// Import the Request and Response types from the express module
import { Request, Response } from "express";

// Import the UserModel from the mongooseConfig module
import { UserModel } from "./mongooseConfig";

// Define a constant for the user's credentials for testing purposes
const usersCredentials = {
    name: "Iona",
    description: "kakao@gmail.com",
    id: "66033a7099277dd62cac5c7b",
};

// Define an asynchronous function to get projects
async function getProjects(req: Request, res: Response) {
    // Find the user by id in the database
    const user = await UserModel.findById(usersCredentials.id);
    // If the user is not found, send a 404 response
    if (!user) {
        res.status(404).send("No projects not found");
    } else {
        // If the user is found, send the user's projects as a response
        res.json({ projects: user.projects });
    }
}

// Define an asynchronous function to add a project
async function addProject(req: Request, res: Response) {
    // Find the user by id in the database
    const user = await UserModel.findById(usersCredentials.id);
    // If the user is not found, send a 404 response
    if (!user) {
        res.status(404).send("User not found");
    } else {
        // If the user is found, add the new project to the user's projects
        user.projects.push(req.body);
        // Save the updated user to the database
        await user.save();
        // Send the updated user as a response
        res.json({ user });
    }
}

// Define an asynchronous function to delete a project
async function deleteProject(req: Request, res: Response) {
    // Get the id of the project to delete from the request body
    const projectId = req.body.id;
    // Log the project id
    console.log(projectId);
    // Update the user in the database by pulling the project from the user's projects
    await UserModel.updateOne(
        { _id: usersCredentials.id },
        { $pull: { projects: { _id: projectId } } }
    );
    // Send a response indicating the project was deleted
    res.json({ message: "Project deleted" });
}

// Export the getProjects, addProject, and deleteProject functions
export { getProjects, addProject, deleteProject };
