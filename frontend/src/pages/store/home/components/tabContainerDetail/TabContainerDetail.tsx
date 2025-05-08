import { ComponentProps } from "react";

type TTabContainerDetail = {
    name: string,
    tags: string,
    img1: string,
    img2: string,
    img3: string,
    img4: string,
}

type TTTabContainerDetailProps = ComponentProps<'div'> & {
    data : TTabContainerDetail | null
}

function TabContainerDetail({data} : TTTabContainerDetailProps) {
    return (
        <>
            <div className="h-full w-11/12 mt-7">
                <h3 className="line-clamp-1 text-xl font-semibold text-[#263645]">
                    {data?.name}
                </h3>
                <div className="bg-[#556d7f] flex flex-col pl-1 py-1 rounded text-xs font-normal">
                    <span className="text-white">Overall users reviews:</span>
                    <span className="text-[#66C0F4]">
                        Very Positive{" "}
                        <span className="text-white">(27.785)</span>
                    </span>
                </div>
                <div className="noto_sans text-light mt-2">
                    {data?.tags?.split("-").map((tag, idx) => (
                        <span
                            className="text-xs font-light bg-gray-500/30 mx-0.5 px-1 py-0.5 rounded "
                            key={idx}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex flex-col items-center h-8/12 gap-1 mt-1">
                    <img
                        className="h-4/12 w-full"
                        src={data?.img1}
                        alt=""
                    />
                    <img
                        className="h-4/12 w-full"
                        src={data?.img2}
                        alt=""
                    />
                    <img
                        className="h-4/12 w-full"
                        src={data?.img3}
                        alt=""
                    />
                    <img
                        className="h-4/12 w-full"
                        src={data?.img4}
                        alt=""
                    />
                </div>
            </div>
        </>
    );
}

export default TabContainerDetail;
