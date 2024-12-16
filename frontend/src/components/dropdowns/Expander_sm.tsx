import { useState } from 'react';

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

  const cdCopy = {
    expanderCaption: 'expander caption',
  };

function Expander() {

  const [isMenuItem1ExpanderVisible, setMenuItem1ExpanderVisible] = useState(false);
  const toggleMenuItem1Expander = () => {
    setMenuItem1ExpanderVisible(!isMenuItem1ExpanderVisible);
  };

  return (
            <>
            {/* Expander */}
            <div className="flex flex-row menu-hover cursor-pointer" onClick={toggleMenuItem1Expander}>
            <div className="">{cdCopy.expanderCaption}</div>
            <div className="ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 scale-75 -pt-2-ml-2 hover:rotate-180"  viewBox="0 0 24 24" strokeWidth="5" fill="none" style={{ stroke: cdColors.secondaryColor }} >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            </div>
            <div className={`relative ${isMenuItem1ExpanderVisible ? 'block' : 'hidden'}`}>
            <div className="flex flex-col mt-2">
                <ul>
                <li className="py-2 px-4 cursor-pointer" style={{ color:cdColors.secondaryColor}}>Overlay expander menu Item 1</li>
                <li className="py-2 px-4 cursor-pointer" style={{ color:cdColors.secondaryColor}}>Overlay expander menu Item 2</li>
                <li className="py-2 px-4 cursor-pointer" style={{ color:cdColors.secondaryColor}}>Overlay expander menu Item 3</li>
                <li className="py-2 px-4 cursor-pointer" style={{ color:cdColors.secondaryColor}}>Overlay expander menu Item 4</li>
                </ul>
            </div>
        </div>
     </>
    )
}

export default Expander