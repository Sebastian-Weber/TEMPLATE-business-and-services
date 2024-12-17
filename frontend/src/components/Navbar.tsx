import { useState } from 'react';
import { Link } from 'react-router-dom';

import Firmenlogo from '/src/assets/Firmenlogo.svg'

import ToggleHamburger from './buttons/toggle_hamburger';
import Button_primary from './buttons/button_primary';

const cdColors = {
  primaryColor: '#98BB48',
  secondaryColor: '#FFF1B7',
  primaryAccentColor: '',
  secondaryAccentColor: '',
  primaryBackgroundColorDark: '#165287',
  primaryBackgroundColorDefault: '#1D6DB4',
  primaryBackgroundColorLight: '#ACC6DD',
  secondaryBackgroundColorDark: '#165287',
  secondaryBackgroundColorDefaukt: '#165287',
  secondaryBackgroundColorLight: '#165287',
  tertiaryBackgroundColorDark: '#165287',
  tertiaryBackgroundColorDefault: '#165287',
  tertiaryBackgroundColorLight: '#165287',
  quaternaryBackgroundColorDark: '#165287',
  quaternaryBackgroundColorDefault: '#165287',
  quaternaryBackgroundColorLight: '#165287',
  primaryFontColor: '#191A1E',
  secondaryFontColor: '#817E72',
  tertiaryFontColor: '#D6D5CB'
};


const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [isMenuItem1ExpanderVisible, setMenuItem1ExpanderVisible] = useState(false);

  

  const toggleMenuItem1Expander = () => {
    setMenuItem1ExpanderVisible(!isMenuItem1ExpanderVisible);
  };

  // const genericHamburgerLine = 'h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300'


  return (
    <>
        {/* small */}
        <div className="md:hidden flex flex-row justify-between items-center w-full py-5 px-10" style={{ backgroundColor: cdColors.primaryColor }}>
          
          {/* Firmenlogo */}
          <Link to="/" >
            <img className="w-18 -mt-6" src={Firmenlogo} alt="Firmenlogo" onClick={() => setOverlayVisible(!setOverlayVisible)}></img>
          </Link>

          {/* Hamburger icon */}
          {/* <button onClick={() => { setIsOpen(!isOpen); setOverlayVisible(!isOverlayVisible); }}>
            <div className={`${genericHamburgerLine} ${isOpen 
              ? "rotate-45 translate-y-1 group-hover:opacity-100"
              : "opacity-100 group-hover:opacity-100"}`} style={{ backgroundColor: cdColors.secondaryColor }}/>
              <div className={`${genericHamburgerLine} ${isOpen 
                ? "opacity-0" 
                : "group-hover:opacity-100"}`} style={{ backgroundColor: cdColors.secondaryColor }}/>
              <div className={`${genericHamburgerLine} ${ isOpen
                ? "-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-100"
                : "opacity-100 group-hover:opacity-100"}`} style={{ backgroundColor: cdColors.secondaryColor }}/>
          </button> */}

          <ToggleHamburger></ToggleHamburger>


        </div>

      {/* Medium */}
      <div className="hidden  md:flex flex-row justify-between items-center absolute w-screen py-5 px-10" style={{ backgroundColor: cdColors.primaryColor }}>

        {/* Firmenlogo */}
        <Link to="/" >
          <img className="w-18 -mt-6" src={Firmenlogo} alt="Firmenlogo" onClick={() => setOverlayVisible(!setOverlayVisible)}></img>
        </Link>   

        <div className="flex flex-row justify-end items-center ">
          {/* <button className="" style={{ color: cdColors.primaryColor, backgroundColor: cdColors.secondaryColor }}>Kontakt</button> */}
          <div>
            <Button_primary caption='Kontakt'  ></Button_primary>
          </div>
          <ToggleHamburger></ToggleHamburger>
        </div>
      </div>
    </>
  );
};

export default Navbar;