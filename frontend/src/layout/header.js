import React, {Component} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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
        <div >
        <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
          {value === 0 && <h1>Item One</h1>}
          {value === 1 && <h1>Item Two</h1>}
          {value === 2 && <h1>Item Three</h1>}
          </div>
        );
    }
}
    

export default Header;