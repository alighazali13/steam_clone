import deckvideo from "../../../../../assets/SteamDeck/Video/deck_banner_animated_webm_english.webm";

function DeckVideo() {
    return (
        <>
            <div className="w-11/12 h-[15rem] hover:shadow-[1px_0px_8px_1px_rgba(162,244,253,1)]">
                <video
                    src={deckvideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                ></video>
            </div>
        </>
    );
}

export default DeckVideo;
