import { useState } from 'react';
import Expander_sm from '../expanders/Expander_sm';
import { Link } from 'react-router-dom';

const cdColors = {
    primaryColor: '#A8CF4E',
    secondaryColor: '#FBF179',
    primaryAccentColor: '',
    secondaryAccentColor: '',
  
    // green
    primaryBackgroundColorLight: '#C5DF88',
    primaryBackgroundColorDefault: '#A8CF4E',
    primaryBackgroundColorDark: '#8FB042',
  
    // yellow   
    secondaryBackgroundColorLight: '#FCF6A5',
    secondaryBackgroundColorDefault: '#FBF179',
    secondaryBackgroundColorDark: '#DBD269',
  
    // teal
    tertiaryBackgroundColorLight: '#9EDFB9',
    tertiaryBackgroundColorDefault: '#6FCF97',
    tertiaryBackgroundColorDark: '#5EB080',
  
    // blue
    quaternaryBackgroundColorLight: '#80CDDE',
    quaternaryBackgroundColorDefault: '#41B4CE',
    quaternaryBackgroundColorDark: '#41B4CE',
  
    // brown
    quinaryBackgroundColorLight: '#CDA888',
    quinaryBackgroundColorDefault: '#B57E4D',
    quinaryBackgroundColorDark: '#9A6B42',
  
    // white
    whiteBackground: '#F7F7F7',
  
    // black
    blackBackground: '#1A1A1A',
  
    primaryFontColor: '#212121',
    secondaryFontColor: '#6D6D6D',
    tertiaryFontColor: ''
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
                : "opacity-100 group-hover:opacity-100"}`} style={{ backgroundColor: cdColors.secondaryBackgroundColorLight }}/>
            <div className={`${genericHamburgerLine} ${isOpen 
                ? "opacity-0" 
                : "group-hover:opacity-100"}`} style={{ backgroundColor: cdColors.secondaryBackgroundColorLight }}/>
            <div className={`${genericHamburgerLine} ${ isOpen
                ? "-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-100"
                : "opacity-100 group-hover:opacity-100"}`} style={{ backgroundColor: cdColors.secondaryBackgroundColorLight}}/>
            </div>
        </div>

        {/* Small overlay menu */}
        <div className={`absolute left-0 top-16 w-full items-center justify-start ${isOverlayVisible ? 'visible' : 'invisible'}`}>
        <div className="flex flex-col justify-normal h-screen items-start" style={{ backgroundColor: cdColors.primaryColor }}>
            <ul className="py-6 px-6 w-full mt-12">

            <li>
            <Link className="" to="/about">
                <div className="cursor-pointer font-semibold" onClick={() => setOverlayVisible(!isOverlayVisible)} style={{ color:cdColors.secondaryBackgroundColorLight}}>
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
                    DropdownItem1Heading="Photovoltaik-Anlagen" 
                    DropdownItem1Link="/Photovoltaik-Anlagen" 
                    DropdownItem2Heading="Solaranlagen-Installation" 
                    DropdownItem2Link="/Solaranlagen-Installation" 
                    DropdownItem3Heading="Energieeffiziente-Beleuchtung" 
                    DropdownItem3Link="/Energieeffiziente-Beleuchtung" 
                    DropdownItem4Heading="Ladestationen für E-Fahrzeug" 
                    DropdownItem4Link="/Ladestationen-fuer-E-Fahrzeuge" 
                    DropdownItem5Heading="" 
                    DropdownItem5Link="/..." 
                />
            <li>
            <Link className="" to="/jobs">
                <div className="cursor-pointer font-semibold" onClick={() => setOverlayVisible(!isOverlayVisible)} style={{ color:cdColors.secondaryBackgroundColorLight}}>
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