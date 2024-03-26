type User = {
    name: string;
    email: string;
    password: string;
    projects: Project[];
};

type Project = {
    id: string;
    name: string;
    description: string;
};

export { User };
