import { useState } from 'react';
import Expander_sm from '../expanders/Expander_sm';
import { Link } from 'react-router-dom';

const cdColors = {
    primaryColor: '#A8CF4E',
    secondaryColor: '#F3F4A7',
    primaryAccentColor: '',
    secondaryAccentColor: '',
  
    // yellow
    primaryBackgroundColorDark: '#9FA053',
    primaryBackgroundColorDefault: '#EDEF7C',
    primaryBackgroundColorLight: '#F3F4A7',
  
    // green
    secondaryBackgroundColorDark: '#718B34',
    secondaryBackgroundColorDefault: '#A8CF4E',
    secondaryBackgroundColorLight: '#C5DF88',
  
    // teal
    tertiaryBackgroundColorDark: '#4A8B65',
    tertiaryBackgroundColorDefault: '#6FCF97',
    tertiaryBackgroundColorLight: '#9EDFB9',
  
    // blue
    quaternaryBackgroundColorDark: '#338EA2',
    quaternaryBackgroundColorDefault: '#4CD4F2',
    quaternaryBackgroundColorLight: '#87E2F6',
  
    // brown
    quinaryBackgroundColorDark: '#795434',
    quinaryBackgroundColorDefault: '#B57E4D',
    quinaryBackgroundColorLight: '#CDA888',
  
    // white
    whiteBackground: '#F7F7F7',
  
    // black
    blackBackground: '#1A1A1A',
  
    primaryFontColor: '#262E3C',
    secondaryFontColor: '#6D6D6D',
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