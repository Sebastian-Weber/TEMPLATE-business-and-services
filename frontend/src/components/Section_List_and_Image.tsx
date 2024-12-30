import Button_primary from "./buttons/button_primary";
import List from "./lists/List";
// import Button_secondary from "./buttons/button_secondary";


const cdColors = {
  primaryColor: '#98BB48',
  secondaryColor: '#FFF1B7',
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
              <h4 style={{ color: cdColors.secondaryFontColor }}>{heading}</h4>
              <br></br>
              <p className="">{paragraph}</p>
              <br />
            <List listItems={[listitem1, listitem2, listitem3]}></List>
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