import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Search from "../Search/Search";
import PresentationTemplate from "../../Home/PresentationTemplate/PresentationTemplate";
import Package from "../../Home/Package/Package";
import TopTemp from "../../Home/TopTemp/TopTemp";

const Template = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []); 
    return (
        <div>
             <Helmet>
                <title>Prographr | Top Selling</title>
                <meta
                    name="description"
                    content="Find high-quality templates for your projects at the Template Store. Choose from a variety of options including agency templates, graphics templates, and more."
                />
            </Helmet>
            <Search />
            <TopTemp></TopTemp>
            <PresentationTemplate />
            <Package />
        </div>
    );
};

export default Template;