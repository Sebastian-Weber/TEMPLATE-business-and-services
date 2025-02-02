import Button_primary from "./buttons/button_primary";

import cdColors from '../utils/cdColors';


interface SectionTextAndImageProps {
  paragraph: string;
  image: string;
  heading: string;
  background?: string;
  buttonPrimaryProps?: {
    buttonPrimaryCaption?: string;
    buttonPrimaryLink?: string;
  };
  listItems?: string[];
  buttonSecondaryProps?: {
    buttonSecondaryCaption?: string;
        buttonSecondaryLink?: string;
      };
    }



function SectionTextAndImage({ paragraph, image, heading, background, buttonPrimaryProps, listItems  }: SectionTextAndImageProps) {
  return (
    <>
      <div className='min-h-screen flex flex-col justify-center items-center' style={{ backgroundColor: background }}>
        <div className="flex flex-col h-full justify-around items-center md:flex-row">

        {/* left box */}
        <div className="flex flex-col p-5 justify-center items-center h-1/2 w-full md:m-12 md:h-fit md:w-9/12 md:items-center">
            <br></br>
            <div className="flex flex-col p-8 h-auto w-auto justify-center items-start md:full ">
              <h3 style={{ color: cdColors.secondaryFontColor }}>{heading}</h3>
              <br></br>
              <p className="">{paragraph}</p>
              <br />
            {buttonPrimaryProps && buttonPrimaryProps.buttonPrimaryCaption && buttonPrimaryProps.buttonPrimaryLink && (
              <Button_primary buttonPrimaryCaption={buttonPrimaryProps.buttonPrimaryCaption} buttonPrimaryLink={buttonPrimaryProps.buttonPrimaryLink} />
            )}
            {listItems && listItems.length > 0 && (
              <ul className="list-disc pl-5 mt-4">
                {listItems.map((item, index) => (
                  <li key={index} className="mt-2">{item}</li>
                ))}
              </ul>
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

export default SectionTextAndImage;