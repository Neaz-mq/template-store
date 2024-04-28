import { Link } from "react-router-dom";

const FreeTemplate = ({ item }) => {
    const {_id, name, image, price, details } = item;

    return (

        <div>
            <div className="translate-y-10 opacity-0 templateScrollTrigger"
                style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }}>

           <Link to={`/free/${_id}`}>
                    <div className="max-w-[500px] rounded-[20px] overflow-hidden border group">
                        <div className="px-7 pt-7 bg-[#EDEEF7] overflow-hidden">

                            <img src={image} className="h-[280px] w-full object-cover group-hover:scale-105 duration-200" alt="Card Image" />
                        </div>
                    </div>
                    
                    <div className="flex bg-white items-center justify-between px-5 py-4">
                        <div>
                            <h3 className="font-bold">{name}</h3>
                            <p className="font-['__gellix_0bf537, __gellix_Fallback_0bf537'] text-xs font-medium">{details}</p>
                        </div>
                        <p className="font-bold text-[#2F1C6A] px-3 py-1 rounded-xl text-base bg-[#EDEEF7]">{price}</p>
                    </div>
                    </Link>
            </div>
        </div>
    );
};

export default FreeTemplate;