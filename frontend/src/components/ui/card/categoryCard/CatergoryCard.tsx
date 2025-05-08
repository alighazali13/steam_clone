import { ComponentProps } from "react";

type TCategoyCardProps = ComponentProps<'div'> & {
    data: TCategoyCard
}

type TCategoyCard = {
    img : string,
    name : string
}

function CategoryCard({data} : TCategoyCardProps) {
    return (
        <>
            <div className="group w-4/12 h-full rounded-xl bg-cover bg-center overflow-hidden relative">
                <div className="absolute inset-0 bg-[#2880a6]/50 z-10 rounded-xl transition-all duration-500 group-hover:opacity-0"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center scale-100 transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${data.img})` }}
                />
                <div className="absolute z-20 inset-0 flex justify-center items-end p-12 transition-all duration-200 ease-in-out group-hover:p-3">
                    <h2 className="uppercase bg-white text-[#2880a6] text-[0.9rem] font-medium px-3 py-0.5 rounded ">
                        {data.name}
                    </h2>
                </div>
            </div>
        </>
    );
}

export default CategoryCard;
