
import { Link } from "react-router-dom";

// image resources
import Placeholder from '/src/assets/images/Placeholder.png'


const Navbar_XL_dropdown_items = [
    // Item 1
    {
    item_1_image: Placeholder,
    item_1_heading: '1 Placeholder',
    item_1_subheading: '1 Placeholder',
    },
    // Item 2
    {
    item_2_image: Placeholder,
    item_2_heading: '2 Placeholder',
    item_2_subheading: '2 VPlaceholder',
    },
    // Item 3
    {
    item_3_image: Placeholder,
    item_3_heading: '3 Placeholder',
    item_3_subheading: '3 Placeholder',
    },
    // Item 4
    {
    item_4_image: Placeholder,
    item_4_heading: '4 Placeholder',
    item_4_subheading: '4 Placeholder',
    },
    // Item 5
    {
    item_5_image: Placeholder,
    item_5_heading: '5 Placeholder',
    item_5_subheading: '5 Placeholder',
     },
  ];




interface NavbarXlDropdownTemplateProps {
    name: string;
  
    caption: string;
}

function Navbar_xl_dropdown_template({ name }: NavbarXlDropdownTemplateProps)  {
  return (
    <>

    {/* Indoor services Dropdown */}
    <div className="relative group cursor-pointer mx-2">

        <div className="relative flex flex-row items-center justify-between nav-bg-color my-2">
            <Link to="/Themenseite1">
            <div className="font-fredoka text-xl font-medium menu-hover my-2 py-2 nav-text-color">
                    {name}
                </div>
            </Link>
            <div className="px-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="FBEBC0" viewBox="0 0 24 24" strokeWidth="3" stroke="#FBEBC0" className="h-6 w-6 scale-75 mt-1 -ml-2 transform group-hover:rotate-180">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </div>

        {/*  Overlay menu */}
        <div className="left-0 py-6 px-12 invisible fixed w-full nav-bg-color items-center justify-start text-gray-800 group-hover:visible">
            
            <div className="flex flex-row justify-evenly items-start">

                {/* Menu item 1 */}
                <div className="flex flex-col justify-normal items-start px-6 max-w-72">
                    <Link to="/valid-path-1">
                    {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                        <img key={index} className="w-64 h-auto" src={Dropdownitem.item_1_image}></img>
                    ))}
                    </Link>
                    <br></br>
                    <Link to="#">
                        <div className="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <div key={index} className="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_1_heading}
                            </div>
                            ))}
                        </div>
                    </Link>
                    <Link to="#">
                        <div className="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <div key={index} className="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_1_subheading}
                            </div>
                            ))}
                        </div>
                    </Link>
                </div>  

                {/* Menu item 2 */}
                <div className="flex flex-col justify-normal items-start px-6 max-w-72">
                    <Link to="/">
                        {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <img key={index} className="w-64 h-auto" src={Dropdownitem.item_2_image}></img>
                        ))}
                    </Link>
                    <br></br>
                    <Link to="/valid-path-2">
                        <div className="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <div key={index} className="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_2_heading}
                            </div>
                            ))}
                        </div>
                    </Link>
                    <Link to="#">
                        <div className="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <div key={index} className="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_2_subheading}
                            </div>
                            ))}
                        </div>
                    </Link>
                </div>

                {/* Menu item 3 */}
                <div className="flex flex-col justify-normal items-start px-6 max-w-72">
                <Link to="/">
                        {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <img key={index} className="w-64 h-auto" src={Dropdownitem.item_3_image}></img>
                        ))}
                    </Link>
                    <br></br>
                    <Link to="#">
                        <div className="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <div key={index} className="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_3_heading}
                            </div>
                            ))}
                        </div>
                    </Link>
                    <Link to="#">
                        <div className="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <div key={index} className="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_3_subheading}
                            </div>
                            ))}
                        </div>
                    </Link>
                </div>
      
                {/* Menu item 4 */}
                <div className="flex flex-col justify-normal items-start px-6 max-w-72">
                <Link to="/">
                        {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <img key={index} className="w-64 h-auto" src={Dropdownitem.item_4_image}></img>
                        ))}
                    </Link>
                    <br></br>
                    <Link to="#">
                        <div className="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <div key={index} className="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_4_heading}
                            </div>
                            ))}
                        </div>
                    </Link>
                    <Link to="#">
                        <div className="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <div key={index} className="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_4_subheading}
                            </div>
                            ))}
                        </div>
                    </Link>
                </div>

                {/* Menu item 4 */}
                <div className="flex flex-col justify-normal items-start px-6 max-w-72">
                <Link to="/">
                        {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <img key={index} className="w-64 h-auto" src={Dropdownitem.item_5_image}></img>
                        ))}
                    </Link>
                    <br></br>
                    <Link to="#">
                        <div className="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <div key={index} className="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_5_heading}
                            </div>
                            ))}
                        </div>
                    </Link>
                    <Link to="#">
                        <div className="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <div key={index} className="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_5_subheading}
                            </div>
                            ))}
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar_xl_dropdown_template