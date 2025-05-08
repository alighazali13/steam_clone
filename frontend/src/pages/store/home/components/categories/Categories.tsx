import cat1 from "../../../../../assets/Categories/puzzle.webp";
import cat2 from "../../../../../assets/Categories/multiplayer_coop.webp";
import cat3 from "../../../../../assets/Categories/fighting_martial_arts.webp";
import cat4 from "../../../../../assets/Categories/science_fiction.webp";
import CategoryCard from "../../../../../components/ui/card/categoryCard";
import ArrowSlider from "../../../../../components/ui/arrowSlider";

function Categories() {
    const dataList = [
        {
            img: cat1,
            name: "puzzle",
        },
        {
            img: cat2,
            name: "co-operative",
        },
        {
            img: cat3,
            name: "fighting",
        },
        {
            img: cat4,
            name: "sci-fi",
        },
    ];
    return (
        <>
            <div className="w-full flex items-center justify-center">
                <div className="flex w-full items-center justify-center">
                    <ArrowSlider>
                        <div className="flex w-full h-[12rem] gap-2.5">
                            {dataList.slice(-4).map((data, idx) => (
                                <CategoryCard key={idx} data={data} />
                            ))}
                        </div>
                    </ArrowSlider>
                </div>
            </div>
        </>
    );
}

export default Categories;
