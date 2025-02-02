
import { Link } from 'react-router-dom';
import { useState } from 'react';

import Firmenlogo from '/src/assets/Firmenlogo.svg'
import Phone from '/src/assets/icons/Phone.svg'

import ToggleHamburger from './toggles/toggle_hamburger';
import Button_secondary from './buttons/button_secondary';
import Navbar_xl_dropdown_template from './dropdowns/navbar_xl_dropdown_template';

import cdImages from '../utils/cdImages';
import cdColors from '../utils/cdColors';


const Navbar = () => {
  const setOverlayVisible = useState(false)[1];

  
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
      <div className="fixed hidden md:flex flex-row justify-between items-center w-full py-5 px-10" style={{ backgroundColor: cdColors.primaryColor }}>

          {/* Firmenlogo */}
          <Link to="/" >
            <img className="w-18 -mt-6" src={Firmenlogo} alt="Firmenlogo" onClick={() => setOverlayVisible(!setOverlayVisible)}></img>
          </Link> 

        <div className="flex flex-row justify-end items-center ">

          <div className="flex flex-row mx-4 text-nowrap items-center justify-end">
              <img className="" src={Phone}></img>
            <div className="text-xl nav-text-color cursor-default" style={{ color: cdColors.secondaryBackgroundColorLight}} >+49 12345 6789</div>
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
            <img className="w-18 -mt-8" src={Firmenlogo} alt="Firmenlogo" onClick={() => setOverlayVisible(!setOverlayVisible)}></img>
          </Link>

        <div className="flex flex-row justify-end items-center ">

        <Button_secondary buttonSecondaryCaption="Kontakt" buttonSecondaryLink="kontakt"></Button_secondary>

          <div className="flex flex-row items-center justify-end">

            <div className="flex flex-row mx-4 text-nowrap items-center justify-end">
              <img className="" src={Phone}></img>
              <div className="text-xl cursor-default" style={{ color: cdColors.secondaryBackgroundColorLight}}>+49 12345 6789</div>
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

        <Link to="/" >
          <img className="w-18 -mt-8"  src={Firmenlogo} alt="Firmenlogo" onClick={() => setOverlayVisible(!setOverlayVisible)}></img>
        </Link>

        <div className="flex flex-row mx-4 justify-start items-center ">

        {/* Ueber uns  */}
        <Link className="" to="/about">
          <div className="text-xl font-medium menu-hover mx-2 px-2" style={{ color: cdColors.secondaryBackgroundColorLight }}>
            Über uns
          </div>
        </Link>

        <Navbar_xl_dropdown_template 
          dropdownCaption='Leistungen'
          dropdownItems={[
            {
              image: cdImages.image33,
              heading: 'Elektro-Dienstleistungen für Privatkunden',
              subheading: 'Elektroinstallationen für Ihr Zuhause',
              url: 'Elektro-Dienstleistungen-Privatkunden'
            },
            {
              image: cdImages.image40,
              heading: 'Elektro-Dienstleistungen für Gewerbekunden',
              subheading: 'Einbau, Austausch und Wartung',
              url: 'Elektro-Dienstleistungen-Gewerbekunden'
            },
            {
              image: cdImages.image32,
              heading: 'Smart-Home Lösungen',
              subheading: 'Smart-Home Lösungen für Ihr Zuhause',
              url: 'Smart-Home-Loesungen'
            },
            {
              image: cdImages.image36,
              heading: 'Lichtdesign und -installation',
              subheading: 'Lichtdesign und -installation',
              url: 'Lichtdesign-und-Installation'
            },
            {
              image: cdImages.image4,
              heading: 'Notfallreparaturen',
              subheading: 'Notfallreparaturen',
              url: 'Notfallreparaturen'
            }
          ]}
        ></Navbar_xl_dropdown_template>
        <Navbar_xl_dropdown_template 
          dropdownCaption='Nachhaltigkeit & Energielösungen'
          dropdownItems={[
            {
              image: cdImages.image25,
              heading: 'Photovoltaik-Anlagen',
              subheading: 'Einbau, Austausch und Wartung',
              url: 'Photovoltaik-Anlagen'
            },
            {
              image: cdImages.image24,
              heading: 'Solaranlagen-Installation',
              subheading: 'Einbau, Austausch und Wartung',
              url: 'Solaranlagen-Installation'
            },
            {
              image: cdImages.image18,
              heading: 'Energieeffiziente Beleuchtung',
              subheading: 'Lichtdesign und -installation',
              url: 'Energieeffiziente-Beleuchtung'
            },
            {
              image: cdImages.image28,
              heading: 'Ladestationen für E-Fahrzeuge',
              subheading: 'Lichtdesign und -installation',
              url: 'Ladestationen-fuer-E-Fahrzeuge'
            },
            // {
            //   image: cdImages.image4,
            //   heading: 'Notfallreparaturen',
            //   subheading: 'Notfallreparaturen',
            //   url: 'Notfallreparaturen'
            // }
          ]}
        ></Navbar_xl_dropdown_template>


        {/* Offene Stellen */}
        <Link className="flex flex-row items-start" to="/jobs">
          <div className="font-fredoka text-xl font-medium menu-hover" style={{ color: cdColors.secondaryBackgroundColorLight }}>
            Offene Stellen
          </div>
        </Link>

        </div>

        </div>        

        <div className="flex flex-row justify-end items-center ">

        <Button_secondary buttonSecondaryCaption="Kontakt" buttonSecondaryLink="#kontakt"></Button_secondary>

          <div className="flex flex-row items-center justify-end">
            <div className="flex flex-row mx-4 text-nowrap items-center justify-end">
              <img className="" src={Phone}></img>
              <div className="text-xl nav-text-color cursor-default" style={{ color: cdColors.secondaryBackgroundColorLight}} >+49 12345 6789</div>
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