const cdImages = {
  placeholderImage: '/src/assets/images/Placeholder600x400.png'
};

const cdColors = {
  primaryColor: '#A8CF4E',
  secondaryColor: '#FBF179',
  primaryAccentColor: '',
  secondaryAccentColor: '',

  // green
  primaryBackgroundColorLight: '#C5DF88',
  primaryBackgroundColorDefault: '#A8CF4E',
  primaryBackgroundColorDark: '#8FB042',

  // yellow   
  secondaryBackgroundColorLight: '#FCF6A5',
  secondaryBackgroundColorDefault: '#FBF179',
  secondaryBackgroundColorDark: '#DBD269',

  // teal
  tertiaryBackgroundColorLight: '#9EDFB9',
  tertiaryBackgroundColorDefault: '#6FCF97',
  tertiaryBackgroundColorDark: '#5EB080',

  // blue
  quaternaryBackgroundColorLight: '#80CDDE',
  quaternaryBackgroundColorDefault: '#41B4CE',
  quaternaryBackgroundColorDark: '#41B4CE',

  // brown
  quinaryBackgroundColorLight: '#CDA888',
  quinaryBackgroundColorDefault: '#B57E4D',
  quinaryBackgroundColorDark: '#9A6B42',

  // white
  whiteBackground: '#F7F7F7',

  // black
  blackBackground: '#1A1A1A',

  primaryFontColor: '#212121',
  secondaryFontColor: '#6D6D6D',
  tertiaryFontColor: ''
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