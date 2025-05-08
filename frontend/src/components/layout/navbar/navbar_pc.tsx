import { FaCaretDown } from "react-icons/fa"

function Navbar() {
    return(
        <>
        <div className="w-full h-28 bg-dark flex justify-center">
            <div className="w-6/12 h-full flex flex-col mt-2">
                <div className="flex justify-end text-milk w-full">
                    <ul className="flex items-center text-[11px] noto_sans">
                        <li className="px-2 py-1 bg-lime-800 flex items-center text-light">
                            <img className="w-4 h-4 p-0.5 mr-1" src="https://store.fastly.steamstatic.com/public/shared/images/header/btn_header_installsteam_download.png?v=1" alt="" />
                            Install Steam
                        </li>
                        <li className="border-r border-milk px-2">login</li>
                        <li className="px-2 flex gap-0.5 items-center">language 
                            <FaCaretDown />
                        </li>
                    </ul>
                </div>
                <div className="flex items-center justify-start w-full">
                    <div className="mr-9">
                        <img className="w-44" src="https://store.fastly.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" alt="" />
                    </div>
                    <ul className="uppercase flex text-light gap-4 font-medium">
                        <li className="text-blue-400 border-b-4 border-blue-400 ">store</li>
                        <li>community</li>
                        <li>about</li>
                        <li>support</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar