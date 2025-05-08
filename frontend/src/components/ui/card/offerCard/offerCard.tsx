import OfferPrice from "../../offerPrice";
import info_bg from "../../../../assets/background_offer_info.jpg";
import { ComponentProps } from "react";

type TOfferCard = ComponentProps<"div"> & {
    cardType: number;
    img: string;
    offerType: string;
    endDate?: string;
    endTime?: string;
    discount: number;
    beforPrice?: string;
    afterPrice?: string;
    discountStyle: number;
};

type TOfferCardProps = ComponentProps<"div"> & {
    data: TOfferCard;
};

function OfferCard({ data, ...props }: TOfferCardProps) {
    const priceData = {
        afterPrice: data.afterPrice,
        beforPrice: data.beforPrice,
        discount: data.discount,
    };
    if (data.cardType === 1) {
        return (
            <>
                <div
                    className="w-[19rem] h-full text-white noto_sans"
                    style={{ backgroundImage: `url(${info_bg})` }}
                >
                    <img className="w-full h-[16rem]" src={data.img} alt="" />
                    <div className="flex h-[9rem] flex-col items-start justify-evenly ml-5 pb-4">
                        <h4 className="uppercase text-[0.95rem]">
                            {data.offerType}
                        </h4>
                        <p className="text-[0.8rem] font-light text-light">
                            Offer ends {data.endDate} @ {data.endTime}.
                        </p>
                        <OfferPrice
                            styleType={data.discountStyle}
                            data={priceData}
                        />
                    </div>
                </div>
            </>
        );
    } else if (data.cardType === 2) {
        return (
            <>
                <div className="w-full h-6/12 flex flex-col">
                    <div className="w-full h-9/12">
                        <img className="w-full h-full" src={data.img} alt="" />
                    </div>
                    <div className="w-full h-3/12 flex justify-between items-center bg-[#b3ddf5] px-1.5">
                        <h4 className="flex self-start">{data.offerType}</h4>
                        <OfferPrice
                            styleType={data.discountStyle}
                            data={priceData}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default OfferCard;
