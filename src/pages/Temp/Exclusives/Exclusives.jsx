import { Helmet } from "react-helmet-async";
import PresentationTemplate from "../../Home/PresentationTemplate/PresentationTemplate";
// import Package from "../../Home/Package/Package";
import Filter from "../Filter/Filter";
import ExclusiveTemplates from "../../Home/ExclusiveTemplates/ExclusiveTemplates";

const Exclusives = () => {

    return (
        <div>
            <Helmet>
                <title>Prographr | Exclusive</title>
                <meta name="description" content="Find high-quality templates for your projects at the Template Store. Choose from a variety of options including agency templates, graphics templates, and more." />
            </Helmet>
            <Filter></Filter>
            <ExclusiveTemplates></ExclusiveTemplates>
            <PresentationTemplate></PresentationTemplate>
            {/* <Package></Package> */}
        </div>
    );
};

export default Exclusives;

