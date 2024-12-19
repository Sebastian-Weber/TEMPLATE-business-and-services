
const cdImages = {
  heroImage: '/src/assets/images/thisisengineering-ovWUKV1btXk-unsplash.png',
  heroLogotype: '/src/assets/images/Peters_Logo.svg',

};

const cdCopy = {
  heroHeading1: 'Smart-Home-Lösungen und Energietechnik in der Region Köln.',
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
  heading: string;
  paragraph: string;
  image: string;
}

function SectionHero({ heading, paragraph, image, secondaryColor = cdColors.secondaryColor }: SectionHeroProps) {
  return (
    <>
      <div className=' min-w-full' style={{ backgroundColor: secondaryColor }}>

      <div className="mt-10 min-h-full flex flex-col h-screen w-fit justify-around items-center md:min-w-full md:flex-row">
          
          <div className="flex flex-col mt-24 p-5 justify-center items-center h-1/2 w-full md:h-fit md:w-11/12 md:items-center">
            <div className="flex flex-col -m-6 h-auto justify-center md:m-6">
              <img className='object-cover' src={cdImages.heroLogotype} alt="Placeholder"></img>
            </div>
            <br></br>
            <div className="flex flex-col p-8 h-auto w-auto justify-center items-start md:full ">
              <h1 style={{ color: cdColors.secondaryFontColor }}>{heading}</h1>
              <br></br>
              <p>{paragraph}</p>
            </div>
          </div>  
          
          <div className="flex flex-col h-fit justify-around items-center object-cover md:h-full md:w-full ">
            <img className='h-72 w-screen object-cover md:w-full md:h-full' src={image} alt="Placeholder"></img>
          </div>
          
        </div>
          
      </div>
    </>
  )
}

export default SectionHero