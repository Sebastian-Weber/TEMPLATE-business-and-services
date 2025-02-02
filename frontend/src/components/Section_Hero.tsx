import cdColors from '../utils/cdColors';

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

function SectionHero({ heading, subheading, paragraph, image, logo, background = cdColors.tertiaryColor }: SectionHeroProps) {
  return (
    <>
      <div className='min-w-full max-h-screen' style={{ backgroundColor: background }}>

      <div className=" min-h-full flex flex-col h-screen w-fit justify-around items-center md:min-w-full md:flex-row">
          
          <div className="flex flex-col mt-24 p-20 justify-center items-center h-1/2 w-full md:h-fit md:w-11/12 md:items-center lg:mx-24">
          <div className="flex flex-col pb-12 h-auto justify-center">
              {logo && (
                <>
                  <img className='object-cover' src={logo} alt="Placeholder"></img>
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
                  <h4 style={{ color: cdColors.tertiaryFontColor }}>{subheading}</h4>
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