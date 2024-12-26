
import { Link } from "react-router-dom";

// image resources
import Placeholder from '/src/assets/images/Placeholder.png'


const cdImages = {
    logo: '/src/assets/Peters_Logotype.svg',
    image1: '/src/assets/images/vishnu-mohanan-qso4MyFvhNc-unsplash.jpg',
    image2: '/src/assets/images/mohamed-marey-M9mRKGW9L30-unsplash.jpg',
    image3: '/src/assets/images/james-sandbrook-h0-lwHj7heI-unsplash.jpg',
    image4: '/src/assets/images/mika-baumeister-dp9AxaKHdVg-unsplash.png',
    image5: '/src/assets/images/steve-johnson-hokONTrHIAQ-unsplash.jpg',
    image6: '/src/assets/images/david-dvoracek-2kWxMl5IWTA-unsplash.jpg',
    image7: '/src/assets/images/neven-krcmarek-67FG6zD8WPQ-unsplash.png',
    image8: '/src/assets/images/thisisengineering-ovWUKV1btXk-unsplash.png',
    image9: '/src/assets/images/markus-spiske-kK7uPfb2YWU-unsplash.jpg',
    image10: '/src/assets/images/thisisengineering-ZPeXrWxOjRQ-unsplash.jpg',
    image11: '/src/assets/images/gidlark-d662tNZfe_g-unsplash.jpg',
    image12: '/src/assets/images/brian-wangenheim--yWw3HlVVnQ-unsplash.jpg',
    image13: '/src/assets/images/shirish-suwal-ctmuaOO-JJI-unsplash.jpg',
    image14: '/src/assets/images/gidlark-d662tNZfe_g-unsplash.jpg',
    image15: '/src/assets/images/tekton-ndJlw4Bz-1Y-unsplash.jpg',
    image16: '/src/assets/images/thisisengineering-zhXR20LFowA-unsplash.jpg',
    image17: '/src/assets/images/steffen-lemmerzahl-fu3iLPBe964-unsplash.jpg',
    image18: '/src/assets/images/s-tsuchiya-gxIg8FcDIC8-unsplash.jpg',
    image19: '/src/assets/images/alex-wolowiecki-uXgoasNqYqw-unsplash.jpg',
    image20: '/src/assets/images/jimmy-nilsson-masth-CskQi7DDUuY-unsplash.jpg',
    image21: '/src/assets/images/thisisengineering-q9yJE97A44Q-unsplash.jpg',
    image22: '/src/assets/images/sol-tZw3fcjUIpM-unsplash.png',
    image23: '/src/assets/images/frames-for-your-heart-iOLHAIaxpDA-unsplash.jpg',
    image24: '/src/assets/images/jimmy-nilsson-masth-hrIpsXkrAO0-unsplash.png',
    image25: '/src/assets/images/markus-spiske-rNn_TU8dvoY-unsplash.png',
    image26: '/src/assets/images/jimmy-nilsson-masth-hrIpsXkrAO0-unsplash.png',
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
  

// const Navbar_XL_dropdown_items = [
//     // Item 1
//     {
//     item_1_image: Placeholder,
//     item_1_heading: 'Elektro-Dienstleistungen für Privatkunden',
//     item_1_subheading: '1 Placeholder',
//     item_1_url: '/Elektro-Dienstleistungen-Privatkunden',
//     },
//     // Item 2
//     {
//     item_2_image: Placeholder,
//     item_2_heading: '2 Placeholder',
//     item_2_subheading: '2 Placeholder',
//     },
//     // Item 3
//     {
//     item_3_image: Placeholder,
//     item_3_heading: '3 Placeholder',
//     item_3_subheading: '3 Placeholder',
//     },
//     // Item 4
//     {
//     item_4_image: Placeholder,
//     item_4_heading: '4 Placeholder',
//     item_4_subheading: '4 Placeholder',
//     },
//     // Item 5
//     {
//     item_5_image: Placeholder,
//     item_5_heading: '5 Placeholder',
//     item_5_subheading: '5 Placeholder',
//      },
//   ];




interface NavbarXlDropdownTemplateProps {
    DropdownCaption: string;
    caption: string;

    DropdownItem1Image: string;
    DropdownItem1Heading: string;
    DropdownItem1Subheading: string;
    DropdownItem1Url: string;

    DropdownItem2Image: string;
    DropdownItem2Heading: string;
    DropdownItem2Subheading: string;
    DropdownItem2Url: string;

    DropdownItem3Image?: string;
    DropdownItem3Heading?: string;
    DropdownItem3Subheading?: string;
    DropdownItem3Url?: string;

    DropdownItem4Image?: string;
    DropdownItem4Heading?: string;
    DropdownItem4Subheading?: string;
    DropdownItem4Url?: string;

    DropdownItem5Image?: string;
    DropdownItem5Heading?: string;
    DropdownItem5Subheading?: string;
    DropdownItem5Url?: string;

}

function Navbar_xl_dropdown_template({ 
    DropdownCaption, 

    DropdownItem1Heading, 
    DropdownItem1Subheading, 
    DropdownItem1Image, 
    DropdownItem1Url, 

    DropdownItem2Heading, 
    DropdownItem2Subheading, 
    DropdownItem2Image, 
    DropdownItem2Url, 

    DropdownItem3Heading, 
    DropdownItem3Subheading, 
    DropdownItem3Image, 
    DropdownItem3Url, 

    DropdownItem4Heading, 
    DropdownItem4Subheading, 
    DropdownItem4Image, 
    DropdownItem4Url,  

    DropdownItem5Heading, 
    DropdownItem5Subheading, 
    DropdownItem5Image, 
    DropdownItem5Url, 

}: NavbarXlDropdownTemplateProps)  {
  return (
    <>

    {/* Dropdown Template */}
    <div className="relative group cursor-pointer mx-2">

        <div className="relative flex flex-row items-center justify-between">
            <Link to="">
                <div className="text-xl font-medium menu-hover my-2" style={{ color: cdColors.secondaryColor }} >
                    {DropdownCaption}
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

                {/* Menu item 1 */}
                <div className="flex flex-col justify-normal items-start px-6 max-w-72">
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
                </div>  

                {/* Menu item 1 */}
                <div className="flex flex-col justify-normal items-start px-6 max-w-72">
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
                </div>  

                {/* Menu item 3 */}
                <div className="flex flex-col justify-normal items-start px-6 max-w-72">
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
                </div>  
      
                {/* Menu item 4 */}
                <div className="flex flex-col justify-normal items-start px-6 max-w-72">
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
                </div>  

                {/* Menu item 5 */}
                <div className="flex flex-col justify-normal items-start px-6 max-w-72">
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
                </div>  

            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar_xl_dropdown_template