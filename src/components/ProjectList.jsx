import projects from '../projects.json';
import Card from '../components/ProjectCard.jsx'

///Component that displays the list of projects in a grid format.
const ProjectList = (count=-1) => (
    <div className="project-list">
        <section className="project-grid">
            {projects
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .slice(0, count > 0 ? count : projects.length)
                .map((project) => (
          <Card key={project.slug} {...project} />
        )
        )}
        </section>
    </div>
);
export default ProjectList;
