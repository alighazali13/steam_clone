import Menu from "../../../components/ui/menu";
import Offers from "./components/offers";
import Slider from "./components/slider";

function Home() {
    return (
        <>
            <div className="grid-cols-1">
                <Menu />
                <Slider />
                <Offers />
                
            </div>
        </>
    );
}

export default Home;
