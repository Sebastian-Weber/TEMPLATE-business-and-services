import { useState } from 'react';
import { Link } from 'react-router-dom';

import Firmenlogo from '/src/assets/Firmenlogo.svg'
import Phone from '/src/assets/Phone.svg'

import ToggleHamburger from './buttons/toggle_hamburger';
import Button_primary from './buttons/button_primary';
import Button_secondary from './buttons/button_secondary';
import Navbar_xl_dropdown_template from './dropdowns/Navbar_xl_dropdown_template';

const cdImages = {
  image1: '/src/assets/images/vishnu-mohanan-qso4MyFvhNc-unsplash.jpg',
  image2: '/src/assets/images/mohamed-marey-M9mRKGW9L30-unsplash.jpg',
  image3: '/src/assets/images/james-sandbrook-h0-lwHj7heI-unsplash.jpg',
  image4: '/src/assets/images/mika-baumeister-dp9AxaKHdVg-unsplash.png',
  image5: '/src/assets/images/steve-johnson-hokONTrHIAQ-unsplash.jpg',
  image6: '/src/assets/images/david-dvoracek-2kWxMl5IWTA-unsplash.jpg',
  image7: '/src/assets/images/neven-krcmarek-67FG6zD8WPQ-unsplash.png',

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
          {/* <Button_secondary caption="Mehr erfahren" buttonSecondaryUrl="About"></Button_secondary> */}

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

        <Button_secondary caption="Mehr erfahren" buttonSecondaryUrl="About"></Button_secondary>

          <div className="flex flex-row items-center justify-end">



          <div className="flex flex-row mx-4 text-nowrap items-center justify-end">
            <img className="" src={Phone}></img>
            <div className="text-xl nav-text-color cursor-default" style={{ color: cdColors.secondaryColor}} >+49 12345 6789</div>
          </div>
          {/* <Button_secondary caption="Mehr erfahren" buttonSecondaryUrl="About"></Button_secondary> */}

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
          <img className="w-18 -mt-10" src={Firmenlogo} alt="Firmenlogo" onClick={() => setOverlayVisible(!setOverlayVisible)}></img>
        </Link>

        <div className="flex flex-row justify-start items-center mx-4">

        {/* Ueber uns  */}
        <Link className="" to="/about">
          <div className="text-xl font-medium menu-hover my-2 py-2 mx-2 p-2" style={{ color: cdColors.secondaryColor }}>
            Über uns
          </div>
        </Link>

        <Navbar_xl_dropdown_template DropdownCaption='Leistungen' DropdownItem1Heading='Test_Item_1' DropdownItem1Image={cdImages.image1} DropdownItem1Subheading='Test_Item_1_Subheading' DropdownItem1Url='Elektro-Dienstleistungen-Privatkunden' caption='Placeholder'></Navbar_xl_dropdown_template>
        <Navbar_xl_dropdown_template DropdownCaption='Energielösungen' DropdownItem1Heading='Geschäftskunden_Test_Item_1' DropdownItem1Image={cdImages.image1} DropdownItem1Subheading='Test_Item_1_Subheading' DropdownItem1Url='Test_Item_1' caption='Placeholder'></Navbar_xl_dropdown_template>

        <Link className="flex flex-row items-start" to="/about">
          <div className="font-fredoka text-xl font-medium menu-hover" style={{ color: cdColors.secondaryColor }}>
            Jobs
          </div>
        </Link>

        </div>

        </div>        

        <div className="flex flex-row justify-end items-center ">

          <Button_secondary caption="Mehr erfahren" buttonSecondaryUrl="About"></Button_secondary>

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