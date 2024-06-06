import About from './About/About';
import { Helmet } from 'react-helmet-async';

const Company = () => {
    return (

        <div>
            <Helmet>
                <title>Prographr | Company</title>
            </Helmet>

            <About></About>
            
        </div>

    );
};

export default Company;