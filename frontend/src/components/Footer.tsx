
import { Link } from "react-router-dom";

import Firmenlogo from '/src/assets/Firmenlogo.svg'
import Button_secondary from "./buttons/button_secondary";

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

function Footer() {
  return (
    <>
      {/* small */} 
      <div className="xl:hidden flex flex-row justify-center items-center bottom-0 w-screen py-4" style={{ backgroundColor: cdColors.primaryColor }}>
        <ul className="flex flex-col nav-text-color justify-center items-center">

          {/* Firmenlogo */}
          <Link to="/" >
            <img className="w-18 -mt-4" src={Firmenlogo} alt="Firmenlogo" onClick={() => setOverlayVisible(!setOverlayVisible)}></img>
          </Link>

          {/* Über uns  */}
          <Link className="" to="/about">
            <div className="text-xl font-medium menu-hover my-2 py-2 mx-2 p-2" style={{ color: cdColors.secondaryColor }}>
              Über uns
            </div>
          </Link>

          {/* Offene Stellen */}
          <Link className="" to="/jobs">
            <div className="text-xl font-medium menu-hover my-2 py-2 mx-2 p-2" style={{ color: cdColors.secondaryColor }}>
                Offene Stellen
              </div>
            </Link>

          {/* Impressum  */}
          <Link className="" to="/impressum">
            <div className="text-xl font-medium menu-hover my-2 py-2 mx-2 p-2" style={{ color: cdColors.secondaryColor }}>
              Impressum
            </div>
          </Link>

          {/* Instagram */}
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <div className="text-xl font-medium menu-hover my-2 py-2 mx-2 p-2" style={{ color: cdColors.secondaryColor }}>
              Instagram
            </div>
          </a>

          {/* Facebook */}
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <div className="text-xl font-medium menu-hover my-2 py-2 mx-2 p-2" style={{ color: cdColors.secondaryColor }}>
              Facebook
            </div>
          </a>

          <li className="">
          <Button_secondary buttonSecondaryCaption="Kontakt" buttonSecondaryLink="about"></Button_secondary>
        </li>
        </ul>
      </div>

        {/* xl */}
        <div className="hidden xl:flex flex-row justify-center items-center bottom-0">
          <div className="flex flex-row justify-center items-center py-4" style={{ backgroundColor: cdColors.primaryColor }}>
            <ul className="flex flex-row justify-center items-center w-screen ">

             {/* Firmenlogo */}
              <li className="">
                <Link to="/">
                  <img className="w-18 -mt-8" src={Firmenlogo} alt="Firmenlogo" />
               </Link>
              </li>

              {/* Über uns  */}
              {/* <Link className="" to="/about">
                <div className="text-xl font-medium menu-hover my-2 py-2 mx-2 p-2" style={{ color: cdColors.secondaryColor }}>
                  Über uns
                </div>
              </Link> */}

              {/* Offene Stellen */}
              <Link className="" to="/jobs">
                <div className="text-xl font-medium menu-hover my-2 py-2 mx-2 p-2" style={{ color: cdColors.secondaryColor }}>
                  Offene Stellen
                </div>
              </Link>

              {/* Impressum  */}
              <Link className="" to="/impressum">
                <div className="text-xl font-medium menu-hover my-2 py-2 mx-2 p-2" style={{ color: cdColors.secondaryColor }}>
                Impressum
                </div>
              </Link>
  
              {/* Instagram */}
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <div className="text-xl font-medium menu-hover my-2 py-2 mx-2 p-2" style={{ color: cdColors.secondaryColor }}>
                  Instagram
                </div>
              </a>

              {/* Facebook */}
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <div className="text-xl font-medium menu-hover my-2 py-2 mx-2 p-2" style={{ color: cdColors.secondaryColor }}>
                  Facebook
                </div>
              </a>

              {/* Kontakt  */}
              {/* <li className="">
              <Button_secondary caption="Kontakt" buttonSecondaryUrl="Kontakt"></Button_secondary>
              </li> */}
              
            </ul>
          </div>
        </div>
    </>
  )
}

export default Footer
