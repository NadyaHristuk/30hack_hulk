import React, { Component } from 'react';
import shortid from 'shortid';
import FilterPanel from './filter-panel.js';
import ProjectCard from './project-card.js';
import AddProjectButton from './add-project-button';

const projects = [
	{
		name: 'SuperProject1',
		id: 1,
		stacks: ['PM', 'FE', 'BACK', 'Designer'],
		description: 'Super Project For trainee',
		duration: '1 month',
		categories: ['HTML/CSS', 'React', 'NodeJS', 'UI/UX'],
		vacancies: ['PM', 'BACK'], 
		author: 'AlexOks',
		contacts:'author1@gmail.com',
	},
	{
		name: 'SuperProject2',
		id: 2,
		stacks: ['PM', 'MOBILE', 'BACK', 'DB', 'Designer', 'SEO'],
		description: 'Mega Super Project For trainee',
		duration: '2 month',
		categories: ['Vue', 'Python', 'SQL', 'UI/UX'],
		vacancies: ['PM', 'FE', 'BACK', 'SEO'], 
		author: 'SashaRoks',
		contacts:'author2@gmail.com',
	},
	{
		name: 'SuperProject3',
		id: 3,
		stacks: [ 'FE', 'BACK', 'DB'],
		description: 'Web Site for Sharing',
		duration: '1 month',
		categories: ['ReactNative', 'PHP', 'NoSQL'],
		vacancies: ['PM', 'MOBILE', 'BACK'], 
		author: 'AnastationHoks',
		contacts:'author3@gmail.com',
	},
	{
		name: 'SuperProject1',
		id: 1,
		stacks: ['PM', 'FE', 'BACK', 'Designer'],
		description: 'Super Project For trainee',
		duration: '1 month',
		categories: ['HTML/CSS', 'React', 'NodeJS', 'UI/UX'],
		vacancies: ['PM', 'BACK'], 
		author: 'AlexOks',
		contacts:'author1@gmail.com',
	},
	{
		name: 'SuperProject2',
		id: 2,
		stacks: ['PM', 'MOBILE', 'BACK', 'DB', 'Designer', 'SEO'],
		description: 'Mega Super Project For trainee',
		duration: '2 month',
		categories: ['Vue', 'Python', 'SQL', 'UI/UX'],
		vacancies: ['PM', 'FE', 'BACK', 'SEO'], 
		author: 'SashaRoks',
		contacts:'author2@gmail.com',
	},
	{
		name: 'SuperProject3',
		id: 3,
		stacks: [ 'FE', 'BACK', 'DB'],
		description: 'Web Site for Sharing',
		duration: '1 month',
		categories: ['ReactNative', 'PHP', 'NoSQL'],
		vacancies: ['PM', 'MOBILE', 'BACK'], 
		author: 'AnastationHoks',
		contacts:'author3@gmail.com',
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
				<AddProjectButton/>
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