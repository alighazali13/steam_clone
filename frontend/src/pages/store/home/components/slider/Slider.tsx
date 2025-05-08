import bgImage from "../../../../../assets/cluster_bg.png";
import lou2_slide from "../../../../../assets/Games/LOU2/slide.jpg";
import Jedi1 from "../../../../../assets/Games/Jedi/Jedi1.jpg";
import lou2_1 from "../../../../../assets/Games/LOU2/1.jpg";
import lou2_2 from "../../../../../assets/Games/LOU2/2.jpg";
import lou2_3 from "../../../../../assets/Games/LOU2/3.jpg";
import lou2_4 from "../../../../../assets/Games/LOU2/4.jpg";
import info_bg from "../../../../../assets/info-bg.jpg";
import { TbBrandWindowsFilled } from "react-icons/tb";
import ArrowSlider from "../../../../../components/ui/arrowSlider";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

const data = [
    {
        afterPrice: "9.98",
        beforPrice: "13.99",
        discount: 80,
    },
    {
        afterPrice: "13",
        beforPrice: "14",
        discount: 15,
    },
];

function Slider() {
    return (
        <>
            <div
                style={{ background: `url(${bgImage}) no-repeat center` ,}}
                className=" pb-[20px]"
            >
                <div className="hidden md:flex w-full  items-center justify-center">
                    <div className="flex w-full items-center justify-center">
                        <ArrowSlider>
                            <div className="flex w-full">
                                <div>
                                    <img src={lou2_slide} alt="" />
                                </div>
                                <div
                                    className="flex flex-col w-[21.5rem] text-white noto_sans"
                                    style={{
                                        backgroundImage: `url(${info_bg})`,
                                    }}
                                >
                                    <h2 className="text-2xl ml-4 py-2">
                                        The Last of Us™ Part II Remastered
                                    </h2>
                                    <div className="flex flex-wrap justify-start gap-3">
                                        <img
                                            className="w-40 h-20"
                                            src={lou2_1}
                                            alt=""
                                        />
                                        <img
                                            className="w-40 h-20"
                                            src={lou2_2}
                                            alt=""
                                        />
                                        <img
                                            className="w-40 h-20"
                                            src={lou2_3}
                                            alt=""
                                        />
                                        <img
                                            className="w-40 h-20"
                                            src={lou2_4}
                                            alt=""
                                        />
                                    </div>
                                    <h3 className="ml-4 mt-2 text-xl">
                                        Now Available
                                    </h3>
                                    <h5 className="text-[10px] ml-4 w-15 h-5 bg-[#394148] rounded flex items-center justify-center">
                                        Top Seller
                                    </h5>
                                    <div className=" w-12/12 h-full flex items-end">
                                        <div className="flex justify-between h-6 w-full ml-4">
                                            <span className="text-[10px]">
                                                49.99 $
                                            </span>
                                            <TbBrandWindowsFilled className="mr-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ArrowSlider>
                    </div>
                </div>
                <div className="md:hidden mt-10  px-2 ">
                    <h2 className="uppercase text-sm my-1 pl-[10px]">
                        Featured & Recommended
                    </h2>
                    <Swiper
                        modules={[Scrollbar]}
                        scrollbar={{
                            draggable: true,
                            hide: false,
                            dragSize: 25
                        }}
                        slidesPerView={1.2}
                        spaceBetween={10}
                        grabCursor={true}
                        
                        className="w-full custom-swiper-scrollbar"
                    >
                        <SwiperSlide className="shadow-[0px_0px_7px_0px_rgba(0,0,0,1)]">
                            <div className="w-full h-8/12">
                                <img
                                    className="w-full h-12/12 "
                                    src={lou2_slide}
                                    alt="STAR WARS Jedi: Survivor™"
                                />
                            </div>
                            <div
                                className="p-2 h-4/12 flex flex-col gap-2"
                                style={{
                                    background:
                                        "linear-gradient(180deg, #0A141D 0%, rgba(10, 20, 29, 0.2) 100%)",
                                }}
                            >
                                <strong>
                                    The Last of Us™ Part II Remastered
                                </strong>
                                <div className="flex justify-center items-center h-5 w-32">
                                    <div className="h-full w-4/12 px-1 bg-[#4c6b22]">
                                        <h5 className="text-[#b6e911] text-[0.9rem] font-bold text-center">
                                            -{data[0].discount}%
                                        </h5>
                                    </div>
                                    <div className="h-full w-8/12 bg-[#344654] flex items-center justify-around">
                                        <span className="text-[0.75rem] text-[#607e96] line-through">
                                            {data[0].beforPrice}$
                                        </span>
                                        <span className="text-[0.75rem] text-[#b6e911]">
                                            {data[0].afterPrice}$
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="shadow-[0px_0px_7px_0px_rgba(0,0,0,1)]">
                            <div className="w-full h-8/12">
                                <img
                                    className="w-full h-12/12 "
                                    src={Jedi1}
                                    alt="STAR WARS Jedi: Survivor™"
                                />
                            </div>
                            <div
                                className="p-2 h-4/12 flex flex-col gap-2"
                                style={{
                                    background:
                                        "linear-gradient(180deg, #0A141D 0%, rgba(10, 20, 29, 0.2) 100%)",
                                }}
                            >
                                <strong>STAR WARS Jedi: Survivor™</strong>
                                <div className="flex justify-center items-center h-5 w-32">
                                    <div className="h-full w-4/12 px-1 bg-[#4c6b22]">
                                        <h5 className="text-[#b6e911] text-[0.9rem] font-bold text-center">
                                            -{data[0].discount}%
                                        </h5>
                                    </div>
                                    <div className="h-full w-8/12 bg-[#344654] flex items-center justify-around">
                                        <span className="text-[0.75rem] text-[#607e96] line-through">
                                            {data[0].beforPrice}$
                                        </span>
                                        <span className="text-[0.75rem] text-[#b6e911]">
                                            {data[0].afterPrice}$
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="shadow-[0px_0px_7px_0px_rgba(0,0,0,1)]">
                            <div className="w-full h-8/12">
                                <img
                                    className="w-full h-12/12 "
                                    src={lou2_slide}
                                    alt="STAR WARS Jedi: Survivor™"
                                />
                            </div>
                            <div
                                className="p-2 h-4/12 flex flex-col gap-2"
                                style={{
                                    background:
                                        "linear-gradient(180deg, #0A141D 0%, rgba(10, 20, 29, 0.2) 100%)",
                                }}
                            >
                                <strong>
                                    The Last of Us™ Part II Remastered
                                </strong>
                                <div className="flex justify-center items-center h-5 w-32">
                                    <div className="h-full w-4/12 px-1 bg-[#4c6b22]">
                                        <h5 className="text-[#b6e911] text-[0.9rem] font-bold text-center">
                                            -{data[0].discount}%
                                        </h5>
                                    </div>
                                    <div className="h-full w-8/12 bg-[#344654] flex items-center justify-around">
                                        <span className="text-[0.75rem] text-[#607e96] line-through">
                                            {data[0].beforPrice}$
                                        </span>
                                        <span className="text-[0.75rem] text-[#b6e911]">
                                            {data[0].afterPrice}$
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="shadow-[0px_0px_7px_0px_rgba(0,0,0,1)]">
                            <div className="w-full h-8/12">
                                <img
                                    className="w-full h-12/12 "
                                    src={Jedi1}
                                    alt="STAR WARS Jedi: Survivor™"
                                />
                            </div>
                            <div
                                className="p-2 h-4/12 flex flex-col gap-2"
                                style={{
                                    background:
                                        "linear-gradient(180deg, #0A141D 0%, rgba(10, 20, 29, 0.2) 100%)",
                                }}
                            >
                                <strong>STAR WARS Jedi: Survivor™</strong>
                                <div className="flex justify-center items-center h-5 w-32">
                                    <div className="h-full w-4/12 px-1 bg-[#4c6b22]">
                                        <h5 className="text-[#b6e911] text-[0.9rem] font-bold text-center">
                                            -{data[0].discount}%
                                        </h5>
                                    </div>
                                    <div className="h-full w-8/12 bg-[#344654] flex items-center justify-around">
                                        <span className="text-[0.75rem] text-[#607e96] line-through">
                                            {data[0].beforPrice}$
                                        </span>
                                        <span className="text-[0.75rem] text-[#b6e911]">
                                            {data[0].afterPrice}$
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="shadow-[0px_0px_7px_0px_rgba(0,0,0,1)]">
                            <div className="w-full h-8/12">
                                <img
                                    className="w-full h-12/12 "
                                    src={lou2_slide}
                                    alt="STAR WARS Jedi: Survivor™"
                                />
                            </div>
                            <div
                                className="p-2 h-4/12 flex flex-col gap-2"
                                style={{
                                    background:
                                        "linear-gradient(180deg, #0A141D 0%, rgba(10, 20, 29, 0.2) 100%)",
                                }}
                            >
                                <strong>
                                    The Last of Us™ Part II Remastered
                                </strong>
                                <div className="flex justify-center items-center h-5 w-32">
                                    <div className="h-full w-4/12 px-1 bg-[#4c6b22]">
                                        <h5 className="text-[#b6e911] text-[0.9rem] font-bold text-center">
                                            -{data[0].discount}%
                                        </h5>
                                    </div>
                                    <div className="h-full w-8/12 bg-[#344654] flex items-center justify-around">
                                        <span className="text-[0.75rem] text-[#607e96] line-through">
                                            {data[0].beforPrice}$
                                        </span>
                                        <span className="text-[0.75rem] text-[#b6e911]">
                                            {data[0].afterPrice}$
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="shadow-[0px_0px_7px_0px_rgba(0,0,0,1)]">
                            <div className="w-full h-8/12">
                                <img
                                    className="w-full h-12/12 "
                                    src={Jedi1}
                                    alt="STAR WARS Jedi: Survivor™"
                                />
                            </div>
                            <div
                                className="p-2 h-4/12 flex flex-col gap-2"
                                style={{
                                    background:
                                        "linear-gradient(180deg, #0A141D 0%, rgba(10, 20, 29, 0.2) 100%)",
                                }}
                            >
                                <strong>STAR WARS Jedi: Survivor™</strong>
                                <div className="flex justify-center items-center h-5 w-32">
                                    <div className="h-full w-4/12 px-1 bg-[#4c6b22]">
                                        <h5 className="text-[#b6e911] text-[0.9rem] font-bold text-center">
                                            -{data[0].discount}%
                                        </h5>
                                    </div>
                                    <div className="h-full w-8/12 bg-[#344654] flex items-center justify-around">
                                        <span className="text-[0.75rem] text-[#607e96] line-through">
                                            {data[0].beforPrice}$
                                        </span>
                                        <span className="text-[0.75rem] text-[#b6e911]">
                                            {data[0].afterPrice}$
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="shadow-[0px_0px_7px_0px_rgba(0,0,0,1)]">
                            <div className="w-full h-8/12">
                                <img
                                    className="w-full h-12/12 "
                                    src={lou2_slide}
                                    alt="STAR WARS Jedi: Survivor™"
                                />
                            </div>
                            <div
                                className="p-2 h-4/12 flex flex-col gap-2"
                                style={{
                                    background:
                                        "linear-gradient(180deg, #0A141D 0%, rgba(10, 20, 29, 0.2) 100%)",
                                }}
                            >
                                <strong>
                                    The Last of Us™ Part II Remastered
                                </strong>
                                <div className="flex justify-center items-center h-5 w-32">
                                    <div className="h-full w-4/12 px-1 bg-[#4c6b22]">
                                        <h5 className="text-[#b6e911] text-[0.9rem] font-bold text-center">
                                            -{data[0].discount}%
                                        </h5>
                                    </div>
                                    <div className="h-full w-8/12 bg-[#344654] flex items-center justify-around">
                                        <span className="text-[0.75rem] text-[#607e96] line-through">
                                            {data[0].beforPrice}$
                                        </span>
                                        <span className="text-[0.75rem] text-[#b6e911]">
                                            {data[0].afterPrice}$
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="shadow-[0px_0px_7px_0px_rgba(0,0,0,1)]">
                            <div className="w-full h-8/12">
                                <img
                                    className="w-full h-12/12 "
                                    src={Jedi1}
                                    alt="STAR WARS Jedi: Survivor™"
                                />
                            </div>
                            <div
                                className="p-2 h-4/12 flex flex-col gap-2"
                                style={{
                                    background:
                                        "linear-gradient(180deg, #0A141D 0%, rgba(10, 20, 29, 0.2) 100%)",
                                }}
                            >
                                <strong>STAR WARS Jedi: Survivor™</strong>
                                <div className="flex justify-center items-center h-5 w-32">
                                    <div className="h-full w-4/12 px-1 bg-[#4c6b22]">
                                        <h5 className="text-[#b6e911] text-[0.9rem] font-bold text-center">
                                            -{data[0].discount}%
                                        </h5>
                                    </div>
                                    <div className="h-full w-8/12 bg-[#344654] flex items-center justify-around">
                                        <span className="text-[0.75rem] text-[#607e96] line-through">
                                            {data[0].beforPrice}$
                                        </span>
                                        <span className="text-[0.75rem] text-[#b6e911]">
                                            {data[0].afterPrice}$
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="shadow-[0px_0px_7px_0px_rgba(0,0,0,1)]">
                            <div className="w-full h-8/12">
                                <img
                                    className="w-full h-12/12 "
                                    src={lou2_slide}
                                    alt="STAR WARS Jedi: Survivor™"
                                />
                            </div>
                            <div
                                className="p-2 h-4/12 flex flex-col gap-2"
                                style={{
                                    background:
                                        "linear-gradient(180deg, #0A141D 0%, rgba(10, 20, 29, 0.2) 100%)",
                                }}
                            >
                                <strong>
                                    The Last of Us™ Part II Remastered
                                </strong>
                                <div className="flex justify-center items-center h-5 w-32">
                                    <div className="h-full w-4/12 px-1 bg-[#4c6b22]">
                                        <h5 className="text-[#b6e911] text-[0.9rem] font-bold text-center">
                                            -{data[0].discount}%
                                        </h5>
                                    </div>
                                    <div className="h-full w-8/12 bg-[#344654] flex items-center justify-around">
                                        <span className="text-[0.75rem] text-[#607e96] line-through">
                                            {data[0].beforPrice}$
                                        </span>
                                        <span className="text-[0.75rem] text-[#b6e911]">
                                            {data[0].afterPrice}$
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="shadow-[0px_0px_7px_0px_rgba(0,0,0,1)]">
                            <div className="w-full h-8/12">
                                <img
                                    className="w-full h-12/12 "
                                    src={Jedi1}
                                    alt="STAR WARS Jedi: Survivor™"
                                />
                            </div>
                            <div
                                className="p-2 h-4/12 flex flex-col gap-2"
                                style={{
                                    background:
                                        "linear-gradient(180deg, #0A141D 0%, rgba(10, 20, 29, 0.2) 100%)",
                                }}
                            >
                                <strong>STAR WARS Jedi: Survivor™</strong>
                                <div className="flex justify-center items-center h-5 w-32">
                                    <div className="h-full w-4/12 px-1 bg-[#4c6b22]">
                                        <h5 className="text-[#b6e911] text-[0.9rem] font-bold text-center">
                                            -{data[0].discount}%
                                        </h5>
                                    </div>
                                    <div className="h-full w-8/12 bg-[#344654] flex items-center justify-around">
                                        <span className="text-[0.75rem] text-[#607e96] line-through">
                                            {data[0].beforPrice}$
                                        </span>
                                        <span className="text-[0.75rem] text-[#b6e911]">
                                            {data[0].afterPrice}$
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="shadow-[0px_0px_7px_0px_rgba(0,0,0,1)]">
                            <div className="w-full h-8/12">
                                <img
                                    className="w-full h-12/12 "
                                    src={lou2_slide}
                                    alt="STAR WARS Jedi: Survivor™"
                                />
                            </div>
                            <div
                                className="p-2 h-4/12 flex flex-col gap-2"
                                style={{
                                    background:
                                        "linear-gradient(180deg, #0A141D 0%, rgba(10, 20, 29, 0.2) 100%)",
                                }}
                            >
                                <strong>
                                    The Last of Us™ Part II Remastered
                                </strong>
                                <div className="flex justify-center items-center h-5 w-32">
                                    <div className="h-full w-4/12 px-1 bg-[#4c6b22]">
                                        <h5 className="text-[#b6e911] text-[0.9rem] font-bold text-center">
                                            -{data[0].discount}%
                                        </h5>
                                    </div>
                                    <div className="h-full w-8/12 bg-[#344654] flex items-center justify-around">
                                        <span className="text-[0.75rem] text-[#607e96] line-through">
                                            {data[0].beforPrice}$
                                        </span>
                                        <span className="text-[0.75rem] text-[#b6e911]">
                                            {data[0].afterPrice}$
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="shadow-[0px_0px_7px_0px_rgba(0,0,0,1)]">
                            <div className="w-full h-8/12">
                                <img
                                    className="w-full h-12/12 "
                                    src={Jedi1}
                                    alt="STAR WARS Jedi: Survivor™"
                                />
                            </div>
                            <div
                                className="p-2 h-4/12 flex flex-col gap-2"
                                style={{
                                    background:
                                        "linear-gradient(180deg, #0A141D 0%, rgba(10, 20, 29, 0.2) 100%)",
                                }}
                            >
                                <strong>STAR WARS Jedi: Survivor™</strong>
                                <div className="flex justify-center items-center h-5 w-32">
                                    <div className="h-full w-4/12 px-1 bg-[#4c6b22]">
                                        <h5 className="text-[#b6e911] text-[0.9rem] font-bold text-center">
                                            -{data[0].discount}%
                                        </h5>
                                    </div>
                                    <div className="h-full w-8/12 bg-[#344654] flex items-center justify-around">
                                        <span className="text-[0.75rem] text-[#607e96] line-through">
                                            {data[0].beforPrice}$
                                        </span>
                                        <span className="text-[0.75rem] text-[#b6e911]">
                                            {data[0].afterPrice}$
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="shadow-[0px_0px_7px_0px_rgba(0,0,0,1)]">
                            <div className="w-full h-8/12">
                                <img
                                    className="w-full h-12/12 "
                                    src={lou2_slide}
                                    alt="STAR WARS Jedi: Survivor™"
                                />
                            </div>
                            <div
                                className="p-2 h-4/12 flex flex-col gap-2"
                                style={{
                                    background:
                                        "linear-gradient(180deg, #0A141D 0%, rgba(10, 20, 29, 0.2) 100%)",
                                }}
                            >
                                <strong>
                                    The Last of Us™ Part II Remastered
                                </strong>
                                <div className="flex justify-center items-center h-5 w-32">
                                    <div className="h-full w-4/12 px-1 bg-[#4c6b22]">
                                        <h5 className="text-[#b6e911] text-[0.9rem] font-bold text-center">
                                            -{data[0].discount}%
                                        </h5>
                                    </div>
                                    <div className="h-full w-8/12 bg-[#344654] flex items-center justify-around">
                                        <span className="text-[0.75rem] text-[#607e96] line-through">
                                            {data[0].beforPrice}$
                                        </span>
                                        <span className="text-[0.75rem] text-[#b6e911]">
                                            {data[0].afterPrice}$
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="shadow-[0px_0px_7px_0px_rgba(0,0,0,1)]">
                            <div className="w-full h-8/12">
                                <img
                                    className="w-full h-12/12 "
                                    src={Jedi1}
                                    alt="STAR WARS Jedi: Survivor™"
                                />
                            </div>
                            <div
                                className="p-2 h-4/12 flex flex-col gap-2"
                                style={{
                                    background:
                                        "linear-gradient(180deg, #0A141D 0%, rgba(10, 20, 29, 0.2) 100%)",
                                }}
                            >
                                <strong>STAR WARS Jedi: Survivor™</strong>
                                <div className="flex justify-center items-center h-5 w-32">
                                    <div className="h-full w-4/12 px-1 bg-[#4c6b22]">
                                        <h5 className="text-[#b6e911] text-[0.9rem] font-bold text-center">
                                            -{data[0].discount}%
                                        </h5>
                                    </div>
                                    <div className="h-full w-8/12 bg-[#344654] flex items-center justify-around">
                                        <span className="text-[0.75rem] text-[#607e96] line-through">
                                            {data[0].beforPrice}$
                                        </span>
                                        <span className="text-[0.75rem] text-[#b6e911]">
                                            {data[0].afterPrice}$
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="shadow-[0px_0px_7px_0px_rgba(0,0,0,1)]">
                            <div className="w-full h-8/12">
                                <img
                                    className="w-full h-12/12 "
                                    src={lou2_slide}
                                    alt="STAR WARS Jedi: Survivor™"
                                />
                            </div>
                            <div
                                className="p-2 h-4/12 flex flex-col gap-2"
                                style={{
                                    background:
                                        "linear-gradient(180deg, #0A141D 0%, rgba(10, 20, 29, 0.2) 100%)",
                                }}
                            >
                                <strong>
                                    The Last of Us™ Part II Remastered
                                </strong>
                                <div className="flex justify-center items-center h-5 w-32">
                                    <div className="h-full w-4/12 px-1 bg-[#4c6b22]">
                                        <h5 className="text-[#b6e911] text-[0.9rem] font-bold text-center">
                                            -{data[0].discount}%
                                        </h5>
                                    </div>
                                    <div className="h-full w-8/12 bg-[#344654] flex items-center justify-around">
                                        <span className="text-[0.75rem] text-[#607e96] line-through">
                                            {data[0].beforPrice}$
                                        </span>
                                        <span className="text-[0.75rem] text-[#b6e911]">
                                            {data[0].afterPrice}$
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="shadow-[0px_0px_7px_0px_rgba(0,0,0,1)]">
                            <div className="w-full h-8/12">
                                <img
                                    className="w-full h-12/12 "
                                    src={Jedi1}
                                    alt="STAR WARS Jedi: Survivor™"
                                />
                            </div>
                            <div
                                className="p-2 h-4/12 flex flex-col gap-2"
                                style={{
                                    background:
                                        "linear-gradient(180deg, #0A141D 0%, rgba(10, 20, 29, 0.2) 100%)",
                                }}
                            >
                                <strong>STAR WARS Jedi: Survivor™</strong>
                                <div className="flex justify-center items-center h-5 w-32">
                                    <div className="h-full w-4/12 px-1 bg-[#4c6b22]">
                                        <h5 className="text-[#b6e911] text-[0.9rem] font-bold text-center">
                                            -{data[0].discount}%
                                        </h5>
                                    </div>
                                    <div className="h-full w-8/12 bg-[#344654] flex items-center justify-around">
                                        <span className="text-[0.75rem] text-[#607e96] line-through">
                                            {data[0].beforPrice}$
                                        </span>
                                        <span className="text-[0.75rem] text-[#b6e911]">
                                            {data[0].afterPrice}$
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="shadow-[0px_0px_7px_0px_rgba(0,0,0,1)]">
                            <div className="w-full h-8/12">
                                <img
                                    className="w-full h-12/12 "
                                    src={lou2_slide}
                                    alt="STAR WARS Jedi: Survivor™"
                                />
                            </div>
                            <div
                                className="p-2 h-4/12 flex flex-col gap-2"
                                style={{
                                    background:
                                        "linear-gradient(180deg, #0A141D 0%, rgba(10, 20, 29, 0.2) 100%)",
                                }}
                            >
                                <strong>
                                    The Last of Us™ Part II Remastered
                                </strong>
                                <div className="flex justify-center items-center h-5 w-32">
                                    <div className="h-full w-4/12 px-1 bg-[#4c6b22]">
                                        <h5 className="text-[#b6e911] text-[0.9rem] font-bold text-center">
                                            -{data[0].discount}%
                                        </h5>
                                    </div>
                                    <div className="h-full w-8/12 bg-[#344654] flex items-center justify-around">
                                        <span className="text-[0.75rem] text-[#607e96] line-through">
                                            {data[0].beforPrice}$
                                        </span>
                                        <span className="text-[0.75rem] text-[#b6e911]">
                                            {data[0].afterPrice}$
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="shadow-[0px_0px_7px_0px_rgba(0,0,0,1)]">
                            <div className="w-full h-8/12">
                                <img
                                    className="w-full h-12/12 "
                                    src={Jedi1}
                                    alt="STAR WARS Jedi: Survivor™"
                                />
                            </div>
                            <div
                                className="p-2 h-4/12 flex flex-col gap-2"
                                style={{
                                    background:
                                        "linear-gradient(180deg, #0A141D 0%, rgba(10, 20, 29, 0.2) 100%)",
                                }}
                            >
                                <strong>STAR WARS Jedi: Survivor™</strong>
                                <div className="flex justify-center items-center h-5 w-32">
                                    <div className="h-full w-4/12 px-1 bg-[#4c6b22]">
                                        <h5 className="text-[#b6e911] text-[0.9rem] font-bold text-center">
                                            -{data[0].discount}%
                                        </h5>
                                    </div>
                                    <div className="h-full w-8/12 bg-[#344654] flex items-center justify-around">
                                        <span className="text-[0.75rem] text-[#607e96] line-through">
                                            {data[0].beforPrice}$
                                        </span>
                                        <span className="text-[0.75rem] text-[#b6e911]">
                                            {data[0].afterPrice}$
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default Slider;
