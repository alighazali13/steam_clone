import { TiThMenu } from "react-icons/ti";
import logo from "@assets/logo_steam.svg";
import "./Navbar.css";

function Navbar() {
    return (
        <>
            <section className="bg-[#171a21] h-[3.9rem] shadow-[0px_0px_7px_0px_rgba(0,0,0,0.75)] p-2 grid grid-cols-12">
                <div className="col-span-2 flex justify-start items-start">
                    <TiThMenu className="text-light text-4xl" />
                </div>
                <div className="col-start-3 col-span-8 flex justify-center items-center ">
                    <img className="h-[2.3rem]" src={logo} alt="" />
                </div>
            </section>
        </>
    );
}

export default Navbar;
