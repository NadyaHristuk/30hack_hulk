import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';


class AddProjectButton extends Component {
    state = {
        open: false,
        data: {
            name: '',
            stacks: '',
            description: '',
            duration: '',
            contacts: '',
        }
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = (event) => {
        const id = event.currentTarget.id;
        this.setState({ open: false });
        if (id === 'Add') {
            console.log(this.state.name);
            this.props.eventAddProject(this.state.data) 
        }
    }
//     let jasper = Object.assign({}, this.state.jasper);    //creating copy of object
// jasper.name = 'someothername';                        //updating value
// this.setState({jasper});
    handleChange = name => event => {
        var data = Object.assign({}, this.state.data);
        data[name] = event.target.value;
        this.setState({data});
        console.log(this.state);
    };
  

    render() {
        return (
            <div className="add-button-wrapper">
                <Button variant="outlined" onClick={this.handleClickOpen}>
                    Add project
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">Создать новый проект</DialogTitle>
                    <DialogContent>
                        <form noValidate autoComplete="off">
                            <TextField
                                id="project-name"
                                label="Название проекта"
                                value={this.state.data.name}
                                onChange={this.handleChange('name')}
                                margin="normal"
                            />
                            <TextField
                                id="list-of-stacks"
                                label="Stacks"
                                value={this.state.stacks}
                                onChange={this.handleChange('stacks')}
                                margin="normal"
                            />
                            <TextField
                                id="project-description"
                                label="Описание проекта"
                                value={this.state.description}
                                onChange={this.handleChange('description')}
                                margin="normal"
                            />
                            <TextField
                                id="project-duration"
                                label="Длительность проекта"
                                value={this.state.duration}
                                onChange={this.handleChange('duration')}
                                margin="normal"
                            />
                            <TextField
                                id="project-contacts"
                                label="Контактые данные"
                                value={this.state.contacts}
                                onChange={this.handleChange('contacts')}
                                margin="normal"
                            />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} id="Cancel" color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose} id="Add" color="primary" autoFocus>
                            Add project
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }

};

export default AddProjectButton;