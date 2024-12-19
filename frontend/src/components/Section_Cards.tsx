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
  buttonPrimaryUrl: 'about',
  buttonSecondaryCaption: 'test456',
  buttonSecondaryUrl: 'about',
};

const cdColors = {
  primaryColor: '#98BB48',
  secondaryColor: '#FFF1B7',
  primaryAccentColor: '',
  secondaryAccentColor: '',
  primaryBackgroundColorDark: '#165287',
  primaryBackgroundColorDefault: '#1D6DB4',
  primaryBackgroundColorLight: '#E9D9D3',
  secondaryBackgroundColorDark: '#165287',
  secondaryBackgroundColorDefaukt: '#165287',
  secondaryBackgroundColorLight: '#BBD3C6',
  tertiaryBackgroundColorDark: '#165287',
  tertiaryBackgroundColorDefault: '#165287',
  tertiaryBackgroundColorLight: '#B5CFE6',
  quaternaryBackgroundColorDark: '#165287',
  quaternaryBackgroundColorDefault: '#165287',
  quaternaryBackgroundColorLight: '#F3EBC9',
  primaryFontColor: '#191A1E',
  secondaryFontColor: '#817E72',
  tertiaryFontColor: '#D6D5CB'
};


function SectionCards() {
  return (

  <>
    <div className='min-h-screen mt-10 px-2 md:p-4 2xl:px-20 bg-white'>

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
          <Button_primary buttonPrimaryCaption={cdCopy.buttonPrimaryCaption} buttonPrimaryUrl={cdCopy.buttonPrimaryUrl}></Button_primary>
          <Button_secondary buttonSecondaryCaption={cdCopy.buttonSecondaryCaption} buttonSecondaryUrl={cdCopy.buttonSecondaryUrl}></Button_secondary>
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
          <Button_primary buttonPrimaryCaption={cdCopy.buttonPrimaryCaption} buttonPrimaryUrl={cdCopy.buttonPrimaryUrl}></Button_primary>
          <Button_secondary buttonSecondaryCaption={cdCopy.buttonSecondaryCaption} buttonSecondaryUrl={cdCopy.buttonSecondaryUrl}></Button_secondary>
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
          <Button_primary buttonPrimaryCaption={cdCopy.buttonPrimaryCaption} buttonPrimaryUrl={cdCopy.buttonPrimaryUrl}></Button_primary>
          <Button_secondary buttonSecondaryCaption={cdCopy.buttonSecondaryCaption} buttonSecondaryUrl={cdCopy.buttonSecondaryUrl}></Button_secondary>
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
          <Button_primary buttonPrimaryCaption={cdCopy.buttonPrimaryCaption} buttonPrimaryUrl={cdCopy.buttonPrimaryUrl}></Button_primary>
          <Button_secondary buttonSecondaryCaption={cdCopy.buttonSecondaryCaption} buttonSecondaryUrl={cdCopy.buttonSecondaryUrl}></Button_secondary>
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
          <Button_primary buttonPrimaryCaption={cdCopy.buttonPrimaryCaption} buttonPrimaryUrl={cdCopy.buttonPrimaryUrl}></Button_primary>
          <Button_secondary buttonSecondaryCaption={cdCopy.buttonSecondaryCaption} buttonSecondaryUrl={cdCopy.buttonSecondaryUrl}></Button_secondary>
        </div>
      </div>

    </div> 
  </div> 
</>
  )
}

export default SectionCards