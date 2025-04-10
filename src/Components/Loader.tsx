import FadeLoader from "react-spinners/FadeLoader"
// import { useState } from "react";

const Loader =()=>{

//    const [color, setColor] = useState("#be0bf3");

    return (
        <div className="flex fixed top-0 left-0 w-full h-full items-center justify-center z-[100] bg-[#000] opacity-50">
            <FadeLoader  color="#be0bf3">
            </FadeLoader>
        </div>
    )
}

export default Loader;