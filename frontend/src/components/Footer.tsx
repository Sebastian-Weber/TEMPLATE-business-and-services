
import { Link } from "react-router-dom";

import Firmenlogo from '/src/assets/Firmenlogo.svg'
import Button_secondary from "./buttons/button_secondary";

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
          <Link className="" to="/about">
            <div className="text-xl font-medium menu-hover my-2 py-2 mx-2 p-2" style={{ color: cdColors.secondaryColor }}>
              Offene Stellen
            </div>
          </Link>

          {/* Impressum  */}
          <Link className="" to="/about">
            <div className="text-xl font-medium menu-hover my-2 py-2 mx-2 p-2" style={{ color: cdColors.secondaryColor }}>
            Impressum
            </div>
          </Link>

          {/* Instagram  */}
          <Link className="" to="/about">
            <div className="text-xl font-medium menu-hover my-2 py-2 mx-2 p-2" style={{ color: cdColors.secondaryColor }}>
            Instagram
            </div>
          </Link>

          {/* Facebook  */}
          <Link className="" to="/about">
            <div className="text-xl font-medium menu-hover my-2 py-2 mx-2 p-2" style={{ color: cdColors.secondaryColor }}>
            Facebook
            </div>
          </Link>

          <li className="">
          <Button_secondary caption="Kontakt" buttonSecondaryUrl="Kontakt"></Button_secondary>
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
                  <img className="w-18 -mt-4" src={Firmenlogo} alt="Firmenlogo" />
               </Link>
              </li>

              {/* Über uns  */}
              {/* <Link className="" to="/about">
                <div className="text-xl font-medium menu-hover my-2 py-2 mx-2 p-2" style={{ color: cdColors.secondaryColor }}>
                  Über uns
                </div>
              </Link> */}

              {/* Offene Stellen */}
              <Link className="" to="/about">
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

              {/* Instagram  */}
              <Link className="" to="/about">
                <div className="text-xl font-medium menu-hover my-2 py-2 mx-2 p-2" style={{ color: cdColors.secondaryColor }}>
                Instagram
                </div>
              </Link>
  
              {/* Instagram  */}
              <Link className="" to="/about">
                <div className="text-xl font-medium menu-hover my-2 py-2 mx-2 p-2" style={{ color: cdColors.secondaryColor }}>
                Facebook
                </div>
              </Link>

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
