import { ComponentProps } from "react";

type TOfferPrice = {
    afterPrice? : string,
    beforPrice? : string,
    discount : number
}

type TOfferPriceProps = ComponentProps<'div'> & {
    data : TOfferPrice,
    styleType : number
}

function OfferPrice({ styleType, data, }: TOfferPriceProps) {
    if (styleType === 1) {
        return (
            <>
                <div className="px-1 bg-[#4c6b22]">
                    <h5 className="text-[#b6e911] text-[1.5rem] mx-1 font-bold">
                        Up to - {data.discount} %
                    </h5>
                </div>
            </>
        );
    } else if (styleType === 2) {
        return (
            <>
                <div className="flex justify-center items-center h-10 w-36 bg-red-900">
                    <div className="h-full w-7/12 px-1 bg-[#4c6b22]">
                        <h5 className="text-[#b6e911] text-[1.8rem] font-bold text-center">
                            -{data.discount}%
                        </h5>
                    </div>
                    <div className="h-full w-5/12 bg-[#344654] flex flex-col items-center justify-center">
                        <span className="text-[0.7rem] text-[#607e96] line-through">{data.beforPrice}$</span>
                        <span className="text-[0.9rem] text-[#b6e911] -mt-1">{data.afterPrice}$</span>
                    </div>
                </div>
                
            </>
        );
    }
}

export default OfferPrice;
