
const cdImages = {
  heroImage: '/src/assets/images/Placeholder600x400.png'

};

const cdCopy = {
  textAndImageHeading1: 'Heading 1: Lorem Ipsum',
  textAndImageParagraph1: 'Paragraph 1: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
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

function SectionTextAndImage() {
  return (
    <>
      <div className='min-h-screen mt-10 px-2 2xl:px-20' style={{ backgroundColor:cdColors.secondaryColor }}>

        <div className="flex flex-col h-screen justify-around items-center md:flex-row bg-orange-400">
          
          <div className="flex flex-col h-1/2 w-full justify-around items-center md:items-center md:w-5/12 md:h-full bg-red-400">
            <div className="flex flex-col w-fit h-fit justify-center md:w-5/12">
              <h1 style={{ color: cdColors.tertiaryFontColor }}>{cdCopy.textAndImageHeading1}</h1>
              <p>{cdCopy.textAndImageParagraph1}</p>
            </div>
          </div>  
          
          <div className="flex flex-col h-fit w-auto justify-around items-center md:h-fit md:w-7/12  bg-blue-400">
            <img className='h-fit' src={cdImages.heroImage} alt="Placeholder"></img>
          </div>
          
        </div>

      </div>
    
      {/* <div className='min-h-screen mt-10 relative px-2 2xl:px-20' style={{ backgroundColor: cdColors.secondaryColor }}>
        <div className='flex flex-col h-screen justify-around items-start md:flex-row bg-orange-400'>
          <div className="flex flex-col justify-around items-start h-fit w-full  bg-red-400">
            <h2>Heading</h2>
            <p>Paragraph</p>
            <ul>List
              <li>item</li>
              <li>item</li>
              <li>item</li>
            </ul>
          </div>
          <br></br>
          <div className="flex flex-col justify-around items-center h-fit w-full  bg-blue-400">
            <img></img>
          </div>
        </div>
        </div> */}
    </>
  )
}

export default SectionTextAndImage;