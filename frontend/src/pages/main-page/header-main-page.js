import React from 'react';

const MainHeader = () => {
    return(
        <div className="main-page-wrapper">
            <img className="logo-image" src={require('../../static/images/logo.png')} alt="Halk"/>
        </div>
    );
    
};

export default MainHeader;