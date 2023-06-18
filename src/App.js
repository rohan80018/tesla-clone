import React from "react";
import 'tailwindcss/tailwind.css'
import NavBar from './components/NavBar'
import Product from './components/Product'
import { useState } from "react";
import modelY from "./assets/model-y.jpg"
import model3 from "./assets/model-3.jpg"
import modelX from "./assets/model-x.jpg"
import modelS from "./assets/model-s.jpg"
import solarPanel from "./assets/solarpanels.jpg"
import solarRoof from "./assets/roof.jpg"

function App() {
    const [menu, setMenu] = useState(false)
  return (
    <div className={`App h-screen snap-y snap-mandatory overflow-auto`} >
      <header className="App-header">
        <NavBar setMenu={setMenu} menu={menu}/>
      </header>
      <div className={`${menu?"":""}`}>
        <Product 
            image={model3}
            heading="Model 3"
            subText="Starting at $32,740"
            linkText="After Federal Tax Credit"
            linkHref="#"
            primaryButtonText="Custom Order"
            secondoryButtonText="Explore Inventory"
        />
        <Product 
            image={modelY}
            heading="Model Y"
            subText="Starting at $40,240"
            linkText="After Federal Tax Credit"
            linkHref="#"
            primaryButtonText="Custom Order"
            secondoryButtonText="Explore Inventory"
        />
        <Product 
            image={modelS}
            heading="Model S"
            subText=""
            linkText="Explore Inventory"
            linkHref="#"
            primaryButtonText="Custom Order"
            secondoryButtonText="Demo Drive"
        />
        <Product 
            image={modelX}
            heading="Model X"
            subText=""
            linkText="Explore Inventory"
            linkHref="#"
            primaryButtonText="Custom Order"
            secondoryButtonText="Demo Drive"
        />
        <Product 
            image={solarPanel}
            heading="Solar Panels"
            subText=""
            linkText="Schedule a Virtual Consultation"
            linkHref="#"
            primaryButtonText="Order Now"
            secondoryButtonText="Learn More"
        />
        <Product 
            image={solarRoof}
            heading="Solar Roof"
            subText="Produce Clean Energy From Roof"
            linkText=""
            linkHref="#"
            primaryButtonText="Order Now"
            secondoryButtonText="Learn More"
        />
      </div>
    </div>
  );
}

export default App;
