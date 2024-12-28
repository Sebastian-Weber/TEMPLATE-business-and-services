import { useState } from 'react';
import Expander_sm from '../expanders/Expander_sm';
import { Link } from 'react-router-dom';

const cdColors = {
    primaryColor: '#98BB48',
    secondaryColor: '#FFF1B7',
    primaryAccentColor: '',
    secondaryAccentColor: '',
    primaryBackgroundColorDark: '#165287',
    primaryBackgroundColorDefault: '#1D6DB4',
    primaryBackgroundColorLight: '#ACC6DD',
    secondaryBackgroundColorDark: '#165287',
    secondaryBackgroundColorDefault: '#165287',
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

  

function ToggleHamburger() {

const [isOpen, setIsOpen] = useState(false);
const [isOverlayVisible, setOverlayVisible] = useState(false);

const genericHamburgerLine = 'h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300'

  return (
    <>
        <div>
        <div className="cursor-pointer" onClick={() => { setIsOpen(!isOpen); setOverlayVisible(!isOverlayVisible); }}>
            <div className={`${genericHamburgerLine} ${isOpen 
                ? "rotate-45 translate-y-1 group-hover:opacity-100"
                : "opacity-100 group-hover:opacity-100"}`} style={{ backgroundColor: cdColors.secondaryColor }}/>
            <div className={`${genericHamburgerLine} ${isOpen 
                ? "opacity-0" 
                : "group-hover:opacity-100"}`} style={{ backgroundColor: cdColors.secondaryColor }}/>
            <div className={`${genericHamburgerLine} ${ isOpen
                ? "-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-100"
                : "opacity-100 group-hover:opacity-100"}`} style={{ backgroundColor: cdColors.secondaryColor }}/>
            </div>
        </div>

        {/* Small overlay menu */}
        <div className={`absolute left-0 top-18 w-full items-center justify-start ${isOverlayVisible ? 'visible' : 'invisible'}`}>
        <div className="flex flex-col justify-normal h-screen items-start" style={{ backgroundColor: cdColors.primaryColor }}>
            <ul className="py-6 px-6 w-full mt-12">

            <li>
            <Link className="" to="/about">
                <div className="cursor-pointer" onClick={() => setOverlayVisible(!isOverlayVisible)} style={{ color:cdColors.secondaryColor}}>
                Über uns
                </div>
            </Link>               
            </li>

            <li>
                <Expander_sm 
                    DropdownCaption="Leistungen"
                    DropdownItem1Heading="Elektro-Dienstleistungen für Privatkunden" 
                    DropdownItem1Link="/Elektro-Dienstleistungen-Privatkunden" 
                    DropdownItem2Heading="Elektro-Dienstleistungen für Gewerbekunden" 
                    DropdownItem2Link="/Elektro-Dienstleistungen-Gewerbekunden" 
                    DropdownItem3Heading="Smart-Home Lösungen für Ihr Zuhause" 
                    DropdownItem3Link="/Smart-Home-Loesungen" 
                    DropdownItem4Heading="Lichtdesign und -installation" 
                    DropdownItem4Link="/Lichtdesign-und-Installation" 
                    DropdownItem5Heading="Notfallreparaturen" 
                    DropdownItem5Link="/Notfallreparaturen" 
                />
            </li>
                <Expander_sm 
                    DropdownCaption="Energielösungen" 
                    DropdownItem1Heading="Item 1 Heading" 
                    DropdownItem1Link="/item1" 
                    DropdownItem2Heading="Item 2 Heading" 
                    DropdownItem2Link="/item2" 
                    DropdownItem3Heading="Item 3 Heading" 
                    DropdownItem3Link="/item3" 
                    DropdownItem4Heading="Item 4 Heading" 
                    DropdownItem4Link="/item4" 
                    DropdownItem5Heading="Item 5 Heading" 
                    DropdownItem5Link="/item5" 
                />
            <li>
            <Link className="" to="/jobs">
                <div className="cursor-pointer" onClick={() => setOverlayVisible(!isOverlayVisible)} style={{ color:cdColors.secondaryColor}}>
                Offene Stellen
                </div>
            </Link>               
            </li>

            </ul>
        </div>    

        </div>
    </>
  )
}

export default ToggleHamburger