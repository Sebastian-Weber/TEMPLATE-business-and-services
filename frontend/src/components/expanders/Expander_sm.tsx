import { useState } from 'react';
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


  interface NavbarSMDropdownTemplateProps {
    DropdownCaption: string;

    DropdownItem1Heading: string;
    DropdownItem1Link: string;
    DropdownItem2Heading: string;
    DropdownItem2Link: string;
    DropdownItem3Heading: string;
    DropdownItem3Link: string;
    DropdownItem4Heading: string;
    DropdownItem4Link: string;
    DropdownItem5Heading: string;
    DropdownItem5Link: string;
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


  // const navbarSmallDropdownItems = [
  //   // Item 1
  //   {
  //   DropdownItem1Heading: 'Elektro-Dienstleistungen für Privatkunden',
  //   DropdownItem1Link: 'Elektro-Dienstleistungen-Privatkunden',
  //   },
  //   // Item 2
  //   {
  //   DropdownItem2Heading: 'Elektro-Dienstleistungen für Privatkunden',
  //   DropdownItem2Link: 'Elektro-Dienstleistungen-Privatkunden',
  //   },
  //   // Item 3
  //   {
  //   DropdownItem3Heading: 'Elektro-Dienstleistungen für Privatkunden',
  //   DropdownItem3Link: 'Elektro-Dienstleistungen-Privatkunden',
  //   },
  //   // Item 4
  //   {
  //   DropdownItem4Heading: 'Elektro-Dienstleistungen für Privatkunden',
  //   DropdownItem4Link: 'Elektro-Dienstleistungen-Privatkunden',
  //   },
  //   // Item 5
  //   {
  //   DropdownItem5Heading: 'Elektro-Dienstleistungen für Privatkunden',
  //   DropdownItem5Link: 'Elektro-Dienstleistungen-Privatkunden',

  //    },
  // ];

  return (
      <>
        {/* Expander */}
        <div className="flex flex-row menu-hover cursor-pointer" onClick={toggleMenuItem1Expander}>
          <div className="" style={{ color:cdColors.secondaryColor}}>{DropdownCaption}</div>
            <div className="ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 scale-75 pt-1 -ml-2 hover:rotate-180"  viewBox="0 0 24 24" strokeWidth="3" fill="none" style={{ stroke: cdColors.secondaryColor }} >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
          </div>
        </div>
        <div className={`relative ${isMenuItem1ExpanderVisible ? 'block' : 'hidden'}`}>
          <div className="flex flex-col ">
              <ul>
                <Link to={`${DropdownItem1Link}`}>
                  <li className="-py-6 px-4 cursor-pointer" onClick={() => { setIsOpen(isOpen); setOverlayVisible(!isOverlayVisible); }} style={{ color:cdColors.secondaryColor}}>{DropdownItem1Heading}</li>
                </Link>
                <Link to={`${DropdownItem2Link}`}>
                  <li className="-py-6 px-4 cursor-pointer" onClick={() => { setIsOpen(isOpen); setOverlayVisible(!isOverlayVisible); }} style={{ color:cdColors.secondaryColor}}>{DropdownItem2Heading}</li>
                </Link>
                <Link to={`${DropdownItem3Link}`}>
                  <li className="-py-6 px-4 cursor-pointer" onClick={() => { setIsOpen(isOpen); setOverlayVisible(!isOverlayVisible); }} style={{ color:cdColors.secondaryColor}}>{DropdownItem3Heading}</li>
                </Link>
                <Link to={`${DropdownItem4Link}`}>
                  <li className="-py-6 px-4 cursor-pointer" onClick={() => { setIsOpen(isOpen); setOverlayVisible(!isOverlayVisible); }} style={{ color:cdColors.secondaryColor}}>{DropdownItem4Heading}</li>
                </Link>
                <Link to={`${DropdownItem5Link}`}>
                  <li className="-py-6 px-4 cursor-pointer" onClick={() => { setIsOpen(isOpen); setOverlayVisible(!isOverlayVisible); }} style={{ color:cdColors.secondaryColor}}>{DropdownItem5Heading}</li>
                </Link>
              </ul>
            </div>
        </div>
     </>
    )
}

export default Expander_sm