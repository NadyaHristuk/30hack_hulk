import React from 'react';
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
		name: 'BACK',
		categories: [ 'PHP', 'NodeJS', 'Python', '.NET' ],
	},
	{
		name: 'DB',
		categories: ['SQL', 'NoSQL'],
	},
	{
		name: 'MOBILE',
		categories: ['Swift', 'ReactNative', 'Android/Java', 'Objective-C'],
	},
	{
		name: 'DESIGN',
		categories: ['Designer', 'UI/UX'],
	},
	{
		name: 'QA',
		categories: ['Manual', 'Automation'],
	},
	{
		name: 'PM',
		categories: ['Project Manager', 'Business Analyst'],
	},
	{
		name: 'OTHER',
		categories: ['BigData', 'SEO', 'SMM', 'Marketing'],
	}
];


const FilterPanel = (props) => {
	const { checkedCategories, toggleCheckedCategories } = props;

	return (
		<div>
			{
				filters.map(filter => 
					<ExpansionPanel classes={{root:'filter-wrapper-stack'}} key={shortid.generate()} >
						<ExpansionPanelSummary>
							<p>{filter.name}</p>
						</ExpansionPanelSummary>
		        		<ExpansionPanelDetails classes={{root:'checkbox-wrapper'}}>
		        			{
		        				filter.categories.map(category => 
		        					<FormControlLabel 
		        						key={shortid.generate()}
		        						control={
		        							<Checkbox  
		        								checked={checkedCategories.includes(category)}
		        								onChange={(e) => {
		        									e.stopPropagation();
		        									toggleCheckedCategories(category, e);
		        								}}
		        								value={category}
		        							/>	
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

export default FilterPanel;