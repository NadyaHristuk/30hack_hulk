import React from 'react';
import shortid from 'shortid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


const ProjectCard = (props) => {
	const { name, categories, vacancies } = props.project;

	return (
		<Card classes={{root:'wrapper-project-card'}}>
			<CardContent>
				<h5>{name}</h5>
				<p>
					{categories.map(category => <span key={shortid.generate()}>{category}</span>)}
				</p>
				<h6>
					{vacancies.map(vacancy => <span key={shortid.generate()}>{vacancy}</span>)}
				</h6>
			</CardContent>
			<CardActions>
				<Button classes={{root:'button-about-project'}} size="small" variant="outlined">Learn More</Button>
			</CardActions>
		</Card>
	);
};

export default ProjectCard;