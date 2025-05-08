import offer1 from "../../../../../assets/Offers/1.jpg";
import offer2 from "../../../../../assets/Offers/2.jpg";
import offer3 from "../../../../../assets/Offers/3_292x136.jpg";
import offer4 from "../../../../../assets/Offers/4_292x136.jpg";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import OfferCard from "../../../../../components/ui/card/offerCard";
import ArrowSlider from "../../../../../components/ui/arrowSlider";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

function Offers() {
    const dataList = [
        {
            cardType: 1,
            img: offer1,
            offerType: "weekend deal",
            endDate: "1 May",
            endTime: "10:00am",
            discount: 90,
            discountStyle: 1,
            beforPrice: "29.99",
            afterPrice: "2.99",
        },
        {
            cardType: 1,
            img: offer2,
            offerType: "weekend deal",
            endDate: "1 May",
            endTime: "10:00am",
            discount: 90,
            discountStyle: 2,
            beforPrice: "29.99",
            afterPrice: "2.99",
        },
        {
            cardType: 1,
            img: offer3,
            offerType: "today's deal!",
            discount: 28,
            discountStyle: 2,
            beforPrice: "27.98",
            afterPrice: "20.18",
        },
        {
            cardType: 1,
            img: offer4,
            offerType: "today's deal!",
            discount: 60,
            discountStyle: 2,
            beforPrice: "9.75",
            afterPrice: "3.90",
        },
    ];
    return (
        <>
            <div className="md:hidden mt-10  px-2 ">
                <h2 className="uppercase text-sm my-1 pl-[10px]">
                    Featured & Recommended
                </h2>
                <Swiper
                    modules={[Scrollbar]}
                    scrollbar={{
                        draggable: true,
                        hide: false,
                        dragSize: 25,
                    }}
                    slidesPerView={1.2}
                    spaceBetween={15}
                    grabCursor={true}
                    className="w-full custom-swiper-scrollbar"
                >
                    {dataList
                        .filter((data) => data.cardType === 1)
                        .slice(-4)
                        .map((data, idx) => (
                            <SwiperSlide className="shadow-[0px_0px_7px_0px_rgba(0,0,0,1)]">
                                <OfferCard
                                    data={data}
                                    key={idx}
                                    className="active_tab"
                                />
                            </SwiperSlide>
                        ))}
                </Swiper>
                {/* <div className="w-full flex items-center justify-center">
                <div className="flex w-full items-center justify-center">
                    <ArrowSlider>
                        <div className="flex w-full h-[25rem] gap-2.5">
                            {dataList
                                .filter((data) => data.cardType === 1)
                                .slice(-2)
                                .map((data, idx) => (
                                    <OfferCard data={data} key={idx} className="active_tab"/>
                                ))}

                            <div className="w-[19rem] h-full flex flex-col items-center justify-between gap-3">
                                {dataList
                                    .filter((data) => data.cardType === 2)
                                    .slice(-2)
                                    .map((data, idx) => (
                                        <OfferCard key={idx} data={data} />
                                    ))}
                            </div>
                        </div>
                    </ArrowSlider>
                </div>
            </div> */}
            </div>
        </>
    );
}

export default Offers;
