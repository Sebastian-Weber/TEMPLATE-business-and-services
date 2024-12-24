import Button_primary from "./buttons/button_primary";
import List from "./lists/List";
// import Button_secondary from "./buttons/button_secondary";

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

// const cdCopy = {
//   buttonPrimaryCaption: '',
//   buttonPrimaryLink: '',
//   buttonSecondaryCaption: '',
//   buttonSecondaryLink: '',
// };

interface SectionTextAndImageProps {
  paragraph: string;
  image: string;
  heading: string;
  background?: string;
  buttonPrimaryProps?: {
    buttonPrimaryCaption?: string;
    buttonPrimaryLink?: string;
  };
}

interface ListProps {

    listitem1: string;
  
    listitem2: string;
  
    listitem3: string;
  
    listitem4: string;
  
    listitem5: string;
  
  }


function SectionListAndImage({ heading, paragraph, image, background, buttonPrimaryProps, listitem1, listitem2, listitem3, listitem4, listitem5 }: SectionTextAndImageProps & ListProps) {
  return (
    <>
      <div className='min-h-screen flex flex-col justify-center items-center' style={{ backgroundColor: background }}>
        <div className="flex flex-col h-full justify-around items-center md:flex-row">

        {/* left box */}
        <div className="flex flex-col p-5 justify-center items-center h-1/2 w-full md:m-12 md:h-fit md:w-9/12 md:items-center">
            <br></br>
            <div className="flex flex-col p-8 h-auto w-auto justify-center items-start md:full ">
              <h2 style={{ color: cdColors.secondaryFontColor }}>{heading}</h2>
              <br></br>
              <p className="">{paragraph}</p>
              <br />
            <List></List>
            {buttonPrimaryProps && buttonPrimaryProps.buttonPrimaryCaption && buttonPrimaryProps.buttonPrimaryLink && (
              <Button_primary buttonPrimaryCaption={buttonPrimaryProps.buttonPrimaryCaption} buttonPrimaryLink={buttonPrimaryProps.buttonPrimaryLink} />
            )}
          </div>
        </div> 
          
          {/* right box */}
          <div className="flex flex-col h-fit m-6 w-auto justify-around items-center md:h-fit md:w-7/12 ">
            <img className='h-fit p-12 md:p-18' src={image} alt="Placeholder"></img>
          </div>

        </div>

      </div>
    </>
  )
}

export default SectionListAndImage;