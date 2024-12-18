const cdImages = {
  placeholderImage: '/src/assets/images/Placeholder600x400.png'
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

interface SectionGalleryProps {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
  image7: string;
}



const Section_Gallery: React.FC<SectionGalleryProps> = ({ image1, image2, image3, image4, image5, image6, image7 }) => {
  return (
    <>
      <div className='min-h-screen mt-10 px-2 2xl:px-20' style={{ backgroundColor:cdColors.secondaryColor }}>
        {/* <div className=" bg-orange-400">

          <div className="flex flex-row">

            <div className="m-4">
            <img className='h-fit w-auto' src={image1} alt="Placeholder"></img>
            </div>

            <div className="m-4">
            <img className='h-fit w-auto' src={image2} alt="Placeholder"></img>
            </div>

            <div className="m-4">
            <img className='h-fit w-auto' src={image3} alt="Placeholder"></img>
            </div>

          </div>

          <div className="flex flex-row">

            <div className="m-4">
            <img className='h-fit w-auto' src={image4} alt="Placeholder"></img>
            </div>

            <div className="m-4">
            <img className='h-fit w-auto' src={image5} alt="Placeholder"></img>
            </div>

          </div>

          <div className="flex flex-row"> 

            <div className="m-4">
            <img className='h-fit w-auto' src={image6} alt="Placeholder"></img>
            </div>

            <div className="m-4">
            <img className='h-fit w-auto' src={image7} alt="Placeholder"></img>
            </div>

          </div>
        </div> */}


        <div className=" grid grid-cols-12 gap-6 w-full bg-red-500">

          <div className="col-start-1 col-span-2 col-end-5">
            <img className="h-full w-auto" src={image1}></img>
          </div>
          
          <div className="col-start-5 col-span-4 col-end-8">
            <img className="h-full w-auto" src={image2}></img>
          </div>

          <div className="col-start-8 col-span-2 col-end-12">
            <img className="h-full w-auto" src={image3}></img>
          </div>

          <div className="col-start-1 col-span-1 col-end-4">
            <img className="h-full w-fit" src={image4}></img>
          </div>

          <div className="col-start-4 col-span-3 col-end-12">
            <img className="h-full w-fit" src={image5}></img>
          </div>

          <div className="col-start-1 col-span-2 col-end-6">
            <img className="w-full h-full" src={image6}></img>
          </div>

          <div className="col-start-6 col-span-2 col-end-11">
            <img className="h-full w-fit" src={image7}></img>
          </div>

        </div>

      </div>
    </>
  )
}
export default Section_Gallery