import { ComponentProps } from "react";
import './Tab.css'

type TTab = {
    name : string,
    tabindex : number,
    isActive : boolean
}

type TTabProps = ComponentProps<'div'> & {
    data : TTab
}


function Tab({data, className = '', ...props} : TTabProps) {
    return (
        <>
            <div className={`text-[#4f94bc] hover:text-light px-2 py-2 cursor-pointer ${className}`} {...props} >
                <h3 className=" text-sm font-normal">{data.name}</h3>
            </div>
        </>
    );
}

export default Tab;
