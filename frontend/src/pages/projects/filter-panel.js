import React, { Component } from 'react';
import shortid from 'shortid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const filters = [
	{
		name: 'FE',
		categories: [ 'HTML/CSS', 'JS', 'React', 'Vue', 'Angular' ],
	},
	{
		name: 'DB',
		categories: ['SQL', 'NoSQL'],
	}
];


export default class FilterPanel extends Component {
	render() {
		return (
			<div>
				{
					filters.map(filter => 
						<ExpansionPanel key={shortid.generate()} >
							<ExpansionPanelSummary>
								<p>{filter.name}</p>
							</ExpansionPanelSummary>
			        		<ExpansionPanelDetails>
			        			{
			        				filter.categories.map(category => 
			        					<FormControlLabel 
			        						key={shortid.generate()}
			        						control={
			        							<Checkbox  />	
			        						}
			        						label={category} 
		        						/>
			        				)
			        			}
			        		</ExpansionPanelDetails>
		  				</ExpansionPanel>
					)
				}
			</div>
		);
	}
}