import { Request, Response } from "express";
import { UserModel } from "./mongooseConfig";

const usersCredentials = {
    name: "Iona",
    description: "kakao@gmail.com",
    id: "66033a7099277dd62cac5c7b",
};

// Using asyncHandler for error handling
async function getProjects(req: Request, res: Response) {
    const user = await UserModel.findById(usersCredentials.id);
    if (!user) {
        res.status(404).send("No projects not found");
    } else {
        res.json({ projects: user.projects });
    }
}

async function addProject(req: Request, res: Response) {
    const user = await UserModel.findById(usersCredentials.id);
    if (!user) {
        res.status(404).send("User not found");
    } else {
        user.projects.push(req.body);
        await user.save();
        res.json({ user });
    }
}

async function deleteProject(req: Request, res: Response) {
    const projectId = req.body.id; // Ensure this matches how you're sending the project ID
    console.log(projectId);
    await UserModel.updateOne(
        { _id: usersCredentials.id },
        { $pull: { projects: { _id: projectId } } }
    );
    res.json({ message: "Project deleted" });
}

export { getProjects, addProject, deleteProject };
