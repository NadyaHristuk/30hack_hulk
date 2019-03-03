import React, { Component } from 'react';
import Header from './layout/header';
import MainPage from './pages/main-page';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                {/* <MainPage/> */}
            </div>
        );
    }
}

export default App;
