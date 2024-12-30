
const cdImages = {
  heroImage: '/src/assets/images/thisisengineering-ovWUKV1btXk-unsplash.png',
  heroLogotype: '/src/assets/Peters_Logotype.svg',

};

// const cdCopy = {
//   heroHeading1: 'Heading 1: ...',
//   heroSubhading1: 'Heading 1: ...',
//   heroParagraph1: 'Paragraph 1: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
// };


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

interface SectionHeroProps {
  logo?: string;
  primaryColor?: string;
  secondaryColor?: string;
  heading?: string;
  subheading?: string;
  paragraph: string;
  image: string;
  background: string;
}

function SectionHero({ heading, subheading, paragraph, image, logo, background = cdColors.secondaryColor }: SectionHeroProps) {
  return (
    <>
      <div className='min-w-full' style={{ backgroundColor: background }}>

      <div className="mt-10 min-h-full flex flex-col h-screen w-fit justify-around items-center md:min-w-full md:flex-row">
          
          <div className="flex flex-col mt-24 p-20 justify-center items-center h-1/2 w-full md:h-fit md:w-11/12 md:items-center">
            <div className="flex flex-col m-4 h-auto justify-center">
              {logo && (
                <>
                  <img className='-mt-44 object-cover' src={logo} alt="Placeholder"></img>
                </>
              )}
              {heading && (
                <>
                  <h1 style={{ color: cdColors.secondaryFontColor }}>{heading}</h1>
                  <br />
                </>
              )}
              {subheading && (
                <>
                  <h4 style={{ color: cdColors.secondaryFontColor }}>{subheading}</h4>
                  <br />
                </>
              )}
              <p className="" style={{ color: cdColors.secondaryFontColor }}>{paragraph}</p>
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