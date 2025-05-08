import TabContainerCard from "../../../../../components/ui/card/tabContainerCard";
import Tab from "../../../../../components/ui/tab";
import oblivion from "../../../../../assets/TabCountainer/oblivion.jpg";
import tempest from "../../../../../assets/TabCountainer/tempest.jpg";
import WutheringWaves from "../../../../../assets/TabCountainer/Wuthering_Waves.jpg";
import WutheringWaves1 from "../../../../../assets/TabCountainer/Wuthering_waves/Wuthering_Waves1.jpg";
import WutheringWaves2 from "../../../../../assets/TabCountainer/Wuthering_waves/Wuthering_Waves2.jpg";
import WutheringWaves3 from "../../../../../assets/TabCountainer/Wuthering_waves/Wuthering_Waves3.jpg";
import WutheringWaves4 from "../../../../../assets/TabCountainer/Wuthering_waves/Wuthering_Waves4.jpg";
import { useEffect, useState } from "react";
import { TCountainerCard } from "../../../../../components/ui/card/tabContainerCard/TabContainerCard";
import TabContainerDetail from "../tabContainerDetail";

function TabContainer() {
    const tabList = [
        {
            tabindex: 1,
            name: "New & Trending",
            isActive: true,
        },
        {
            tabindex: 2,
            name: "Top Sellers",
            isActive: false,
        },
        {
            tabindex: 3,
            name: "Popular Upcoming",
            isActive: false,
        },
        {
            tabindex: 4,
            name: "Specials",
            isActive: false,
        },
        {
            tabindex: 5,
            name: "Trending Free",
            isActive: false,
        },
    ];
    const gameList = [
        {
            id: 1,
            name: "The Elder Scrolls IV: Oblivion Remastered",
            img: oblivion,
            windows: true,
            apple: true,
            steam: true,
            tags: "RPG-Open World-Adventure-Fantasy",
            discount: 10,
            priceAfter: 30,
            priceBefore: 90,
            publishdata: "22 Apr, 2025",
            img1: WutheringWaves1,
            img2: WutheringWaves2,
            img3: WutheringWaves3,
            img4: WutheringWaves4,
        },
        {
            id: 2,
            name: "Tempest Rising",
            img: tempest,
            apple: false,
            windows: true,
            steam: false,
            tags: "RTS-Strategy-Base Building-Singleplayer",
            priceBefore: 40,
            publishdata: "21 Apr, 2025",
            img1: WutheringWaves1,
            img2: WutheringWaves2,
            img3: WutheringWaves3,
            img4: WutheringWaves4,
        },
        {
            id: 3,
            name: "Wuthering Waves",
            img: WutheringWaves,
            apple: false,
            windows: true,
            steam: false,
            tags: "Open World-Action-Anime-Free to Play",
            priceBefore: 0,
            publishdata: "28 Apr, 2025",
            img1: WutheringWaves1,
            img2: WutheringWaves2,
            img3: WutheringWaves3,
            img4: WutheringWaves4,
        },
    ];
    const [activeTab, setActiveTab] = useState(1)
    const [isHover, setIsHover] = useState(gameList[0].id);
    const [rightSideData, setRightSideData] = useState<TCountainerCard | null>(
        gameList[0]
    );

    const activeTabHandler = (tabIndex : number) => {
        setActiveTab(tabIndex)
    }
    const mouseHoverHandler = (id: number) => {
        setIsHover(id);
    };
    useEffect(() => {
        const game = gameList.find((game) => game.id === isHover);
        if (game) {
            setRightSideData(game);
        }
    }, [isHover]);

    return (
        <>
            <div className="w-7/12 h-[50rem] flex flex-col items-start justify-start -mt-9">
                <div className="w-9/12 flex gap-4">
                    {tabList.map((data) => (
                        <Tab
                            key={data.tabindex}
                            data={data}
                            className={data.isActive ? "active_tab" : ""}
                            onClick={()=> activeTabHandler(data.tabindex)}
                        />
                    ))}
                </div>
                <div className="w-full h-full flex ">
                    <div className="w-8/12 h-full flex flex-col my-2">
                        {gameList.map((game, idx) => (
                            <TabContainerCard
                                key={idx}
                                data={game}
                                id={game.id}
                                isHover={isHover}
                                onMouseEnter={() => mouseHoverHandler(game.id)}
                            />
                        ))}
                        <div className="h-10 w-[45rem] bg-[#202d39] mt-1 text-white text-xs flex items-center justify-end gap-2 px-1 noto_sans">
                            <span>See more:</span>
                            <button className="px-3 py-1 border border-light/50 rounded hover:border-light cursor-pointer">
                                New Releases
                            </button>
                        </div>
                    </div>
                    <div className="w-[20rem] h-full bg-[#95bcd3] my-2.5 flex justify-center items-center noto_sans rounded -ml-1">
                        <TabContainerDetail  data={rightSideData}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TabContainer;
