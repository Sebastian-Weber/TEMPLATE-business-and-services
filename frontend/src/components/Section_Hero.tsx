
const cdImages = {
  heroImage: '/src/assets/images/markus-spiske-kK7uPfb2YWU-unsplash.jpg',

};

const cdCopy = {
  heroHeading1: 'Lorem Ipsum heading 1',
  heroIntroduction: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. paragraph 1',
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

interface SectionHeroProps {
  primaryColor?: string;
  secondaryColor?: string;
}

console.log(cdImages.heroImage);

function SectionHero({ secondaryColor = cdColors.secondaryColor }: SectionHeroProps) {
  return (
    <>
      <div className='min-h-screen mt-10 px-2 2xl:px-20' style={{ backgroundColor: secondaryColor }}>

          <div className="flex flex-col h-screen justify-around items-center md:flex-row bg-orange-400  ">
            
            <div className="flex flex-col h-1/2 w-full justify-around items-center md:items-center md:w-5/12 md:h-full bg-red-400">
              <div className="flex flex-col w-fit h-fit justify-center md:w-5/12">
                <h2 style={{ color: cdColors.tertiaryFontColor }}>{cdCopy.heroHeading1}</h2>
                <br></br>
                <p>{cdCopy.heroIntroduction}</p>
              </div>
            </div>  
            
            <div className="flex flex-col h-1/2 w-full justify-around items-center md:w-7/12 md:h-full bg-blue-400">
              <img className='h-full w-screen' src={cdImages.heroImage} alt="Placeholder"></img>
            </div>

          </div>
          
      </div>
    </>
  )
}

export default SectionHero