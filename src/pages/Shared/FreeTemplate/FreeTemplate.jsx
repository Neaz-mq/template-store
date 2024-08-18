import LazyLoad from 'react-lazyload';
import { Link } from "react-router-dom";

const FreeTemplate = ({ item }) => {
    const { _id, name, image, price, details } = item;

    return (

        <article>

            <div>
                <div className="translate-y-10 opacity-0 templateScrollTrigger"
                    style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }}>

                    <Link to={`/free/${_id}`}>
                        <div>
                            <div className="overflow-hidden">
                            <LazyLoad height={200} offset={100}>
                            <img src={image} alt="Card Image" />
                            </LazyLoad>
                            </div>
                        </div>

                        <div className="flex  items-center justify-between px-5 py-4">
                            <div>
                                <h3 className="font-bold font-roboto 3xl:text-[14.5px] 2xl:text-[12px] desktop:text-[12px] laptop:text-[10px] text-[13px] -ml-5 3xl:-ml-5 2xl:-ml-4 desktop:-ml-4 laptop:-ml-4">{name}</h3>
                                <h3 className="text-xs font-medium font-roboto 3xl:-ml-5 2xl:-ml-4 desktop:-ml-4 laptop:-ml-4 -ml-5">{details}</h3>
                            </div>
                            <p className="font-bold font-roboto text-[#2F1C6A] px-3 py-1 rounded-md 3xl:text-[14px] 2xl:text-[12px] desktop:text-[10px] laptop:text-[8px] bg-[#EDEEF7] 3xl:ml-7 3xl:-mr-5 2xl:ml-7 2xl:-mr-5 desktop:ml-7 desktop:-mr-5 laptop:ml-7 laptop:-mr-5 -mr-5">$ {price}</p>
                        </div>
                    </Link>
                    
                </div>
            </div>
            
        </article>
    );
};

export default FreeTemplate;