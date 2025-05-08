

function Home() {
    return (
        <>
            <div className="w-full h-screen">
                <Banner />
                <div className="w-full flex flex-col items-center ">
                    <div className="w-11/12 flex flex-row items-start mt-10 mb-20 ml-32">
                        <div className="w-2/12 flex justify-end">
                            <Aside />
                        </div>
                        <div className="w-7/12">
                            <div
                                className="w-full flex flex-col justify-center items-center border-b border-[#192f45]"
                                style={{ background: `url(${cluster_bg})` }}
                            >
                                <h2 className="text-light noto_sans flex self-start ml-10 mb-2 uppercase">
                                    Featured & Recommended
                                </h2>
                                <Slider />
                                <Thumbs />
                            </div>
                            <div className="w-full flex items-center justify-center">
                                <Takeunder />
                            </div>
                            <div className="w-full flex flex-col items-center justify-center mb-10">
                                <h2 className="text-light noto_sans flex self-start ml-10 mb-2 uppercase">
                                    Special Offers
                                </h2>
                                <Offers />
                                <Thumbs />
                            </div>
                            <div className="w-full flex flex-col items-center justify-center mb-10">
                                <h2 className="text-light noto_sans flex self-start ml-10 mb-2 uppercase">
                                    Browse by category
                                </h2>
                                <Categories />
                                <Thumbs />
                            </div>
                            <div className="w-full flex flex-col items-center justify-center mb-10">
                                <div className="flex justify-start w-full items-center ml-20 mb-2 ">
                                    <img
                                        className="h-4 w-3 mr-1"
                                        src={deck_logo}
                                        alt=""
                                    />
                                    <h2 className="text-light noto_sans flex self-start uppercase">
                                        Top Played On Steam Deck
                                    </h2>
                                </div>
                                <DeckGames />
                                <Thumbs />
                            </div>
                            <div className="w-full flex items-center justify-center mb-10">
                                <DeckVideo />
                            </div>
                            <div className="w-full flex flex-col items-center justify-center mb-10">
                                <h2 className="text-light noto_sans flex self-start ml-10 mb-2 uppercase">
                                    Browse Steam
                                </h2>
                                <BrowseSteam />
                            </div>

                            <div className="w-full flex flex-col items-center justify-center mb-10">
                                <div className="flex justify-start w-full items-center px-10 mb-2 ">
                                    <div className="flex w-full justify-between items-center">
                                        <h2 className="text-light noto_sans flex self-start uppercase">
                                            unser 10${" "}
                                        </h2>
                                        <div className="flex text-light/90 noto_sans gap-1">
                                            <button className="px-2 py-0.5 border-[1px] border-light/50 rounded">
                                                under 10$
                                            </button>
                                            <button className="px-2 py-0.5 border-[1px] border-light/50 rounded">
                                                under 5$
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <DeckGames />
                                <Thumbs />
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center mb-10"
                        style={{
                            background:
                                "linear-gradient(to bottom, rgba(42, 71, 94, 1.0) 5%, rgba(42, 71, 94, 0.0) 70%)",
                        }}
                    >
                        <TabContainer />
                    </div>
                    <div className="w-11/12 flex flex-col items-center justify-center mt-20 mb-10">
                        <div className="w-7/12">
                            <div className="flex justify-start w-full items-center ml-10 mb-2 ">
                                <h2 className="text-light noto_sans flex self-start uppercase">
                                    virtual reality
                                </h2>
                            </div>
                            <DeckGames />
                            
                        </div>
                        <Thumbs />
                    </div>
                    <div className="w-full h-44 flex flex-col items-center justify-center mb-10 bg-black text-milk/80 noto_sans">
                        <span>
                            Sign in to view personalized recommendations
                        </span>
                        <button className="py-1 px-4 bg-[#658004] hover:bg-[#658004e0] text-[#D2E885] rounded my-5  cursor-pointer">
                            Sign In
                        </button>
                        <span>
                            Or
                            <span className="text-light hover:text-blue-400 cursor-pointer">
                                {" "}
                                sign up{" "}
                            </span>
                            and join Steam for free
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
