import { useState } from 'react';
import { Link } from 'react-router-dom';

import Firmenlogo from '/src/assets/Firmenlogo.svg'
import Phone from '/src/assets/icons/Phone.svg'

import ToggleHamburger from './toggles/toggle_hamburger';
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
  image20: '/src/assets/images/jimmy-nilsson-masth-CskQi7DDUuY-unsplash.jpg',
  image21: '/src/assets/images/thisisengineering-q9yJE97A44Q-unsplash.jpg',
  image22: '/src/assets/images/sol-tZw3fcjUIpM-unsplash.png',
  image23: '/src/assets/images/frames-for-your-heart-iOLHAIaxpDA-unsplash.jpg',
  image24: '/src/assets/images/jimmy-nilsson-masth-hrIpsXkrAO0-unsplash.png',
  image25: '/src/assets/images/markus-spiske-rNn_TU8dvoY-unsplash.png',
  image26: '/src/assets/images/kumpan-electric-AjNgSvEt-v4-unsplash.jpg',
  image27: '/src/assets/images/smart-me-ag-j2E-2YQe_c8-unsplash.jpg',
  image28: '/src/assets/images/waldemar-rHfTdK9YU2Q-unsplash.jpg',
  image29: '/src/assets/images/markus-spiske-LIi9tSIKoYQ-unsplash.jpg',
  image30: '/src/assets/images/jakub-zerdzicki-uxYLtGRyGKQ-unsplash.jpg',
  image31: '/src/assets/images/claudio-schwarz-sLfUA03zaOk-unsplash.jpg',
  image32: '/src/assets/images/jakub-zerdzicki-uxYLtGRyGKQ-unsplash.jpg',
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

   const dropdownItems = [
    {
      heading: 'Home',
      subheading: 'Welcome to our homepage',
      url: 'home',
      image: '/path/to/home-image.jpg',
    },
    {
      heading: 'About',
      subheading: 'Learn more about us',
      url: 'about',
      image: '/path/to/about-image.jpg',
    },
    {
      heading: 'Services',
      subheading: 'Discover our services',
      url: 'services',
      image: '/path/to/services-image.jpg',
    },
    {
      heading: 'Contact',
      subheading: 'Get in touch with us',
      url: 'contact',
      image: '/path/to/contact-image.jpg',
    },
    {
      heading: 'Blog',
      subheading: 'Read our latest posts',
      url: 'blog',
      image: '/path/to/blog-image.jpg',
    },
  ];

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
          <img className="w-18 -mt-8" src={Firmenlogo} alt="Firmenlogo" onClick={() => setOverlayVisible(!setOverlayVisible)}></img>
        </Link>   

        <div className="flex flex-row justify-end items-center ">

        <Button_secondary buttonSecondaryCaption="Kontakt" buttonSecondaryLink="kontakt"></Button_secondary>

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
          <img className="w-18 -mt-8"  src={Firmenlogo} alt="Firmenlogo" onClick={() => setOverlayVisible(!setOverlayVisible)}></img>
        </Link>

        <div className="flex flex-row justify-start items-center mx-4">

        {/* Ueber uns  */}
        <Link className="" to="/about">
          <div className="text-xl font-medium menu-hover mx-2 px-2" style={{ color: cdColors.secondaryColor }}>
            Über uns
          </div>
        </Link>

        <Navbar_xl_dropdown_template 
          dropdownCaption='Leistungen'
          dropdownItems={[
            {
              image: cdImages.image3,
              heading: 'Elektro-Dienstleistungen für Privatkunden',
              subheading: 'Elektroinstallationen für Ihr Zuhause',
              url: 'Elektro-Dienstleistungen-Privatkunden'
            },
            {
              image: cdImages.image17,
              heading: 'Elektro-Dienstleistungen für Gewerbekunden',
              subheading: 'Einbau, Austausch und Wartung',
              url: 'Elektro-Dienstleistungen-Gewerbekunden'
            },
            {
              image: cdImages.image30,
              heading: 'Smart-Home Lösungen',
              subheading: 'Smart-Home Lösungen für Ihr Zuhause',
              url: 'Smart-Home-Loesungen'
            },
            {
              image: cdImages.image31,
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
              subheading: '...',
              url: 'Elektro-Dienstleistungen-Privatkunden'
            },
            {
              image: cdImages.image24,
              heading: 'Solaranlagen-Installation',
              subheading: '...',
              url: 'Elektro-Dienstleistungen-Gewerbekunden'
            },
            {
              image: cdImages.image18,
              heading: 'Energieeffiziente Beleuchtung',
              subheading: '...',
              url: 'Smart-Home-Loesungen'
            },
            {
              image: cdImages.image28,
              heading: 'Ladestationen für E-Fahrzeuge',
              subheading: '...',
              url: 'Lichtdesign-und-Installation'
            },
            // {
            //   image: cdImages.image4,
            //   heading: 'Notfallreparaturen',
            //   subheading: 'Notfallreparaturen',
            //   url: 'Notfallreparaturen'
            // }
          ]}
        ></Navbar_xl_dropdown_template>

        {/* <Navbar_xl_dropdown_template 
          dropdownCaption='Nachhaltigkeit & Energielösungen'
          DropdownItem1Heading='Photovoltaik-Anlagen' 
          DropdownItem1Image={cdImages.image25} 
          DropdownItem1Subheading='...' 
          DropdownItem1Url='Elektro-Dienstleistungen-Privatkunden'
          DropdownItem2Heading='Solaranlagen-Installation' 
          DropdownItem2Image={cdImages.image24} 
          DropdownItem2Subheading='...' 
          DropdownItem2Url=''  
          DropdownItem3Heading='Energieeffiziente Beleuchtung' 
          DropdownItem3Image={cdImages.image18} 
          DropdownItem3Subheading='...' 
          DropdownItem3Url=''
          DropdownItem4Heading='Ladestationen für E-Fahrzeuge' 
          DropdownItem4Image={cdImages.image28} 
          DropdownItem4Subheading='...' 
          DropdownItem4Url=''
          DropdownItem5Heading='' 
          DropdownItem5Image={''} 
          DropdownItem5Subheading='' 
          DropdownItem5Url='' 
        ></Navbar_xl_dropdown_template> */}

        {/* Offene Stellen */}
        <Link className="flex flex-row items-start" to="/jobs">
          <div className="font-fredoka text-xl font-medium menu-hover" style={{ color: cdColors.secondaryColor }}>
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