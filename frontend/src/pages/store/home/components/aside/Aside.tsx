import steamdeck from "../../../../../assets/steamdeck_promo_1401590.png";
import giftcard from "../../../../../assets/steamcards_promo_03.png";

function Aside() {
    return (
        <>
            <aside className="w-8/12 flex flex-col items-center noto_sans">
                <div className="w-full relative flex flex-col items-start">
                    <div
                        className="absolute w-96 h-96 bg-gradient-to-br rounded-full"
                        style={{
                            background:
                                "linear-gradient(135deg, #2286f9 28%, #d0266f 35%)",
                            WebkitMaskImage:
                                "radial-gradient(circle at 48% 19%, black 2%, transparent 20%)",
                            maskImage:
                                "radial-gradient(circle at 48% 19%, black 2%, transparent 20%)",
                            top: "-30px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            zIndex: 1,
                        }}
                    />
                    <img
                        className="w-auto mb-3 z-10"
                        src={steamdeck}
                        alt="Steam Deck"
                    />
                    <h3 className="uppercase text-[#88bde9] font-bold text-sm mb-0.5">
                        Steam Deck
                    </h3>
                    <span className="text-[#a4b3c4] text-xs font-bold">
                        Your Games, Everywhere
                    </span>
                </div>
                <div className="w-full relative flex flex-col items-start mt-5">
                    <img src={giftcard} alt="" />
                    <h3 className="uppercase text-[#88bde9] font-bold text-sm mt-4">
                        Steam Gift Cards
                    </h3>
                    <span className="text-[#a4b3c4] text-xs font-bold">
                        Give the Gift of Game
                    </span>
                </div>
                <div className="w-full relative flex flex-col items-start mt-5 text-[#7A8B9D] text-xs font-bold">
                    <h3 className="uppercase text-[#536f86] text-sm font-bold">
                        Recommended
                    </h3>
                    <ul className="mt-1 mb-5 flex flex-col gap-0.5">
                        <li>By Friends</li>
                        <li>By Curators</li>
                        <li>Tags</li>
                    </ul>
                    <h3 className="uppercase text-[#536f86] text-sm font-bold">
                        Browse Categories
                    </h3>
                    <ul className="mt-1 mb-5 flex flex-col gap-0.5">
                        <li>Top Sellers</li>
                        <li>New Releases</li>
                        <li>Upcoming</li>
                        <li>Specials</li>
                        <li>VR Titles</li>
                        <li>Controller-Friendly</li>
                        <li>Great on Deck</li>
                    </ul>
                    <h3 className="uppercase text-[#536f86] text-sm font-bold">
                        Hardware
                    </h3>
                    <ul className="mt-1 mb-5 flex flex-col gap-0.5">
                        <li>Steam Deck</li>
                        <li>Steam Deck Dock</li>
                        <li>VR Hardware</li>
                    </ul>
                    <h3 className="uppercase text-[#536f86] text-sm font-bold">
                        Browse by genre
                    </h3>
                    <ul className="mt-1 mb-5 flex flex-col gap-0.5">
                        <li>Free To Play</li>
                        <li>Early Access</li>
                        <li>Action</li>
                        <li>Adventure</li>
                        <li>Casual</li>
                        <li>Indie</li>
                        <li>Massively Multiplayer</li>
                        <li>Racing</li>
                        <li>RPG</li>
                        <li>Simulation</li>
                        <li>Sports</li>
                        <li>Strategy</li>
                    </ul>
                </div>
            </aside>
        </>
    );
}

export default Aside;
