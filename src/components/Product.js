// import FadeInSection from "../hooks/intersectionHook"
// import useMediaQuery from "../hooks/mediaQuery";

// export default function Product(props){
//   // max-[480px]:bg-[length:250svw_100svh] bg-cover bg-center
//     const isMobile = useMediaQuery("(max-width:480px)");
//     return (
//         // <section className="snap-start  scroll-smooth h-screen flex justify-center items-center bg-cover bg-no-repeat overflow-hidden  bg-center "
//         // style={{ backgroundImage: `url('${props.image}')` }}
//         // >
//         <section className={`snap-start snap-always scroll-smooth h-[100dvh] flex justify-center items-center bg-no-repeat overflow-hidden bg-cover bg-center`}
//             style={{ backgroundImage: `url('${props.image}')` }}
//         >
//         <div className={`${isMobile?"pt-48":"pt-24"} flex justify-between flex-col h-screen`}>
//             <FadeInSection>

//                 <div className="flex flex-col items-center ">
   
//                     <p className={`${isMobile?"text-3xl mb-1":"text-5xl mb-3"} tracking-wider font-semibold`}>{props.heading}</p>
//                     <p className={`${isMobile?"text-xs":"text-lg"}`}>{props.subText}</p>
//                     <p className={`${isMobile?"text-xs":"text-lg"}`}>{props.subText2}</p>
//                     <p className={`${isMobile?"text-xs":"text-lg"} underline underline-offset-4`}>{props.linkText}</p>
//                 </div>
//             {/* </FadeInSection>
//             <FadeInSection> */}
//                 {!isMobile?
//                 <div className="pb-20 flex justify-center flex-wrap gap-7">
//                     {props.secondoryButtonText&&<button className="w-[264px] bg-[#ffffff99] h-[40px] rounded-md font-medium">{props.secondoryButtonText}</button>}
//                     <button className="w-[264px] text-white bg-[#000000b3] h-[40px] rounded-md font-medium">{props.primaryButtonText}</button>

//                 </div>:
//                 <div className="flex flex-col pb-[70px] gap-3 w-screen items-center">
//                     {props.secondoryButtonText&&<button className="w-[90%] bg-[#ffffff99] h-[35px]  rounded-sm font-medium">{props.secondoryButtonText}</button>}
//                     <button className="w-[90%] text-white bg-[#000000b3]  h-[35px] rounded-sm font-medium">{props.primaryButtonText}</button>
//                 </div>}
//             </FadeInSection>
//         </div>
//         </section>
//     )
// }





import FadeInSection from "../hooks/intersectionHook"
import useMediaQuery from "../hooks/mediaQuery";
import { useRef, useEffect, useState } from "react";


export default function Product(props){
    let value = props.value
    
    const refValue = {
        [value]:useRef()
    }
    let [isVisible, setIsVisible] = useState("opacity-0`")
    // const [entry, setEntry] = useState(false)
    // console.log(value,isVisible)
    useEffect(()=>{
        // console.log(value, refValue[value].current )
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0]
            let ratio = `${Math.round(entry.intersectionRatio * 100)}`
            // console.log(value, ratio)
            if(ratio>97){
                setIsVisible("opacity-200")
            }else if (ratio > 95){
                setIsVisible("opacity-80")
            }else if (ratio >90){
                setIsVisible(`opacity-60`)
            }else if(ratio>85){
                setIsVisible(`opacity-50`)
            }else if(ratio>70){
                setIsVisible(`opacity-25`)
            }else if(ratio<50){
                setIsVisible("opacity-0")
            }
            // setIsVisible(`opacity-${ratio-50}`)
            // if(ratio < 50){
            //     setIsVisible(false)
            // }if (ratio>50){setIsVisible(true)}
            // setIsVisible(`opacity-${ratio}`)
            // setEntry({"threshold"})
            // setIsVisible(entry.isIntersecting)
        },{
            // threshold:[0, 0.25, 0.5, 0.75, 1] 
            threshold:[0,.35,.45,.50,.70, 0.85, 0.90, 0.95, 1] 

        })
        observer.observe(refValue[value].current)
        return ()=>observer.unobserve(refValue[value].current);
    },[])



  // max-[480px]:bg-[length:250svw_100svh] bg-cover bg-center
    const isMobile = useMediaQuery("(max-width:480px)");
    return (
        // <section className="snap-start  scroll-smooth h-screen flex justify-center items-center bg-cover bg-no-repeat overflow-hidden  bg-center "
        // style={{ backgroundImage: `url('${props.image}')` }}
        // >
        <section ref={refValue[value]}  className={` snap-start snap-always scroll-smooth h-[100dvh] flex justify-center items-center bg-no-repeat  overflow-hidden bg-cover bg-center`}
            style={{ backgroundImage: `url('${props.image}')` }}
        >
        <div  className={`sticky top-0 z-4 ${isMobile?"pt-48 pb-[70px]":"pt-24 pb-20"} ${isVisible} flex justify-between flex-col h-screen linear duration-100  `}>


                <div className=" flex flex-col items-center ">
   
                    <p className={`${isMobile?"text-3xl mb-1":"text-5xl mb-3"} tracking-wider font-semibold`}>{props.heading}</p>
                    <p className={`${isMobile?"text-xs":"text-lg"}`}>{props.subText}</p>
                    <p className={`${isMobile?"text-xs":"text-lg"}`}>{props.subText2}</p>
                    <p className={`${isMobile?"text-xs":"text-lg"} underline underline-offset-4`}>{props.linkText}</p>
                </div>
            {/* </FadeInSection>
            <FadeInSection> */}
                {!isMobile?
                <div className=" flex justify-center flex-wrap gap-7">
                    {props.secondoryButtonText&&<button className="w-[264px] bg-[#ffffff99] h-[40px] rounded-md font-medium">{props.secondoryButtonText}</button>}
                    <button className="w-[264px] text-white bg-[#000000b3] h-[40px] rounded-md font-medium">{props.primaryButtonText}</button>

                </div>:
                <div className="flex flex-col  gap-3 w-screen items-center">
                    {props.secondoryButtonText&&<button className="w-[90%] bg-[#ffffff99] h-[35px]  rounded-sm font-medium">{props.secondoryButtonText}</button>}
                    <button className="w-[90%] text-white bg-[#000000b3]  h-[35px] rounded-sm font-medium">{props.primaryButtonText}</button>
                </div>}
        </div>
        </section>
    )
}



