import React, { Component } from 'react';
import shortid from 'shortid';
import FilterPanel from './filter-panel.js';
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
	},
	{
		name: 'SuperProject3',
		stacks: ['PM', 'FE', 'Back', 'DB'],
		vacancies: ['FE', 'Back'], 
	}
];

class Projects extends Component {
	state = {
		checkedStacks: [],
		checkedCategories: []
	};

	toggleCheckedCategories = (category) => {
		if (this.state.checkedCategories.includes(category)) {
			this.setState((prevState) => {
				const newCategories = prevState.checkedCategories.filter((i, j) => 
					prevState.checkedCategories.indexOf(category) !== j);
				return {checkedCategories: newCategories}
			});
		} else {
			this.setState((prevState) => {
				const newCategories = prevState.checkedCategories.concat(category);
				return {checkedCategories: newCategories}
			});
		}
	};

	render() {
		// const sortedProjects = projects.filter((item) => item.categories);

		return (
		<div className= "wrapper-project-page">
			<div className="main-content">
				{
					projects.map(project => <ProjectCard 
						key={shortid.generate()} 
						project={project} />)
				}
			</div>
			<div className="filters">
				<FilterPanel 
					checkedStacks={this.state.checkedStacks}		
					checkedCategories={this.state.checkedCategories}
					toggleCheckedCategories={this.toggleCheckedCategories} />
			</div>
		</div>
	);
	}
};

export default Projects;