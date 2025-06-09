import React from "react";
import "tailwindcss/tailwind.css";
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import { useState } from "react";
import modelY from "./assets/model-y.jpg";
import model3 from "./assets/model-3.jpg";
import modelX from "./assets/model-x.jpg";
import modelS from "./assets/model-s.jpg";
import solarPanel from "./assets/solarpanels.jpg";
import solarRoof from "./assets/roof.jpg";
import accessories from "./assets/accessories.jpg";

function App() {
  // const [menu, setMenu] = useState(false)
  return (
    <div
      className={`App h-[100vh] snap-y snap-mandatory overflow-auto flex flex-col align-center`}
    >
      <header className="App-header">
        <NavBar setMenu={setMenu} menu={menu} />
      </header>
      <div className={` ${menu ? "" : ""}`}>
        <Product
          value="item1"
          image={model3}
          heading="Model 3"
          subText="Starting at $32,740"
          subText2="After Federal Tax Credit"
          linkText=""
          linkHref="#"
          primaryButtonText="Custom Order"
          secondoryButtonText="Explore Inventory"
        />
        <Product
          value="item2"
          image={modelY}
          heading="Model Y"
          subText="Starting at $40,240"
          subText2="After Federal Tax Credit"
          linkText=""
          linkHref="#"
          primaryButtonText="Custom Order"
          secondoryButtonText="Explore Inventory"
        />
        <Product
          value="item3"
          image={modelS}
          heading="Model S"
          subText=""
          linkText="Explore Inventory"
          linkHref="#"
          primaryButtonText="Custom Order"
          secondoryButtonText="Demo Drive"
        />
        <Product
          value="item4"
          image={modelX}
          heading="Model X"
          subText=""
          linkText="Explore Inventory"
          linkHref="#"
          primaryButtonText="Custom Order"
          secondoryButtonText="Demo Drive"
        />
        <Product
          value="item5"
          image={solarPanel}
          heading="Solar Panels"
          subText=""
          linkText="Schedule a Virtual Consultation"
          linkHref="#"
          primaryButtonText="Learn More"
          secondoryButtonText="Order Now"
        />
        <Product
          value="item6"
          image={solarRoof}
          heading="Solar Roof"
          subText="Produce Clean Energy From Roof"
          linkText=""
          linkHref="#"
          primaryButtonText="Learn More"
          secondoryButtonText="Order Now"
        />
        <Product
          value="item7"
          image={accessories}
          heading="Accessories"
          subText=""
          linkText=""
          linkHref="#"
          primaryButtonText="Shop Now"
          secondoryButtonText=""
        />
      </div>
      <footer className="pb-8 scroll-smooth snap-start flex flex-wrap w-[100%] justify-center items-center gap-7 text-xs font-medium text-gray-500">
        <p>Tesla &copy; 2023 </p>
        <p>Privacy & Legal</p>
        <p>Vehicle Recalls</p>
        <p>Contact</p>
        <p>News</p>
        <p>Get Updates</p>
        <p>Location</p>
      </footer>
    </div>
  );
}

export default App;
