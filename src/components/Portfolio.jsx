import React from 'react';

const projects = [
  {
    title: "Transfer Money App",
    description: "Transfering money from one bank to the other.",
    image: "/path/to/project-one-image.jpg",
    link: "https://github.com/chizhinime/Transfer-Money-App"
  },
  {
    title: "My Portfolio",
    description: "this shows what i can do.",
    image: "/path/to/project-two-image.jpg",
    link: "https://github.com/chizhinime/portfolio"
  },
  {
    title: "Project Three",
    description: "This is a brief description of project three.",
    image: "/path/to/project-three-image.jpg",
    link: "https://github.com/chizhinime/assignment3"
  }
];

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1>My Portfolio</h1>
        <p>A selection of my recent work</p>
      </header>
      <section className="portfolio-content">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <img src={project.image} alt={project.title} className="portfolio-image" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="portfolio-link">View Project</a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Portfolio;
