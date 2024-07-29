import { Link } from "react-router-dom";

const FreeTemplate = ({ item }) => {
    const { _id, name, image, price, details } = item;

    return (

        <article>

            <div>
                <div className="translate-y-10 opacity-0 templateScrollTrigger"
                    style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }}>

                    <Link to={`/free/${_id}`}>
                        <div className="max-w-[500px] w-[360px] h-[360px] 3xl:w-[285px] 3xl:h-[285px] 2xl:w-[250px] 2xl:h-[250px] desktop:w-[240px] desktop:h-[240px] laptop:w-[190px] laptop:h-[190px] tablet:w-[330px] tablet:h-[330px] rounded-[20px] overflow-hidden border group">
                            <div className="px-7 py-7 bg-white overflow-hidden">

                            <img src={image} className="w-[260px] h-[310px] 3xl:w-[180px] 3xl:h-[230px] 2xl:w-[180px] 2xl:h-[210px] desktop:w-[150px] desktop:h-[190px] laptop:w-[140px] laptop:h-[160px] tablet:w-[240px] tablet:h-[280px]  object-cover group-hover:scale-105 duration-200 3xl:ml-6 2xl:ml-2 desktop:ml-4 tablet:ml-4 2xl:-mt-2 laptop:-mt-2 3xl:-mt-0 ml-5" alt="Card Image" />
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