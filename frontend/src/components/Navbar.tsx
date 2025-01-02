
import { Link } from 'react-router-dom';
import { useState } from 'react';

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
  image31: '/src/assets/images/alpha-innotec--nbWCvUiFJA-unsplash.jpg',
  image32: '/src/assets/images/jakub-zerdzicki-uxYLtGRyGKQ-unsplash.jpg',
  image33: '/src/assets/images/vivint-solar-9CalgkSRZb8-unsplash.jpg',
  image34: '/src/assets/images/austin-distel-wawEfYdpkag-unsplash.jpg',
  image35: '/src/assets/images/naomi-hebert-MP0bgaS_d1c-unsplash.jpg',
  image36: '/src/assets/images/claudio-schwarz-sLfUA03zaOk-unsplash.jpg',
  image37: '/src/assets/images/ben-kolde-FaPxZ88yZrw-unsplash.jpg',
  image38: '/src/assets/images/andrew-neel-cckf4TsHAuw-unsplash.jpg',
  image39: '/src/assets/images/claudio-schwarz-sLfUA03zaOk-unsplash.jpg',
  image40: '/src/assets/images/thisisengineering-WjOWazUPAss-unsplash.jpg',
  

  card1Image: '/src/assets/images/Privatkunden.svg',
  card2Image: '/src/assets/images/Geschaeftskunden.svg',
  card3Image: '/src/assets/images/Smart-Home-Loesungen.svg',
  card4Image: '/src/assets/images/Lichtinstallation.svg',

};

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


const Navbar = () => {
  const setOverlayVisible = useState(false)[1];

  


  //  const dropdownItems = [
  //   {
  //     heading: 'Home',
  //     subheading: 'Welcome to our homepage',
  //     url: 'home',
  //     image: '/path/to/home-image.jpg',
  //   },
  //   {
  //     heading: 'About',
  //     subheading: 'Learn more about us',
  //     url: 'about',
  //     image: '/path/to/about-image.jpg',
  //   },
  //   {
  //     heading: 'Services',
  //     subheading: 'Discover our services',
  //     url: 'services',
  //     image: '/path/to/services-image.jpg',
  //   },
  //   {
  //     heading: 'Contact',
  //     subheading: 'Get in touch with us',
  //     url: 'contact',
  //     image: '/path/to/contact-image.jpg',
  //   },
  //   {
  //     heading: 'Blog',
  //     subheading: 'Read our latest posts',
  //     url: 'blog',
  //     image: '/path/to/blog-image.jpg',
  //   },
  // ];

  return (
    <>
      {/* small */}
      <div className="fixed md:hidden flex flex-row justify-between items-center w-full py-5 px-10" style={{ backgroundColor: cdColors.primaryColor }}>
        
        {/* Firmenlogo */}
        <Link to="/" >
        </Link>
      
          <div className="">
            <ToggleHamburger></ToggleHamburger>
          </div>

      </div>

      {/* Medium */}
      <div className="fixed hidden md:flex flex-row justify-between items-center w-screen py-5 px-10" style={{ backgroundColor: cdColors.primaryColor }}>

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

        <div className="flex flex-row justify-start items-center mx-4">

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