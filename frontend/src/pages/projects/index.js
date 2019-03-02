import React from 'react';
import shortid from 'shortid';
import ProjectCard from './project-card.js';

const projects = [
	{
		name: 'SuperProject1',
		stacks: ['PM', 'FE', 'Back', 'DB'],
		vacancies: ['PM', 'Back'], 
	},
	{
		name: 'SuperProject2',
		stacks: ['PM', 'Mobile', 'Back', 'UI/UX', 'DB'],
		vacancies: ['UI/UX', 'DB'], 
	},
	{
		name: 'SuperProject3',
		stacks: ['PM', 'FE', 'Back', 'DB'],
		vacancies: ['FE', 'Back'], 
	},
	{
		name: 'SuperProject3',
		stacks: ['PM', 'FE', 'Back', 'DB'],
		vacancies: ['FE', 'Back'], 
	},
	{
		name: 'SuperProject3',
		stacks: ['PM', 'FE', 'Back', 'DB'],
		vacancies: ['FE', 'Back'], 
	}
];

const Projects = () => {
	return (
		<div>
			<div className="main-content">
				{
					projects.map(project => <ProjectCard key={shortid.generate()} project={project} />)
				}
			</div>
			<div className="filters"></div>
		</div>
	);
};

export default Projects;