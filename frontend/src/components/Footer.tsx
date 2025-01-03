
import { Link } from "react-router-dom";

import Firmenlogo from '/src/assets/Firmenlogo.svg'
import Button_secondary from "./buttons/button_secondary";

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


function Footer() {
  return (
    <>
      {/* small */} 
      <div className="xl:hidden flex flex-row justify-center items-center bottom-0 w-screen py-4" style={{ backgroundColor: cdColors.primaryColor }}>
        <ul className="flex flex-col nav-text-color justify-center items-center">
            <img className="w-18 -mt-4" src={Firmenlogo} alt="Firmenlogo"></img>

          <Link className="" to="/about">
            <div className="text-xl font-medium menu-hover my-2 py-2 mx-2 p-2" style={{ color: cdColors.secondaryBackgroundColorLight }}>
              Über uns
            </div>
          </Link>

          {/* Offene Stellen */}
          <Link className="" to="/jobs">
            <div className="text-xl font-medium menu-hover my-2 py-2 mx-2 p-2" style={{ color: cdColors.secondaryBackgroundColorLight }}>
                Offene Stellen
              </div>
            </Link>

          {/* Impressum  */}
          <Link className="" to="/impressum">
            <div className="text-xl font-medium menu-hover my-2 py-2 mx-2 p-2" style={{ color: cdColors.secondaryBackgroundColorLight }}>
              Impressum
            </div>
          </Link>

          {/* Instagram */}
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <div className="text-xl font-medium menu-hover my-2 py-2 mx-2 p-2" style={{ color: cdColors.secondaryBackgroundColorLight }}>
              Instagram
            </div>
          </a>

          {/* Facebook */}
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <div className="text-xl font-medium menu-hover my-2 py-2 mx-2 p-2" style={{ color: cdColors.secondaryBackgroundColorLight }}>
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
                  <img className="w-18 -mt-7" src={Firmenlogo} alt="Firmenlogo" />
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
                <div className="text-xl font-medium menu-hover my-2 py-2 mx-2 p-2" style={{ color: cdColors.secondaryBackgroundColorLight }}>
                  Offene Stellen
                </div>
              </Link>

              {/* Impressum  */}
              <Link className="" to="/impressum">
                <div className="text-xl font-medium menu-hover my-2 py-2 mx-2 p-2" style={{ color: cdColors.secondaryBackgroundColorLight }}>
                Impressum
                </div>
              </Link>
  
              {/* Instagram */}
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <div className="text-xl font-medium menu-hover my-2 py-2 mx-2 p-2" style={{ color: cdColors.secondaryBackgroundColorLight }}>
                  Instagram
                </div>
              </a>

              {/* Facebook */}
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <div className="text-xl font-medium menu-hover my-2 py-2 mx-2 p-2" style={{ color: cdColors.secondaryBackgroundColorLight }}>
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
