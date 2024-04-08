import { useEffect, useState } from "react";
import TemplateItem from "../../Shared/TemplateItem/TemplateItem";


const AgencyTemplate = () => {
    const [template, setTemplate] = useState([]);
    useEffect(() => {
        fetch('template.json')
            .then(res => res.json())
            .then(data => {
                const agencyItems = data.filter(item => item.category === 'agency' || item.category === 'ecommerce');
                setTemplate(agencyItems)
            })
    }, [])
    return (
        <div>
             <div className="layout lg:py-20 mt-24 lg:mx-20 ">
             <div className="flex items-center justify-between  mb-10">
                    <h2 className="lg:text-4xl text-xl lg:-mt-8 text-[#2F1C6A] ml-3 lg:ml-4 font-medium">Top Selling <strong>Graphics Templates</strong></h2>
                    <button className="btn mr-2 lg:mr-4 font-['__gellix_0bf537, __gellix_Fallback_0bf537'] text-[#47435d] bg-transparent capitalize hover:bg-primary/10 rounded-full font-semibold  gap-4 shadow-none p-3 pl-4 border-slate-700"><span className="-mt-1">Printing and Advertising</span> <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M277.375 85v259.704l119.702-119.702L427 256 256 427 85 256l29.924-29.922 119.701 118.626V85h42.75z"></path></svg></button>
                </div>
              <div className="grid grid-cols-1 mx-4 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6" data-aos="fade-right" data-aos-duration="700">
             
                {
                    template.map(item => <TemplateItem
                        key={item._id}
                        item={item}
                    ></TemplateItem>)
                }
            </div>
            </div>
            <div className="flex justify-center">
                        <div className="mt-16">
                            <button className="btn mb-32 lg:mb-0 font-['__gellix_0bf537, __gellix_Fallback_0bf537'] text-[#47435d] bg-transparent capitalize hover:bg-primary/10 rounded-full font-semibold  gap-4 shadow-none p-3 pl-4 border-slate-700"><span className="-mt-1">View more top selling items</span> <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M277.375 85v259.704l119.702-119.702L427 256 256 427 85 256l29.924-29.922 119.701 118.626V85h42.75z"></path></svg>
                            </button>
                        </div>
                    </div>
        </div>
       
    );
};

export default AgencyTemplate;