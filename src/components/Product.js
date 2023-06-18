import FadeInSection from "../hooks/intersectionHook"

export default function Product(props){

    return (
        <section className="snap-start scroll-smooth h-screen flex justify-center items-center bg-cover bg-no-repeat bg-center overflow-hidden" 
            style={{ backgroundImage: `url('${props.image}')` }}
        >
            <div className="pt-24 flex justify-between flex-col h-screen ">
            <FadeInSection>
                <div className="flex flex-col items-center ">
   
                    <p className="text-5xl font-semibold mb-3">{props.heading}</p>
                    <p className="text-lg">{props.subText}</p>
                    <p className="underline text-lg">{props.linkText}</p>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className="pb-24 flex justify-center flex-wrap gap-7">
                    <button className="w-[264px] bg-slate-100 h-[40px] rounded-md">{props.primaryButtonText}</button>
                    <button className="w-[264px] bg-[#171a20] h-[40px] text-white rounded-md">{props.secondoryButtonText}</button>
                </div>
            </FadeInSection>
            </div>
        </section>
    )
}