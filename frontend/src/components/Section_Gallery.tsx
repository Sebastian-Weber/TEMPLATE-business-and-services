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



const Section_Gallery: React.FC<SectionGalleryProps> = ({ image1, image2, image3, image4, image5 }) => {
  return (
    <>
      <div className='max-h-fit mt-10 px-2 2xl:px-20' >
        <div className="p-12 md:p-16 lg:p-24">
          <div className="columns-2 gap-5 md:columns-3 [&>img: not (:first-child)]:mt-4 lg: [&>img:not(:first-child)]:mt-8">

              <img className="" src={image4}></img>

              <img className="" src={image2}></img>

              <img className="" src={image1}></img>

              <img className="" src={image3}></img>

              <img className="" src={image5}></img>

          </div>
        </div>
      </div>
    </>
  )
}
export default Section_Gallery