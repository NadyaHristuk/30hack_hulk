import React from 'react';
import MainHeader from './header-main-page';
import CustomerFields from './customer-fields';
import DeveloperFields from './developer-fields';

const MainPage = () => {
    return(
        <div>
        <MainHeader/>
        <div className="main-page-content">
            <CustomerFields/>
            <DeveloperFields/>
        </div>
        </div>
    );
};

export default MainPage;