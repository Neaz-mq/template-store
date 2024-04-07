import React from 'react';
import About from './About/About';
import { Helmet } from 'react-helmet-async';

const Company = () => {
    return (
        <div>
            <Helmet>
                <title>Template Store | Company</title>
            </Helmet>
            <About></About>
        </div>
    );
};

export default Company;