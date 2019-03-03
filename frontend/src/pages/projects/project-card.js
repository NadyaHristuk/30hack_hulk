import React, {Component} from 'react';
import shortid from 'shortid';
import ProjectItem from './project-item';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';



class ProjectCard extends Component {
	state = {
        open: false,
      };
    
    handleClickOpen = () => {
        this.setState({ open: true });
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };
	render() {
	const { name, categories, vacancies } = this.props.project;

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
				<Button classes={{root:'button-about-project'}} size="small" variant="outlined" onClick={this.handleClickOpen}>Learn More</Button>
				<Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">Описание проекта</DialogTitle>
                    <DialogContent>
						<ProjectItem
						project={this.props.project}
						/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                        Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                        Enter
                        </Button>
                    </DialogActions>
            </Dialog>
			</CardActions>
		</Card>
	);
}
};

export default ProjectCard;