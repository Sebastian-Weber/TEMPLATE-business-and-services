
import { Link } from "react-router-dom";



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
                <div className="text-xl font-medium menu-hover my-2" style={{ color: cdColors.secondaryColor }} >
                    {dropdownCaption}
                </div>
            </Link>
            <div className="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="3" fill="none" className="h-6 w-6 scale-75 mt-1 -ml-2 transform group-hover:rotate-180" style={{ stroke: cdColors.secondaryColor }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </div>

        {/*  Overlay menu */}
        <div className="left-0 top-22 invisible fixed w-screen items-center p-6 justify-start group-hover:visible" style={{ backgroundColor: cdColors.primaryColor, color: cdColors.secondaryColor }}>
            
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

                {/* Menu item 1 */}
                {/* <div className="flex flex-col justify-normal items-start px-6 max-w-72">
                    <Link to={`/${DropdownItem1Url}`}>
                        <img className="h-36 w-64 object-cover" src={DropdownItem1Image}></img>
                        <br></br>
                        <div className="mt-1 block text-xl border-gray-100 font-bold hover:opacity-50">
                            <div className="mt-1 block text-xl border-gray-100 font-bold hover:opacity-50">
                                {DropdownItem1Heading}
                            </div>
                        </div>
                        <div className="mt-1 block border-gray-100 font-semibold  hover:opacity-50">
                            <div className="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                                {DropdownItem1Subheading}
                            </div>
                        </div>
                    </Link>
                </div>   */}

                {/* Menu item 2 */}
                {/* <div className="flex flex-col justify-normal items-start px-6 max-w-72">
                    <Link to={`/${DropdownItem2Url}`}>
                        <img className="h-36 w-64 object-cover" src={DropdownItem2Image}></img>
                        <br></br>
                        <div className="mt-1 block text-xl border-gray-100 font-bold hover:opacity-50">
                            <div className="mt-1 block text-xl border-gray-100 font-bold hover:opacity-50">
                                {DropdownItem2Heading}
                            </div>
                        </div>
                        <div className="mt-1 block border-gray-100 font-semibold  hover:opacity-50">
                            <div className="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                                {DropdownItem2Subheading}
                            </div>
                        </div>
                    </Link>
                </div>   */}

                {/* Menu item 3 */}
                {/* <div className="flex flex-col justify-normal items-start px-6 max-w-72">
                    <Link to={`/${DropdownItem3Url}`}>
                        <img className="h-36 w-64 object-cover" src={DropdownItem3Image}></img>
                        <br></br>
                        <div className="mt-1 block text-xl border-gray-100 font-bold hover:opacity-50">
                            <div className="mt-1 block text-xl border-gray-100 font-bold hover:opacity-50">
                                {DropdownItem3Heading}
                            </div>
                        </div>
                        <div className="mt-1 block border-gray-100 font-semibold  hover:opacity-50">
                            <div className="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                                {DropdownItem3Subheading}
                            </div>
                        </div>
                    </Link>
                </div>   */}
      
                {/* Menu item 4 */}
                {/* <div className="flex flex-col justify-normal items-start px-6 max-w-72">
                    <Link to={`/${DropdownItem4Url}`}>
                        <img className="h-36 w-64 object-cover" src={DropdownItem4Image}></img>
                        <br></br>
                        <div className="mt-1 block text-xl border-gray-100 font-bold hover:opacity-50">
                            <div className="mt-1 block text-xl border-gray-100 font-bold hover:opacity-50">
                                {DropdownItem4Heading}
                            </div>
                        </div>
                        <div className="mt-1 block border-gray-100 font-semibold  hover:opacity-50">
                            <div className="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                                {DropdownItem4Subheading}
                            </div>
                        </div>
                    </Link>
                </div>   */}

                {/* Menu item 5 */}
                {/* <div className="flex flex-col justify-normal items-start px-6 max-w-72">
                    <Link to={`/${DropdownItem5Url}`}>
                        <img className="h-36 w-64 object-cover" src={DropdownItem5Image}></img>
                        <br></br>
                        <div className="mt-1 block text-xl border-gray-100 font-bold hover:opacity-50">
                            <div className="mt-1 block text-xl border-gray-100 font-bold hover:opacity-50">
                                {DropdownItem5Heading}
                            </div>
                        </div>
                        <div className="mt-1 block border-gray-100 font-semibold  hover:opacity-50">
                            <div className="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                                {DropdownItem5Subheading}
                            </div>
                        </div>
                    </Link>
                </div>   */}

            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar_xl_dropdown_template