import { FaApple, FaSteam, FaWindows } from "react-icons/fa";
import oblivion from "../../../../../assets/TabCountainer/oblivion.jpg";
import { ComponentProps, useEffect, useState } from "react";

export type TCountainerCard = {
    id: number;
    name: string;
    img: string;
    windows: boolean;
    apple: boolean;
    steam: boolean;
    tags: string;
    discount?: number;
    priceAfter?: number;
    priceBefore: number | string;
    publishdata: string;
    img1: string;
    img2: string;
    img3: string;
    img4: string;
};

type TCountainerCardProps = ComponentProps<"div"> & {
    data: TCountainerCard;
    isHover: number;
};

function TabContainerCard({ data, isHover, ...props }: TCountainerCardProps) {
    const [gameActive, setgameActive] = useState(isHover);

    useEffect(() => {
        setgameActive(isHover);
    }, [isHover]);

    if (data.id === gameActive) {
        return (
            <>
                <div
                    {...props}
                    className="w-full h-[4.5rem] my-0.5 bg-[#95bcd3]"
                >
                    <div className="bg-[#95bcd3] w-[45rem] h-full flex items-center">
                        <img className="h-full w-48" src={data.img} alt="" />
                        <div className="flex items-center justify-between w-full h-full px-3">
                            <div className=" flex flex-col items-start h-full justify-between noto_sans">
                                <h2 className="text-dark font-medium">
                                    {data.name}
                                </h2>
                                <div className="flex text-[#63727e]">
                                    {data.windows && <FaWindows />}
                                    {data.apple && <FaApple />}
                                    {data.steam && <FaSteam />}
                                </div>
                                <div className="flex text-[#63727e] text-xs">
                                    {data.tags}
                                    {/* <span>RPG</span>
                                    <span>, Open World</span>
                                    <span>, Adventure</span>
                                    <span>, Fantasy</span> */}
                                </div>
                            </div>
                            {data.discount && (
                                <>
                                    <div className="w-10 h-6 bg-[#4c6b22] text-center">
                                        <span className="text-[#BEEE11]">
                                            -{data.discount}%
                                        </span>
                                    </div>
                                </>
                            )}
                            <div className="flex flex-col justify-end h-full">
                                <div className="h-13 flex flex-col justify-end">
                                    {data.discount && (
                                        <>
                                            <h3 className="flex items-end self-center min-h-1/12 line-through text-[#63727e] text-xs">
                                                {data.priceBefore}$
                                            </h3>
                                            <h3 className="flex items-start self-center text-dark ">
                                                {data.priceAfter}$
                                            </h3>
                                        </>
                                    )}
                                    {!data.discount && (
                                        <>
                                            <h3 className="flex items-end self-center min-h-1/12 line-through text-[#63727e] text-xs"></h3>
                                            <h3 className="flex items-start self-center text-dark ">
                                                {data.priceBefore}$
                                            </h3>
                                        </>
                                    )}
                                </div>
                                <span className="self-center text-[#63727e] text-xs font-light h-5 flex items-end">
                                    {data.publishdata}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    return (
        <>
            <div
                {...props}
                className="w-full h-[4.5rem] my-0.5 hover:bg-[#95bcd3]"
            >
                <div className="bg-[#202d39] hover:bg-[#95bcd3] w-[45rem] h-full flex items-center">
                    <img className="h-full w-48" src={data.img} alt="" />
                    <div className="flex items-center justify-between w-full h-full px-3">
                        <div className=" flex flex-col items-start h-full justify-between noto_sans">
                            <h2 className="text-light font-medium">
                                {data.name}
                            </h2>
                            <div className="flex text-[#63727e]">
                                {data.windows && <FaWindows />}
                                {data.apple && <FaApple />}
                                {data.steam && <FaSteam />}
                            </div>
                            <div className="flex text-[#63727e] text-xs">
                                {data.tags}
                                {/* <span>RPG</span>
                                <span>, Open World</span>
                                <span>, Adventure</span>
                                <span>, Fantasy</span> */}
                            </div>
                        </div>
                        {data.discount && (
                            <>
                                <div className="w-10 h-6 bg-[#4c6b22] text-center">
                                    <span className="text-[#BEEE11]">
                                        -{data.discount}%
                                    </span>
                                </div>
                            </>
                        )}
                        <div className="flex flex-col justify-end h-full">
                            <div className="h-13 flex flex-col justify-end">
                                {data.discount && (
                                    <>
                                        <h3 className="flex items-end self-center min-h-1/12 line-through text-[#63727e] text-xs">
                                            {data.priceBefore}$
                                        </h3>
                                        <h3 className="flex items-start self-center text-[#BEEE11] ">
                                            {data.priceAfter}$
                                        </h3>
                                    </>
                                )}
                                {!data.discount && (
                                    <>
                                        <h3 className="flex items-end self-center min-h-1/12 line-through text-[#63727e] text-xs"></h3>
                                        <h3 className="flex items-start self-center text-[#BEEE11] ">
                                            {data.priceBefore}$
                                        </h3>
                                    </>
                                )}
                            </div>
                            <span className="self-center text-[#63727e] text-xs font-light h-5 flex items-end">
                                {data.publishdata}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TabContainerCard;
