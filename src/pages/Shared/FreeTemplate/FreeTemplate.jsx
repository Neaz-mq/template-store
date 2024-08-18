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

                        <div className="flex  items-center justify-between px-5 py-4 template-details-container">
                            <div>
                                <h3 className="font-bold template-title font-roboto">{name}</h3>
                                <p className="font-['__gellix_0bf537, __gellix_Fallback_0bf537'] text-xs font-medium template-description">{details}</p>
                            </div>
                            <p className="font-bold text-[#2F1C6A] px-3 py-1 rounded-xl text-base bg-[#EDEEF7] template-price">{price}</p>
                        </div>
                    </Link>
                    
                </div>
            </div>
            
        </article>
    );
};

export default FreeTemplate;