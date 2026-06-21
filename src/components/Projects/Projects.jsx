import ProjectsContent from "./ProjectsContent";
import ProjectsCards from "./ProjectsCards";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-black px-8 py-32"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-2">

        {/* Left Side */}
        <ProjectsContent />

        {/* Right Side */}
        <ProjectsCards />

      </div>
    </section>
  );
}

export default Projects;