import React, { Component } from 'react';
import shortid from 'shortid';
import FilterPanel from './filter-panel.js';
import ProjectCard from './project-card.js';

const projects = [
	{
		name: 'SuperProject1',
		categories: ['HTML/CSS', 'React', 'NodeJS', 'NoSQL'],
		vacancies: ['PM', 'Back'], 
	},
	{
		name: 'SuperProject2',
		categories: ['ReactNative', 'UI/UX', 'SQL'],
		vacancies: ['UI/UX', 'DB'], 
	},
	{
		name: 'SuperProject3',
		categories: ['HTML/CSS', 'React', 'NoSQL'],
		vacancies: ['FE', 'Back'], 
	},
	{
		name: 'SuperProject3',
		categories: ['HTML/CSS', 'React', 'NodeJS'],
		vacancies: ['FE', 'Back'], 
	},
	{
		name: 'SuperProject3',
		categories: ['React', 'NodeJS', 'NoSQL'],
		vacancies: ['FE', 'Back'], 
	},
	{
		name: 'SuperProject3',
		categories: ['HTML/CSS', 'NoSQL'],
		vacancies: ['FE', 'Back'], 
	}
];

class Projects extends Component {
	state = {
		checkedStacks: [],
		checkedCategories: []
	};

	toggleCheckedCategories = (category, e) => {
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
		const sortedProjects = this.state.checkedCategories.length ? 
			projects.filter((item) => 
				this.state.checkedCategories.some(category => 
					item.categories.includes(category)
				)
		) : projects;

		return (
			<div className= "wrapper-project-page">
				<div className="main-content">
					{
						sortedProjects.map(project => <ProjectCard 
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