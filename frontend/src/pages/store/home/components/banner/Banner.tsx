import banner_store from "../../../../../assets/banner_store.jpg";
import Menu from "../menu";

function Banner() {
    return (
        <>
            <div
                className="w-full h-[28rem] flex justify-center"
                style={{ backgroundImage: `url(${banner_store})` }}
            >
                <div className="w-6/12 mt-10">
                    <Menu />
                </div>
            </div>
        </>
    );
}

export default Banner;
