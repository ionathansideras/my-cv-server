// Define a type for User
type User = {
    name: string;
    email: string;
    password: string;
    projects: Project[]; // Array of projects associated with the user
};

// Define a type for Project
type Project = {
    id: string;
    name: string;
    description: string;
};

// Export the User type so it can be used in other parts of the application
export { User };
