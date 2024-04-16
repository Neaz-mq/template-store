import AgencyTemplate from "../../Home/AgencyTemplate/AgencyTemplate";
import GraphicsTemplate from "../../Home/GraphicsTemplate/GraphicsTemplate";
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
            <AgencyTemplate></AgencyTemplate>
            <GraphicsTemplate></GraphicsTemplate>
            <Marketplace></Marketplace>
        </div>
    );
};

export default Templates;