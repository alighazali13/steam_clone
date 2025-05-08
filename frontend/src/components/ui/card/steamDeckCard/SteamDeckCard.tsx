import { ComponentProps } from "react";

type TSteamDeckCard = {
    img : string,
    alt : string,
    price : string
} 

type TSteamDeckCardProps = ComponentProps<'div'> & {
    data : TSteamDeckCard
}

function SteamDeckCard({data} : TSteamDeckCardProps) {
    return (
        <>
            <div className="h-full w-4/12 rounded-t-md shadow-[1px_-3px_4px_2px_rgba(23,29,37,1)]">
                <img
                    className="h-9/12 w-full  rounded-t-md"
                    src={data.img}
                    alt={data.alt}
                />
                <div className="bg-[#364250] h-3/12 w-full flex items-center justify-start">
                    <h3 className="text-white noto_sans text-xs font-normal px-1 py-0.5 bg-[#212d3b] ml-1 rounded-[2px]">
                        {data.price}$
                    </h3>
                </div>
            </div>
        </>
    );
}

export default SteamDeckCard;
