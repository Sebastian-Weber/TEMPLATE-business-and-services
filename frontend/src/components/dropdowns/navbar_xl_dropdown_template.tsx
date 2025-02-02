
import { Link } from "react-router-dom";

import cdColors from '../../utils/cdColors';

  interface NavbarXlDropdownTemplateProps {
    dropdownCaption: string;
    dropdownItems: {
      heading: string;
      subheading: string;
      url: string;
      image: string;
    }[];
  }
  
  const Navbar_xl_dropdown_template: React.FC<NavbarXlDropdownTemplateProps> = ({ dropdownCaption, dropdownItems }) => {
    return (
    <>

    {/* Dropdown Template */}
    <div className="relative group cursor-pointer mx-2">

        <div className="relative flex flex-row items-center justify-between">
            <Link to="">
                <div className="text-xl font-medium menu-hover my-2" style={{ color: cdColors.secondaryBackgroundColorLight }} >
                    {dropdownCaption}
                </div>
            </Link>
            <div className="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="3" fill="none" className="h-6 w-6 scale-75 mt-1 -ml-2 transform group-hover:rotate-180" style={{ stroke: cdColors.secondaryBackgroundColorLight }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </div>

        {/*  Overlay menu */}
        <div className="left-0 top-22 invisible fixed w-screen items-center p-6 justify-start group-hover:visible" style={{ backgroundColor: cdColors.primaryColor, color: cdColors.secondaryBackgroundColorLight }}>
            
            <div className="flex flex-row justify-evenly items-start">

            {dropdownItems.map((item, index) => (
          <div key={index} className="flex flex-col justify-normal items-start px-6 max-w-72">
            <Link to={`/${item.url}`}>
              <img className="h-36 w-64 object-cover" src={item.image} alt={item.heading} />
              <br />
              <div className="mt-1 block text-xl border-gray-100 font-bold hover:opacity-50">
                <div className="mt-1 block text-xl border-gray-100 font-bold hover:opacity-50">
                  {item.heading}
                </div>
              </div>
              <div className="mt-1 block border-gray-100 font-semibold hover:opacity-50">
                <div className="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                  {item.subheading}
                </div>
              </div>
            </Link>
          </div>
        ))}

            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar_xl_dropdown_template