import Free from "../Free/Free";
import Graphics from "../Graphics/Graphics";
import Marketplace from "../Marketplace/Marketplace";
import Shop from "../Shop/Shop";
import { Helmet } from 'react-helmet-async';


const Templates = () => {
    return (
        <div>
             <Helmet>
                <title>Template Store | Template</title>
            </Helmet>
            <Shop></Shop>
            <Graphics></Graphics>
            <Free></Free>
            <Marketplace></Marketplace>
        </div>
    );
};

export default Templates;