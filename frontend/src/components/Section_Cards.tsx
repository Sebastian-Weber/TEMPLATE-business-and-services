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

function SectionCards() {
  return (
  <>
    <div className='min-h-screen mt-10 px-2 2xl:px-20' style={{ backgroundColor:cdColors.secondaryColor }}>

    {/* first row */}
    <div className="flex flex-col justify-around items-center md:px-2 md:flex-row bg-orange-400">
      
      {/* 1. box */}
      <div className="flex flex-col lg:w-2/3 lg:flex-col m-2 bg-pink-200">
        <div className="flex flex-row md:flex-col items-center">
          <div className="flex flex-row justify-center items-center">
            <img className="w-full" src={cdImages.placeholderImage} alt="Placeholder"></img>
          </div>
          <br></br>
        </div>
        <div className="w-fit">
          <div className="flex flex-col w-fit h-fit justify-center md:w-5/12">
            <h2 className="" style={{ color: cdColors.primaryFontColor }}>{cdCopy.card1Heading1}</h2>
            <br></br>
          </div>
          <p className="text-lg font-normal">{cdCopy.card1Paragraph1}</p>
          <br></br>
          <br></br>
          <button className="">Mehr erfahren</button>
        </div>
      </div>

      {/* 2. box */}
      <div className="flex flex-col lg:w-2/3 lg:flex-col m-2 bg-pink-200">
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
          <button className="">Mehr erfahren</button>
        </div>
      </div>

    </div>

    {/* second row */}
    <div className="flex flex-col justify-around items-center md:px-2 md:flex-row bg-orange-300">
      
      {/* 3. box */}
      <div className="flex flex-col lg:w-2/3 lg:flex-col m-2 bg-pink-200">
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
          <button className="">Mehr erfahren</button>
        </div>
      </div>

      {/* 4. box */}
      <div className="flex flex-col lg:w-2/3 lg:flex-col m-2 bg-pink-200">
        <div className="flex flex-row md:flex-col items-center">
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
          <button className="">Mehr erfahren</button>
        </div>
      </div>

    </div>

    {/* third row */}
    <div className="flex flex-col justify-around items-center md:px-2 md:flex-row bg-orange-400">

    <div className="flex flex-col lg:w-full lg:flex-col m-2 bg-purple-200">
        <div className="flex flex-row md:flex-col items-start justify-center">
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
          <button className="">Mehr erfahren</button>
        </div>
      </div>

    </div> 
  </div> 
</>
  )
}

export default SectionCards