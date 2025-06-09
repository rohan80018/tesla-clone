

export default function Temp({value}){
  let value = value
    
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
            console.log(value, ratio)
            // if(ratio>97){
            //     setIsVisible("opacity-200")
            // }else if (ratio > 95){
            //     setIsVisible("opacity-80")
            // }else if (ratio >90){
            //     setIsVisible(`opacity-60`)
            // }else if(ratio>85){
            //     setIsVisible(`opacity-50`)
            // }else if(ratio>70){
            //     setIsVisible(`opacity-25`)
            // }else if(ratio<50){
            //     setIsVisible("opacity-0")
            // }
            setIsVisible(`opacity-${ratio-100}`)

            threshold:[0,.35,.45,.50,.70, 0.85, 0.90, 0.95, 1] 

        })
        observer.observe(refValue[value].current)
        // return ()=>observer.unobserve(refValue[value].current);
    },[])
}