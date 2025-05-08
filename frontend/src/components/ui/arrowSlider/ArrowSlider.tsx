import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function ArrowSlider({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div
                className=" h-28 w-10 flex items-center justify-center"
                style={{
                    background:
                        "linear-gradient( to right, rgba( 0, 0, 0, 0.3) 5%,rgba( 0, 0, 0, 0) 95%)",
                }}
            >
                <MdKeyboardArrowLeft className="text-white text-[100px]" />
            </div>
            {children}
            <div
                className=" h-28 w-10 flex items-center justify-center"
                style={{
                    background:
                        "linear-gradient( to left, rgba( 0, 0, 0, 0.3) 5%,rgba( 0, 0, 0, 0) 95%)",
                }}
            >
                <MdKeyboardArrowRight className="text-white text-[100px]" />
            </div>
        </>
    );
}

export default ArrowSlider;
