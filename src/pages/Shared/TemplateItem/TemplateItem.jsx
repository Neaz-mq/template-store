import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';

const TemplateItem = ({ item }) => {

    const { _id, category, image, price, type } = item;

    return (
        <article>
            <div className="translate-y-10 opacity-0 templateScrollTrigger"
                style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }}>
                <Link to={`/template/${_id}`}>
                    <div>
                        <div className="overflow-hidden">
                            <LazyLoad height={200} offset={100}>
                                <img src={image} alt={category} />
                            </LazyLoad>
                        </div>
                    </div>

                    <div className="flex items-center justify-between px-5 py-4 font-raleway">
                        <div>
                            <h3 className="font-bold font-raleway 3xl:text-[14.5px] 2xl:text-[12px] desktop:text-[12px] laptop:text-[10px] text-[13px] -ml-5 3xl:-ml-5 2xl:-ml-4 desktop:-ml-4 laptop:-ml-4">{type}</h3>
                            <h3 className="text-xs font-medium font-raleway 3xl:-ml-5 2xl:-ml-4 desktop:-ml-4 laptop:-ml-4 -ml-5">{category}</h3>
                        </div>
                        <p className="font-bold font-raleway text-white px-3 py-1  3xl:text-[14px] 2xl:text-[12px] desktop:text-[10px] laptop:text-[8px] bg-[#4864EC] 3xl:ml-7 3xl:-mr-5 2xl:ml-7 2xl:-mr-5 ml-7 desktop:ml-7 desktop:-mr-5 laptop:ml-7 laptop:-mr-5 -mr-5">${price}</p>
                    </div>
                </Link>
            </div>
        </article>
    );
};

export default TemplateItem;
