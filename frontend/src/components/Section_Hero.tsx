
const cdImages = {
  heroImage: '/src/assets/images/thisisengineering-ovWUKV1btXk-unsplash.png',
  heroLogotype: '/src/assets/images/Peters_Logotype.png',

};

const cdCopy = {
  heroHeading1: 'Heading 1: Lorem Ipsum',
  heroParagraph1: 'Paragraph 1: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
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
      <div className='min-h-full mt-10 ' style={{ backgroundColor: secondaryColor }}>

      <div className="flex flex-col h-screen justify-around items-center md:flex-row">
          
          <div className="flex flex-col h-1/2 w-full justify-around items-center md:w-9/12 md:items-center md:h-full bg-orange-400">
            <div className="flex flex-col h-auto justify-center bg-red-400">
              <img className=' ' src={cdImages.heroLogotype} alt="Placeholder"></img>
              <h1 style={{ color: cdColors.tertiaryFontColor }}>{cdCopy.heroHeading1}</h1>
              {/* <p>{cdCopy.heroParagraph1}</p> */}
            </div>
          </div>  
          
          <div className="flex flex-col h-fill w-auto justify-around items-center md:w-auto md:h-full bg-blue-400">
            <img className='object-cover md:w-full md:h-full' src={cdImages.heroImage} alt="Placeholder"></img>
          </div>
          
        </div>
          
      </div>
    </>
  )
}

export default SectionHero