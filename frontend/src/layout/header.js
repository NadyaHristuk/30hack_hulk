import React, {Component} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Projects from '../pages/projects';

class Header extends Component {
    state = {
        value: 0,
    };
    
    handleChange = (event, value) => {
        this.setState({ value });
    };
    render () {
        const { value } = this.state;
        return (

        <div className = "headerWrapper">
        <Tabs classes={{root: 'tabsHeader'}} value={value} onChange={this.handleChange}>
            <Tab label="Проекты" />
            <Tab label="Вопросы и ответы" />
            <Tab label="FAQ" />
          </Tabs>
            {value === 0 && <Projects />}
            {value === 1 && <h1>Item Two</h1>}
            {value === 2 && <h1>Item Three</h1>}
            </div>

        );
    }
}   

export default Header;