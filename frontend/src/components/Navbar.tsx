import { useState } from 'react';
import { Link } from 'react-router-dom';

import Firmenlogo from '/src/assets/Firmenlogo.svg'

import Expander from './dropdowns/Expander_sm';

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
  const [isOpen, setIsOpen] = useState(false);
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [isMenuItem1ExpanderVisible, setMenuItem1ExpanderVisible] = useState(false);

  

  const toggleMenuItem1Expander = () => {
    setMenuItem1ExpanderVisible(!isMenuItem1ExpanderVisible);
  };

  const genericHamburgerLine = 'h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300'


  return (
    <>
        {/* small */}
        <div className="flex flex-row justify-between items-center w-full py-5 px-10" style={{ backgroundColor: cdColors.primaryColor }}>
          
          {/* Firmenlogo */}
          <img onClick={() => setOverlayVisible(!setOverlayVisible)} className="w-18" src={Firmenlogo} alt="Firmenlogo"></img>
          
          {/* Hamburger icon */}
          <button onClick={() => { setIsOpen(!isOpen); setOverlayVisible(!isOverlayVisible); }}>
            <div className={`${genericHamburgerLine} ${isOpen 
              ? "rotate-45 translate-y-1 group-hover:opacity-100"
              : "opacity-100 group-hover:opacity-100"}`} style={{ backgroundColor: cdColors.secondaryColor }}/>
              <div className={`${genericHamburgerLine} ${isOpen 
                ? "opacity-0" 
                : "group-hover:opacity-100"}`} style={{ backgroundColor: cdColors.secondaryColor }}/>
              <div className={`${genericHamburgerLine} ${ isOpen
                ? "-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-100"
                : "opacity-100 group-hover:opacity-100"}`} style={{ backgroundColor: cdColors.secondaryColor }}/>
          </button>

          {/* Small overlay menu */}
          <div className={`absolute left-0 top-28 w-full items-center justify-start ${isOverlayVisible ? 'visible' : 'invisible'}`}>
            <div className="flex flex-col justify-normal h-screen items-start" style={{ backgroundColor: cdColors.primaryColor }}>
              <ul className="py-6 px-6 w-full mt-12">

              <li className="cursor-pointer" onClick={() => setOverlayVisible(!isOverlayVisible)}>Overlay menu item1</li>

                <li>
                  <Expander></Expander>
                </li>
                <li>
                  <Expander></Expander>
                </li>
                
                <li className="cursor-pointer" onClick={() => setOverlayVisible(!isOverlayVisible)}>Overlay menu item2</li>
                <li className="cursor-pointer" onClick={() => setOverlayVisible(!isOverlayVisible)}>Overlay menu item3</li>
              </ul>
            </div>
          </div>



        </div>
    </>
  );
};

export default Navbar;