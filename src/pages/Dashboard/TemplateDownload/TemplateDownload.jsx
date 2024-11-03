import React from 'react';

const TemplateDownload = () => {
    return (
        <div>

            <h1 className='text-4xl'>Download Template</h1>
           
           <div className="overflow-x-auto w-full lg:w-full mt-16">

                <table className="hidden lg:table table-zebra">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Type</th>
                            <th>Price</th>
                           
                        </tr>
                    </thead>
                   
                </table>

               
            </div>
        </div>
    );
};

export default TemplateDownload;