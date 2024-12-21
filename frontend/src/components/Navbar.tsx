import { useState } from 'react';
import { Link } from 'react-router-dom';

import Firmenlogo from '/src/assets/Firmenlogo.svg'
import Phone from '/src/assets/icons/Phone.svg'

import ToggleHamburger from './toggles/toggle_hamburger';
import Button_primary from './buttons/button_primary';
import Button_secondary from './buttons/button_secondary';
import Navbar_xl_dropdown_template from './dropdowns/Navbar_xl_dropdown_template';


const cdImages = {
  logo: '/src/assets/Peters_Logotype.svg',
  image1: '/src/assets/images/vishnu-mohanan-qso4MyFvhNc-unsplash.jpg',
  image2: '/src/assets/images/mohamed-marey-M9mRKGW9L30-unsplash.jpg',
  image3: '/src/assets/images/james-sandbrook-h0-lwHj7heI-unsplash.jpg',
  image4: '/src/assets/images/mika-baumeister-dp9AxaKHdVg-unsplash.png',
  image5: '/src/assets/images/steve-johnson-hokONTrHIAQ-unsplash.jpg',
  image6: '/src/assets/images/david-dvoracek-2kWxMl5IWTA-unsplash.jpg',
  image7: '/src/assets/images/neven-krcmarek-67FG6zD8WPQ-unsplash.png',
  image8: '/src/assets/images/thisisengineering-ovWUKV1btXk-unsplash.png',
  image9: '/src/assets/images/markus-spiske-kK7uPfb2YWU-unsplash.jpg',
  image10: '/src/assets/images/thisisengineering-ZPeXrWxOjRQ-unsplash.jpg',
  image11: '/src/assets/images/gidlark-d662tNZfe_g-unsplash.jpg',
  image12: '/src/assets/images/brian-wangenheim--yWw3HlVVnQ-unsplash.jpg',
  image13: '/src/assets/images/shirish-suwal-ctmuaOO-JJI-unsplash.jpg',
  image14: '/src/assets/images/gidlark-d662tNZfe_g-unsplash.jpg',
  image15: '/src/assets/images/tekton-ndJlw4Bz-1Y-unsplash.jpg',
  image16: '/src/assets/images/thisisengineering-zhXR20LFowA-unsplash.jpg',
  image17: '/src/assets/images/steffen-lemmerzahl-fu3iLPBe964-unsplash.jpg',
  image18: '/src/assets/images/s-tsuchiya-gxIg8FcDIC8-unsplash.jpg',
  image19: '/src/assets/images/alex-wolowiecki-uXgoasNqYqw-unsplash.jpg',
  image20: '/src/assets/images/claudio-schwarz-sLfUA03zaOk-unsplash.jpg',

};

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
      <div className="fixed md:hidden flex flex-row justify-between items-center w-full py-5 px-10" style={{ backgroundColor: cdColors.primaryColor }}>
        
        {/* Firmenlogo */}
        <Link to="/" >
          <img className="w-18 -mt-6" src={Firmenlogo} alt="Firmenlogo" onClick={() => setOverlayVisible(!setOverlayVisible)}></img>
        </Link>
      
          <div className="">
            <ToggleHamburger></ToggleHamburger>
          </div>

      </div>

      {/* Medium */}
      <div className="fixed hidden md:flex flex-row justify-between items-center w-screen py-5 px-10" style={{ backgroundColor: cdColors.primaryColor }}>

        {/* Firmenlogo */}
        <Link to="/" >
          <img className="w-18 -mt-6" src={Firmenlogo} alt="Firmenlogo" onClick={() => setOverlayVisible(!setOverlayVisible)}></img>
        </Link>   

        <div className="flex flex-row justify-end items-center ">

          <div className="flex flex-row mx-4 text-nowrap items-center justify-end">
              <img className="" src={Phone}></img>
            <div className="text-xl nav-text-color cursor-default" style={{ color: cdColors.secondaryColor}} >+49 12345 6789</div>
          </div>
          {/* <Button_secondary caption="Kontakt" buttonSecondaryUrl="About"></Button_secondary> */}

          <div className="">
            <ToggleHamburger></ToggleHamburger>
          </div>

        </div>
      </div>

      {/* large */}
      <div className="fixed hidden lg:flex flex-row justify-between items-center w-screen py-5 px-10" style={{ backgroundColor: cdColors.primaryColor }}>

        {/* Firmenlogo */}
        <Link to="/" >
          <img className="w-18 -mt-6" src={Firmenlogo} alt="Firmenlogo" onClick={() => setOverlayVisible(!setOverlayVisible)}></img>
        </Link>   

        <div className="flex flex-row justify-end items-center ">

        <Button_secondary buttonSecondaryCaption="Kontakt" buttonSecondaryLink="about"></Button_secondary>

          <div className="flex flex-row items-center justify-end">

            <div className="flex flex-row mx-4 text-nowrap items-center justify-end">
              <img className="" src={Phone}></img>
              <div className="text-xl cursor-default" style={{ color: cdColors.secondaryColor}}>+49 12345 6789</div>
            </div>

            <div className="">
              <ToggleHamburger></ToggleHamburger>
            </div>

          </div>

        </div>
      </div>

      {/* XL */}
      <div className="fixed hidden xl:flex flex-row justify-between items-center w-screen py-5 px-10" style={{ backgroundColor: cdColors.primaryColor }}>
      <div className="flex flex-row justify-start items-center">

        {/* Firmenlogo */}
        <Link to="/" >
          <img className="w-18 -mt-6"  src={Firmenlogo} alt="Firmenlogo" onClick={() => setOverlayVisible(!setOverlayVisible)}></img>
        </Link>

        <div className="flex flex-row justify-start items-center mx-4">

        {/* Ueber uns  */}
        <Link className="" to="/about">
          <div className="text-xl font-medium menu-hover mx-2 px-2" style={{ color: cdColors.secondaryColor }}>
            Über uns
          </div>
        </Link>

        <Navbar_xl_dropdown_template 
          DropdownCaption='Leistungen'
          caption='Placeholder'
          DropdownItem1Heading='Elektro-Dienstleistungen für Privatkunden' 
          DropdownItem1Image={cdImages.image3} 
          DropdownItem1Subheading='Einbau, Austausch und Wartung von Elektrogeräten' 
          DropdownItem1Url='Elektro-Dienstleistungen-Privatkunden'
          DropdownItem2Heading='Elektro-Dienstleistungen für Gewerbekunden' 
          DropdownItem2Image={cdImages.image17} 
          DropdownItem2Subheading='Einbau, Austausch und Wartung von Elektrogeräten' 
          DropdownItem2Url='Elektro-Dienstleistungen-Gewerbekunden'  
          DropdownItem3Heading='Smart-Home Lösungen' 
          DropdownItem3Image={cdImages.image1} 
          DropdownItem3Subheading='Smart-Home Lösungen' 
          DropdownItem3Url='Elektro-Dienstleistungen-Privatkunden'
          DropdownItem4Heading='Beleuchtungsdesign und -installation' 
          DropdownItem4Image={cdImages.image18} 
          DropdownItem4Subheading='Beleuchtungsdesign und -installation' 
          DropdownItem4Url='Elektro-Dienstleistungen-Privatkunden'
          DropdownItem5Heading='Notfallreparaturen' 
          DropdownItem5Image={cdImages.image4} 
          DropdownItem5Subheading='Notfallreparaturen' 
          DropdownItem5Url='Elektro-Dienstleistungen-Privatkunden'  

        ></Navbar_xl_dropdown_template>
        <Navbar_xl_dropdown_template 
          DropdownCaption='Nachhaltigkeit & Energielösungen'
          caption='Placeholder'
          DropdownItem1Heading='Photovoltaik-Anlagen' 
          DropdownItem1Image={cdImages.image5} 
          DropdownItem1Subheading='...' 
          DropdownItem1Url='Elektro-Dienstleistungen-Privatkunden'
          DropdownItem2Heading='Solaranlagen-Installation' 
          DropdownItem2Image={cdImages.image6} 
          DropdownItem2Subheading='...' 
          DropdownItem2Url='Elektro-Dienstleistungen-Privatkunden'  
          DropdownItem3Heading='Energieeffiziente Beleuchtung' 
          DropdownItem3Image={cdImages.image7} 
          DropdownItem3Subheading='...' 
          DropdownItem3Url='Elektro-Dienstleistungen-Privatkunden'
          DropdownItem4Heading='Ladestationen für E-Fahrzeuge' 
          DropdownItem4Image={cdImages.image8} 
          DropdownItem4Subheading='...' 
          DropdownItem4Url='Elektro-Dienstleistungen-Privatkunden'
          DropdownItem5Heading='Elektro-Dienstleistungen für Privatkunden' 
          DropdownItem5Image={cdImages.image9} 
          DropdownItem5Subheading='Einbau, Austausch und Wartung von Elektrogeräten' 
          DropdownItem5Url='Elektro-Dienstleistungen-Privatkunden' 
        ></Navbar_xl_dropdown_template>

        {/* Offene Stellen */}
        <Link className="flex flex-row items-start" to="/jobs">
          <div className="font-fredoka text-xl font-medium menu-hover" style={{ color: cdColors.secondaryColor }}>
            Offene Stellen
          </div>
        </Link>

        </div>

        </div>        

        <div className="flex flex-row justify-end items-center ">

          <Button_secondary caption="Kontakt" link="Kontakt"></Button_secondary>

          <div className="flex flex-row items-center justify-end">
            <div className="flex flex-row mx-4 text-nowrap items-center justify-end">
              <img className="" src={Phone}></img>
              <div className="text-xl nav-text-color cursor-default" style={{ color: cdColors.secondaryColor}} >+49 12345 6789</div>
            </div>

            <div className="md:hidden">
              <ToggleHamburger></ToggleHamburger>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;