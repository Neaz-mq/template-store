import LazyLoad from 'react-lazyload';
import { Link } from "react-router-dom";

const FreeTemplate = ({ item }) => {

    const { _id, category, image, price, type } = item;

    return (
        <article>
            <div>
                <div className="translate-y-10 opacity-0 templateScrollTrigger -mt-2"
                    style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }}>

                    <Link to={`/free/${_id}`}>
                        <div>
                            <div className="overflow-hidden">
                                <LazyLoad height={200} offset={100}>
                                    <img src={image} alt={category} />
                                </LazyLoad>
                            </div>
                        </div>

                        <div className="relative px-5 py-4 font-raleway">
                        <div className="flex flex-col pr-10 -ml-5 space-y-1">
                            <h3 className="font-bold break-words whitespace-normal leading-snug 3xl:text-[12px] 2xl:text-[11px] desktop:text-[11px] laptop:text-[10px] tablet:text-[10px] text-[10px]">
                                {type}
                            </h3>
                            <h3 className="font-medium break-words whitespace-normal leading-snug 3xl:text-[11px] 2xl:text-[10px] desktop:text-[10px] laptop:text-[10px] tablet:text-[9px] text-[9px]">
                                {category}
                            </h3>
                        </div>

                        <p className="absolute top-0 right-0 font-bold text-white px-3 py-1 bg-[#4864EC] 3xl:text-[14px] 2xl:text-[12px] desktop:text-[11px] laptop:text-[11px] tablet:text-[11px] text-[10px] mt-4">
                            {price}
                        </p>
                    </div>
                </Link>
                </div>
            </div>
        </article>
    );
};

export default FreeTemplate;
