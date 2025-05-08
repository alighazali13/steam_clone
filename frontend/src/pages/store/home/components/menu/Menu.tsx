import { IoMdSearch } from "react-icons/io";

function Menu() {
    return (
        <>
            <div
                className="w-full h-9 flex justify-center"
                style={{
                    backgroundImage:
                        "linear-gradient(90deg, rgba(62, 103, 150, 0.919) 11.38%, rgba(58, 120, 177, 0.8) 25.23%, rgb(15, 33, 110) 100%)",
                }}
            >
                <div className="h-full w-full flex justify-between items-center">
                    <ul className="flex h-full items-center text-light text-sm noto_sans font-bold cursor-pointer">
                        <li className="hover:bg-gradient-to-r hover:from-blue-400/50 hover:to-[rgba(62, 103, 150, 0.919)] px-3 py-2">
                            Your Store
                        </li>
                        <li className="hover:bg-gradient-to-r hover:from-blue-400/50 hover:to-[rgba(62, 103, 150, 0.919)] px-3 py-2">
                            New & Noteworthy
                        </li>
                        <li className="hover:bg-gradient-to-r hover:from-blue-400/50 hover:to-[rgba(62, 103, 150, 0.919)] px-3 py-2">
                            Categories
                        </li>
                        <li className="hover:bg-gradient-to-r hover:from-blue-400/50 hover:to-[rgba(62, 103, 150, 0.919)] px-3 py-2">
                            Points Shop
                        </li>
                        <li className="hover:bg-gradient-to-r hover:from-blue-400/50 hover:to-[rgba(62, 103, 150, 0.919)] px-3 py-2">
                            News
                        </li>
                        <li className="hover:bg-gradient-to-r hover:from-blue-400/50 hover:to-[rgba(62, 103, 150, 0.919)] px-3 py-2">
                            Labs
                        </li>
                    </ul>
                    <div className="w-52 h-9/12 mr-1 flex items-center bg-[#316282] rounded-[2px] shadow-xs shadow-[#738e9e]">
                        <input
                            className="w-11/12 outline-none pl-4 text-xs noto_sans text-white bg-[#316282]  placeholder:text-[#0e1c25] placeholder:text-sm"
                            type="text"
                            placeholder="search"
                        />
                        <a className="w-7 h-6 bg-[#62b3e3] mt-0.5 mr-0.5 flex justify-center items-center rounded-[1px] shadow-xs shadow-[#738e9e]">
                            <IoMdSearch className="text-xl text-[#395e80]" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;
