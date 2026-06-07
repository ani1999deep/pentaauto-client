import ProjectStatus from '../components/ProjectStatus';

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center static-background p-4">
      <h1 className="text-4xl font-bold text-gold md:text-5xl">Our Projects</h1>
      <p className="mt-4 text-lg text-gold md:text-xl description">
        Discover our featured projects. More details below.
      </p>
      <div className="mt-6 grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-lg p-4 shadow">
          <h2 className="text-xl font-semibold text-gold">Project 1</h2>
          <p className="mt-2 text-turquoise description">Brief overview of Project 1. Innovative and impactful.</p>
          <ProjectStatus status="Student" />
        </div>
        <div className="rounded-lg p-4 shadow">
          <h2 className="text-xl font-semibold text-gold">Project 2</h2>
          <p className="mt-2 text-turquoise description">Brief overview of Project 2. Creative and efficient.</p>
          <ProjectStatus status="Teacher" />
        </div>
      </div>
    </main>
  );
}