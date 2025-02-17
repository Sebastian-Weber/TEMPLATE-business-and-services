import { useState } from 'react';
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


  interface NavbarSMDropdownTemplateProps {
    DropdownCaption: string;

    DropdownItem1Heading?: string;
    DropdownItem1Link?: string;
    DropdownItem2Heading?: string;
    DropdownItem2Link?: string;
    DropdownItem3Heading?: string;
    DropdownItem3Link?: string;
    DropdownItem4Heading?: string;
    DropdownItem4Link?: string;
    DropdownItem5Heading?: string;
    DropdownItem5Link?: string;
}


function Expander_sm({ 
  
    DropdownCaption, 

    DropdownItem1Heading, 
    DropdownItem1Link, 

    DropdownItem2Heading, 
    DropdownItem2Link, 

    DropdownItem3Heading, 
    DropdownItem3Link, 

    DropdownItem4Heading, 
    DropdownItem4Link, 

    DropdownItem5Heading, 
    DropdownItem5Link,  
  
  }: NavbarSMDropdownTemplateProps) {

  const [isMenuItem1ExpanderVisible, setMenuItem1ExpanderVisible] = useState(false);
  const toggleMenuItem1Expander = () => {
    setMenuItem1ExpanderVisible(!isMenuItem1ExpanderVisible);
  };


  const [isOpen, setIsOpen] = useState(false);
  const [isOverlayVisible, setOverlayVisible] = useState(false);



  return (
      <>
        {/* Expander */}
        <div className="flex flex-row menu-hover cursor-pointer " onClick={toggleMenuItem1Expander}>
          <div className="font-semibold" style={{ color:cdColors.secondaryBackgroundColorLight}}>{DropdownCaption}</div>
            <div className="ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 scale-75 pt-1 -ml-2 hover:rotate-180"  viewBox="0 0 24 24" strokeWidth="3" fill="none" style={{ stroke: cdColors.secondaryBackgroundColorLight }} >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
          </div>
        </div>
        <div className={`relative ${isMenuItem1ExpanderVisible ? 'block' : 'hidden'}`}>
          <div className="flex flex-col ">
              <ul>
                <Link to={`${DropdownItem1Link}`}>
                  <li className="-py-6 px-4 font-semibold cursor-pointer" onClick={() => { setIsOpen(isOpen); setOverlayVisible(!isOverlayVisible); }} style={{ color:cdColors.secondaryBackgroundColorLight}}>{DropdownItem1Heading}</li>
                </Link>
                <Link to={`${DropdownItem2Link}`}>
                  <li className="-py-6 px-4 font-semibold cursor-pointer" onClick={() => { setIsOpen(isOpen); setOverlayVisible(!isOverlayVisible); }} style={{ color:cdColors.secondaryBackgroundColorLight}}>{DropdownItem2Heading}</li>
                </Link>
                <Link to={`${DropdownItem3Link}`}>
                  <li className="-py-6 px-4 font-semibold cursor-pointer" onClick={() => { setIsOpen(isOpen); setOverlayVisible(!isOverlayVisible); }} style={{ color:cdColors.secondaryBackgroundColorLight}}>{DropdownItem3Heading}</li>
                </Link>
                <Link to={`${DropdownItem4Link}`}>
                  <li className="-py-6 px-4 font-semibold cursor-pointer" onClick={() => { setIsOpen(isOpen); setOverlayVisible(!isOverlayVisible); }} style={{ color:cdColors.secondaryBackgroundColorLight}}>{DropdownItem4Heading}</li>
                </Link>
                <Link to={`${DropdownItem5Link}`}>
                  <li className="-py-6 px-4 font-semibold cursor-pointer" onClick={() => { setIsOpen(isOpen); setOverlayVisible(!isOverlayVisible); }} style={{ color:cdColors.secondaryBackgroundColorLight}}>{DropdownItem5Heading}</li>
                </Link>
              </ul>
            </div>
        </div>
     </>
    )
}

export default Expander_sm