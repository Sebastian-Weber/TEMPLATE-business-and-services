
import { Link } from "react-router-dom";

import Firmenlogo from '/src/assets/Firmenlogo.svg'
import Button_secondary from "./buttons/button_secondary";

import cdColors from '../utils/cdColors';



function Footer() {
  return (
    <>
      {/* small */} 
      <div className="lg:hidden flex flex-row justify-center items-center bottom-0 w-screen py-4" style={{ backgroundColor: cdColors.primaryColor }}>
        <ul className="flex flex-col nav-text-color justify-center items-center">

          {/* Firmenlogo */}
          <div className="">
            <Link to="/">
              <img className="w-18 -mt-4" src={Firmenlogo} alt="Firmenlogo" />
            </Link>
          </div>
         
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
        <div className="hidden lg:flex flex-row justify-center items-center bottom-0">
          <div className="flex flex-row justify-center items-center py-4" style={{ backgroundColor: cdColors.primaryColor }}>
            <ul className="flex flex-row justify-center items-center w-screen ">

             {/* Firmenlogo */}
                <Link to="/">
                  <img className="w-18 -mt-7" src={Firmenlogo} alt="Firmenlogo" />
               </Link>

            {/* Über uns  */}
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
