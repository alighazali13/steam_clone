import ArrowSlider from "../../../../../components/ui/arrowSlider";
import deck1 from '../../../../../assets/SteamDeck/valheim.jpg'
import deck2 from '../../../../../assets/SteamDeck/fallout76.jpg'
import deck3 from '../../../../../assets/SteamDeck/enter_the_gungeon.jpg'
import deck4 from '../../../../../assets/SteamDeck/spell_brigade.jpg'
import SteamDeckCard from "../../../../../components/ui/card/steamDeckCard";

function DeckGames() {
    const dataList = [
        {
            img: deck1,
            alt: "valheim",
            price: "19.99",
        },
        {
            img: deck2,
            alt: "fallout76",
            price: "39.99",
        },
        {
            img: deck3,
            alt: "enter the gungeon",
            price: "14.79",
        },
        {
            img: deck4,
            alt: "spell brigade-fi",
            price: "9.75",
        },
    ];
    return(
        <>
            <div className="w-full flex items-center justify-center">
                <div className="flex w-full items-center justify-center">
                    <ArrowSlider>
                        <div className="flex w-full h-[8.2rem] gap-2.5 ">
                            {
                                dataList.slice(-4).map((data, idx)=> (
                                    <SteamDeckCard key={idx} data={data}/>
                                ))
                            }
                            
                        </div>
                    </ArrowSlider>
                </div>
            </div>
        </>
    )
}

export default DeckGames;