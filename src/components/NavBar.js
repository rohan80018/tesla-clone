import logo from "../assets/tesla.svg";
import useMediaQuery from '../hooks/mediaQuery';


export default function NavBar({setMenu,menu}){
    const isMobile = useMediaQuery("(max-width:1120px)");

    return (
        <div className={` fixed flex justify-between h-14 w-screen mr-10 pr-10`} >
            <img className="App-logo ml-10" width="120px" alt="logo" src={logo}/>
            {!isMobile&&<nav className="flex items-center gap-x-1.5 font-medium">
                <p className="px-4 py-2 ease-in-out duration-500 delay-150 hover:bg-gray-500/20 rounded-lg cursor-pointer">Model S</p>
                <p className="px-4 py-2 ease-in-out duration-500 delay-150 hover:bg-gray-500/20 rounded-lg cursor-pointer">Model 3</p>
                <p className="px-4 py-2 ease-in-out duration-500 delay-150 hover:bg-gray-500/20 rounded-lg cursor-pointer">Model X</p>
                <p className="px-4 py-2 ease-in-out duration-500 delay-150 hover:bg-gray-500/20 rounded-lg cursor-pointer">Model Y</p>
                <p className="px-4 py-2 ease-in-out duration-500 delay-150 hover:bg-gray-500/20 rounded-lg cursor-pointer">Solar Roof</p>
                <p className="px-4 py-2 ease-in-out duration-500 delay-150 hover:bg-gray-500/20 rounded-lg cursor-pointer">Solar Panels</p>
            </nav>}
            {!isMobile?<div className="pr-10 flex justify-around items-center w-72 item-center font-semibold">
                <p className='px-4 py-2 ease-in-out duration-500 delay-150 hover:bg-gray-500/20 rounded-lg cursor-pointer'>Shop</p>
                <p className="px-4 py-2 ease-in-out duration-500 delay-150 hover:bg-gray-500/20 rounded-lg cursor-pointer">Account</p>
                <p onClick={()=>setMenu(true)} className="px-4 py-2 ease-in-out duration-500 delay-150 hover:bg-gray-500/20 rounded-lg cursor-pointer">Menu</p>
            </div>:
            <div className="flex items-center pr-10">
                <p onClick={()=>setMenu(true)} className="font-bold px-5 py-2 bg-gray-500/10 rounded-lg hover:bg-gray-500/20 cursor-pointer">Menu</p>
            </div>
            
            }
            <aside  className={`bg-slate-50 pt-20 fixed overflow-y-scroll right-0 h-screen transition-[width] duration-300 z-1 ${menu?"w-5/12 md:w-4/12 lg:w-3/12":"w-0"}`}>
                <button onClick={()=>setMenu(false)} className={`fixed top-1 right-8 text-4xl ${menu?"":'hidden'} pb-2 px-2 hover:bg-gray-500/20 rounded-lg`}>
                    ×
                </button>
                <ul className={`pl-5 space-y-2 ${isMobile?"text-base":"text-lg"}`}>
                    {isMobile&&<>
                        <li className="px-5 py-1 ease-in-out duration-500 hover:bg-gray-500/20 rounded-lg cursor-pointer">Model S</li>
                        <li className="px-5 py-1 ease-in-out duration-500 hover:bg-gray-500/20 rounded-lg cursor-pointer">Model 3</li>
                        <li className="px-5 py-1 ease-in-out duration-500 hover:bg-gray-500/20 rounded-lg cursor-pointer">Model X</li>
                        <li className="px-5 py-1 ease-in-out duration-500 hover:bg-gray-500/20 rounded-lg cursor-pointer">Model Y</li>
                        <li className="px-5 py-1 ease-in-out duration-500 hover:bg-gray-500/20 rounded-lg cursor-pointer">Solar Roof</li>
                        <li className="px-5 py-1 ease-in-out duration-500 hover:bg-gray-500/20 rounded-lg cursor-pointer">Solar Pannel</li>
                    </>}
                    <li className="px-5 py-1 ease-in-out duration-500 hover:bg-gray-500/20 rounded-lg cursor-pointer">Existing Inventory</li>
                    <li className="px-5 py-1 ease-in-out duration-500 hover:bg-gray-500/20 rounded-lg cursor-pointer">Used Inventory</li>
                    <li className="px-5 py-1 ease-in-out duration-500 hover:bg-gray-500/20 rounded-lg cursor-pointer">Trade In</li>
                    <li className="px-5 py-1 ease-in-out duration-500 hover:bg-gray-500/20 rounded-lg cursor-pointer">Demo Drive</li>
                    <li className="px-5 py-1 ease-in-out duration-500 hover:bg-gray-500/20 rounded-lg cursor-pointer">Insuarance</li>
                    <li className="px-5 py-1 ease-in-out duration-500 hover:bg-gray-500/20 rounded-lg cursor-pointer">Fleet</li>
                    <li className="px-5 py-1 ease-in-out duration-500 hover:bg-gray-500/20 rounded-lg cursor-pointer">Commerical Energy</li>
                    <li className="px-5 py-1 ease-in-out duration-500 hover:bg-gray-500/20 rounded-lg cursor-pointer">Utilities</li>
                    <li className="px-5 py-1 ease-in-out duration-500 hover:bg-gray-500/20 rounded-lg cursor-pointer">Charging</li>
                    <li className="px-5 py-1 ease-in-out duration-500 hover:bg-gray-500/20 rounded-lg cursor-pointer">Careers</li>
                    <li className="px-5 py-1 ease-in-out duration-500 hover:bg-gray-500/20 rounded-lg cursor-pointer">Find Us</li>
                    <li className="px-5 py-1 ease-in-out duration-500 hover:bg-gray-500/20 rounded-lg cursor-pointer">Events</li>
                    <li className="px-5 py-1 ease-in-out duration-500 hover:bg-gray-500/20 rounded-lg cursor-pointer">Support</li>
                    <li className="px-5 py-1 ease-in-out duration-500 hover:bg-gray-500/20 rounded-lg cursor-pointer">Investor Relations</li>
                    <li className="px-5 py-1 ease-in-out duration-500 hover:bg-gray-500/20 rounded-lg cursor-pointer">Shop</li>
                    <li className="px-5 py-1 ease-in-out duration-500 hover:bg-gray-500/20 rounded-lg cursor-pointer">Account</li>
                </ul>
            </aside>
        </div>
    )
}