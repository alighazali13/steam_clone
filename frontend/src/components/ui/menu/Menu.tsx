import { BiSearchAlt2 } from "react-icons/bi";

function Menu() {
    return (
        <>
            <div
                className="w-full"
                style={{
                    background:
                        "linear-gradient(90deg, rgba(62, 103, 150, 0.919) 11.38%, rgba(58, 120, 177, 0.8) 25.23%, rgb(15, 33, 110) 100%)",
                }}
            >
                <ul className="grid grid-rows-6 grid-cols-1 text-xs font-semibold gap-5 p-3">
                    <li className="text-shadow-sm/20">Your Store</li>
                    <li className="text-shadow-sm/20">New & Noteworthy</li>
                    <li className="text-shadow-sm/20">Categories</li>
                    <li className="text-shadow-sm/20">Points Shop</li>
                    <li className="text-shadow-sm/20">News</li>
                    <li className="text-shadow-sm/20">Labs</li>
                </ul>
                <div className="p-1 relative">
                    <input
                        className="w-full bg-[#5e839a] border-2 rounded border-[#384e5b] text-[#08111be0] italic px-1"
                        type="text"
						placeholder="search"
                    />
					<div className="absolute right-1.5 top-1.5 p-0.5 bg-[#65aad4] flex items-center justify-center rounded shadow-[0px_0px_1px_rgba(255,255,255,0.2))]">
						<BiSearchAlt2 className="text-[#3b556e] text-xl" />
					</div>
                </div>
            </div>
        </>
    );
}

export default Menu;
