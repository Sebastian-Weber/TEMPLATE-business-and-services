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
    secondaryBackgroundColorDefault: '#165287',
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



interface ExpanderProps {
  caption: string;
}

function Expander_sm({ caption }: ExpanderProps) {

  const [isMenuItem1ExpanderVisible, setMenuItem1ExpanderVisible] = useState(false);
  const toggleMenuItem1Expander = () => {
    setMenuItem1ExpanderVisible(!isMenuItem1ExpanderVisible);
  };


  const [isOpen, setIsOpen] = useState(false);
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  // const handleItemClick = () => {
  //   setIsOpen(false);
  //   setOverlayVisible(false);
  // };

  return (
            <>
            {/* Expander */}
            <div className="flex flex-row menu-hover cursor-pointer" onClick={toggleMenuItem1Expander}>
            <div className="" style={{ color:cdColors.secondaryColor}}>{caption}</div>
            <div className="ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 scale-75 pt-1 -ml-2 hover:rotate-180"  viewBox="0 0 24 24" strokeWidth="3" fill="none" style={{ stroke: cdColors.secondaryColor }} >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            </div>
            <div className={`relative ${isMenuItem1ExpanderVisible ? 'block' : 'hidden'}`}>
            <div className="flex flex-col ">
              <ul>
                <li className="-py-6 px-4 cursor-pointer" onClick={() => { setIsOpen(isOpen); setOverlayVisible(!isOverlayVisible); }} style={{ color:cdColors.secondaryColor}}>Expander menu Item 1</li>
                <li className="-py-6 px-4 cursor-pointer" style={{ color:cdColors.secondaryColor}}>Expander menu Item 2</li>
                <li className="-py-6 px-4 cursor-pointer" style={{ color:cdColors.secondaryColor}}>Expander menu Item 3</li>
                <li className="-py-6 px-4 cursor-pointer" style={{ color:cdColors.secondaryColor}}>Expander menu Item 4</li>
              </ul>
            </div>
        </div>
     </>
    )
}

export default Expander_sm