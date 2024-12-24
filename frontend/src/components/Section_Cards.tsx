import Button_primary from "./buttons/button_primary";
import Button_secondary from "./buttons/button_secondary";

const cdImages = {
  placeholderImage: '/src/assets/images/Placeholder600x400.png'

};

const cdCopy = {
  card1Heading1: 'Heading 1: Lorem Ipsum',
  card1Paragraph1: 'Paragraph 1: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  card2Heading1: 'Heading 1: Lorem Ipsum',
  card2Paragraph1: 'Paragraph 1: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  card3Heading1: 'Heading 1: Lorem Ipsum',
  card3Paragraph1: 'Paragraph 1: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  card4Heading1: 'Heading 1: Lorem Ipsum',
  card4Paragraph1: 'Paragraph 1: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  card5Heading1: 'Heading 1: Lorem Ipsum',
  card5Paragraph1: 'Paragraph 1: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  buttonPrimaryCaption: 'test123',
  buttonPrimaryLink: 'about',
  buttonSecondaryCaption: 'test456',
  buttonSecondaryLink: 'about',
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
  listItems?: string[];
}


function SectionCards() {
  return (

  <>
    <div className='min-h-screen mt-10 px-2 md:p-4 2xl:px-20 bg-white'>

      <div className="flex flex-col h-fit bg-red-500">12234
      
      <div className="flex flex-col h-full justify-around items-center md:flex-row">

{/* left box */}
<div className="flex flex-col p-5 justify-center items-center h-1/2 w-full md:m-12 md:h-fit md:w-9/12 md:items-center">
    <br></br>
    <div className="flex flex-col p-8 h-auto w-full justify-center items-start md:full bg-purple-600">
test1234
  </div>
</div> 
  
  {/* right box */}
  <div className="flex flex-col h-fit m-6 w-auto justify-around items-center md:h-fit md:w-7/12 ">
    {/* <img className='h-fit p-12 md:p-18' src={image} alt="Placeholder"></img> */}
  </div>

  
</div>

      </div>

      <div className="flex flex-col h-1/2 bg-blue-500">12234
      
   {/* first row */}
   <div className="flex flex-col justify-around items-center md:px-2 md:flex-row">
      
      {/* card 1 */}
      <div className="flex flex-col p-4 lg:w-2/3 lg:flex-col m-2 bg-pink-200" style={{ backgroundColor:cdColors.primaryBackgroundColorLight }}>
        <div className="flex flex-row md:flex-col items-center">
          <div className="flex flex-row justify-center items-center">
            <img className="w-full" src={cdImages.placeholderImage} alt="Placeholder"></img>
          </div>
          <br></br>
        </div>
        <div className="">
          <div className="flex flex-col w-fit h-fit justify-center md:w-5/12">
            <h2 className="" style={{ color: cdColors.primaryFontColor }}>{cdCopy.card1Heading1}</h2>
            <br></br>
          </div>
          <p className="text-lg font-normal">{cdCopy.card1Paragraph1}</p>
          <br></br>
          <br></br>
          <Button_primary buttonPrimaryCaption={cdCopy.buttonPrimaryCaption} buttonPrimaryLink={cdCopy.buttonPrimaryLink}></Button_primary>
          <Button_secondary buttonSecondaryCaption={cdCopy.buttonSecondaryCaption} buttonSecondaryLink={cdCopy.buttonSecondaryLink}></Button_secondary>
        </div>
      </div>

      {/* card 2*/}
      <div className="flex flex-col p-4 lg:w-2/3 lg:flex-col m-2 bg-pink-200" style={{ backgroundColor:cdColors.secondaryBackgroundColorLight }}>
        <div className="flex flex-row md:flex-col items-center">
          <div className="flex flex-row justify-center items-center">
            <img className="w-full" src={cdImages.placeholderImage} alt="Placeholder"></img>
          </div>
          <br></br>
        </div>
        <div className="w-fit">
          <div className="flex flex-col w-fit h-fit justify-center md:w-5/12">
            <h2 className="" style={{ color: cdColors.primaryFontColor }}>{cdCopy.card2Heading1}</h2>
            <br></br>
          </div>
          <p className="text-lg font-normal">{cdCopy.card2Paragraph1}</p>
          <br></br>
          <br></br>
          <Button_primary buttonPrimaryCaption={cdCopy.buttonPrimaryCaption} buttonPrimaryLink={cdCopy.buttonPrimaryLink}></Button_primary>
          <Button_secondary buttonSecondaryCaption={cdCopy.buttonSecondaryCaption} buttonSecondaryLink={cdCopy.buttonSecondaryLink}></Button_secondary>
        </div>
      </div>

    </div>

    {/* second row */}
    <div className="flex flex-col justify-around items-center md:px-2 md:flex-row">
      
      {/* card 3 */}
      <div className="flex flex-col p-4 lg:w-2/3 lg:flex-col m-2" style={{ backgroundColor:cdColors.tertiaryBackgroundColorLight }}>
        <div className="flex flex-row md:flex-col items-center">
          <div className="flex flex-row justify-center items-center">
            <img className="w-full" src={cdImages.placeholderImage} alt="Placeholder"></img>
          </div>
          <br></br>
        </div>
        <div className="w-fit">
          <div className="flex flex-col w-fit h-fit justify-center md:w-5/12">
            <h2 className="" style={{ color: cdColors.primaryFontColor }}>{cdCopy.card3Heading1}</h2>
            <br></br>
          </div>
          <p className="text-lg font-normal">{cdCopy.card3Paragraph1}</p>
          <br></br>
          <br></br>
          <Button_primary buttonPrimaryCaption={cdCopy.buttonPrimaryCaption} buttonPrimaryLink={cdCopy.buttonPrimaryLink}></Button_primary>
          <Button_secondary buttonSecondaryCaption={cdCopy.buttonSecondaryCaption} buttonSecondaryLink={cdCopy.buttonSecondaryLink}></Button_secondary>
        </div>
      </div>

      {/* card 4 */}
      <div className="flex flex-col p-4 lg:w-2/3 lg:flex-col m-2" style={{ backgroundColor:cdColors.quaternaryBackgroundColorLight }}>
        <div className="flex flex-row md:flex-col items-center">
          <div className="flex flex-row justify-center items-center">
            <img className="w-full" src={cdImages.placeholderImage} alt="Placeholder"></img>
          </div>
          <br></br>
        </div>
        <div className="w-full">
          <div className="flex flex-col w-fit h-fit justify-center md:w-5/12">
            <h2 className="" style={{ color: cdColors.primaryFontColor }}>{cdCopy.card4Heading1}</h2>
            <br></br>
          </div>
          <p className="text-lg font-normal">{cdCopy.card4Paragraph1}</p>
          <br></br>
          <br></br>
          <Button_primary buttonPrimaryCaption={cdCopy.buttonPrimaryCaption} buttonPrimaryLink={cdCopy.buttonPrimaryLink}></Button_primary>
          <Button_secondary buttonSecondaryCaption={cdCopy.buttonSecondaryCaption} buttonSecondaryLink={cdCopy.buttonSecondaryLink}></Button_secondary>
        </div>
      </div>

    </div>

    {/* third row */}
    <div className="flex flex-col p-4 justify-around items-center md:px-2 md:flex-row">
      
      {/* card 5 */}
      <div className="flex flex-col p-4 lg:w-full lg:flex-col m-2" style={{ backgroundColor:cdColors.quaternaryBackgroundColorLight }}>
        <div className="flex flex-row w-fit md:flex-col items-center">
          <div className="flex flex-row justify-center items-center">
            <img className="w-full" src={cdImages.placeholderImage} alt="Placeholder"></img>
          </div>
          <br></br>
        </div>
        <div className="w-fit">
          <div className="flex flex-col w-fit h-fit justify-center md:w-5/12">
            <h2 className="" style={{ color: cdColors.primaryFontColor }}>{cdCopy.card4Heading1}</h2>
            <br></br>
          </div>
          <p className="text-lg font-normal">{cdCopy.card4Paragraph1}</p>
          <br></br>
          <br></br>
          <Button_primary buttonPrimaryCaption={cdCopy.buttonPrimaryCaption} buttonPrimaryLink={cdCopy.buttonPrimaryLink}></Button_primary>
          <Button_secondary buttonSecondaryCaption={cdCopy.buttonSecondaryCaption} buttonSecondaryLink={cdCopy.buttonSecondaryLink}></Button_secondary>
        </div>
      </div>

    </div> 

      </div>

 
    </div>

</>
  )
}

export default SectionCards