import { useContext } from "react"
import Project from "./Project"
import { AuthContext } from "../../Firebase/AuthProvider";



const Projects = () => {
    const { projectList } = useContext(AuthContext);
console.log(projectList);

    if (!projectList || projectList.length === 0) {
        return (
            <div className="min-h-[50vh] flex justify-center items-center">
                <p className="text-center text-gray-500">Loading projects...</p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl md:my-20 my-10 md:mx-auto mx-5">
            <h1 className="md:text-5xl text-2xl text-center font-semibold pb-5">Projects </h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
                {projectList.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;

