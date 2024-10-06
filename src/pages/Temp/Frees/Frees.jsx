import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Search from "../Search/Search";
import FreeTemp from "../../Home/FreeTemp/FreeTemp";
import PresentationTemplate from "../../Home/PresentationTemplate/PresentationTemplate";
import Package from "../../Home/Package/Package";

const Frees = () => {   
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []); 

    return (
        <div>
            <Helmet>
                <title>Prographr | Free</title>
                <meta
                    name="description"
                    content="Find high-quality templates for your projects at the Template Store. Choose from a variety of options including agency templates, graphics templates, and more."
                />
            </Helmet>
            <Search />
            <FreeTemp />
            <PresentationTemplate />
            <Package />
        </div>
    );
};

export default Frees;
