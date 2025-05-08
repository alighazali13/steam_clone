function BrowseSteam() {
    return (
        <>
            <div className="w-11/12 h-[4rem] flex items-center justify-between gap-2">
                <div className="w-4/12 h-full text-light font-bold">
                    <button className="uppercase w-full h-full rounded"
                    style={{background: 'linear-gradient(90deg, #06BFFF 0%, #2D73FF 100%)'}}>new realease</button>
                </div>
                <div className="w-4/12 h-full text-light font-bold">
                    <button className="uppercase w-full h-full rounded"
                    style={{background: 'linear-gradient(90deg, #06BFFF 0%, #2D73FF 100%)'}}>specials</button>
                </div>
                <div className="w-4/12 h-full text-light font-bold">
                    <button className="uppercase w-full h-full rounded"
                    style={{background: 'linear-gradient(90deg, #06BFFF 0%, #2D73FF 100%)'}}>free games</button>
                </div>
                <div className="w-4/12 h-full text-light font-bold">
                    <button className="uppercase w-full h-full rounded"
                    style={{background: 'linear-gradient(90deg, #06BFFF 0%, #2D73FF 100%)'}}>by user tags</button>
                </div>
                
                
            </div>
        </>
    );
}

export default BrowseSteam;
