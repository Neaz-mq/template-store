import { useEffect, useState } from "react";
import ExclusiveTemplate from "../../Shared/ExclusiveTemplate/ExclusiveTemplate";



const Exclusive = () => {
    const [templates, setTemplates] = useState([]);
    
    useEffect(() => {
        // Fetch templates from JSON
        fetch('http://localhost:5000/exclusive')
            .then(res => res.json())
            .then(data => {
                setTemplates(data);  // Set templates state
            })
            .catch(error => console.error("Error fetching templates:", error));  // Add error handling
    }, []);

    return (
        <div className="container mx-auto">
           
           <header className="layout lg:mt-2 py-12 mt-6 lg:mx-20">
           <div className="flex items-center justify-center  mb-10">
                    <h1 className="text-2xl tablet:text-3xl laptop:text-3xl 3xl:text-3xl 2xl:mt-12 2xl:text-3xl 3xl:mt-16 3xl:mb-10 laptop:mt-0 desktop:mt-10 tablet:mt-6 tablet:mb-6 mt-2 text-[#2F1C6A] text-center laptop:mb-4 font-roboto">
                        Exclusive <strong>design</strong>
                    </h1>
                    </div>
               
                </header>

           
            <main className="layout lg:-mt-20 py-12 -mt-16 lg:mx-20">
                <div className="grid grid-cols-1 mx-4 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 3xl:ml-40 3xl:mr-36 3xl:gap-x-4 3xl:gap-y-8 2xl:ml-40 2xl:mr-44 2xl:gap-x-4 2xl:gap-y-8" data-aos="fade-up" data-aos-duration="700">
                    {templates.map(item => (
                        <ExclusiveTemplate
                            key={item._id}
                            item={item}
                        />
                    ))}
        </div>
               
            </main>
        </div>
    );
};

export default Exclusive;

