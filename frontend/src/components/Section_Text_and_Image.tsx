
const cdImages = {
  image1: '/src/assets/images/vishnu-mohanan-qso4MyFvhNc-unsplash.jpg',
  image2: '/src/assets/images/mohamed-marey-M9mRKGW9L30-unsplash.jpg',
  image3: '/src/assets/images/james-sandbrook-h0-lwHj7heI-unsplash.jpg',
  image4: '/src/assets/images/mika-baumeister-dp9AxaKHdVg-unsplash.png',
  image5: '/src/assets/images/steve-johnson-hokONTrHIAQ-unsplash.jpg',
  image6: '/src/assets/images/david-dvoracek-2kWxMl5IWTA-unsplash.jpg',
  image7: '/src/assets/images/neven-krcmarek-67FG6zD8WPQ-unsplash.png',
  image8: '/src/assets/images/thisisengineering-ovWUKV1btXk-unsplash.png',
  image9: '/src/assets/images/markus-spiske-kK7uPfb2YWU-unsplash.jpg',

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

interface SectionTextAndImageProps {
  paragraph: string;
  image: string;
  heading: string;
}

function SectionTextAndImage({ paragraph, image, heading }: SectionTextAndImageProps) {
  return (
    <>
      <div className='min-h-screen flex flex-col justify-center items-center' >

        <div className="flex flex-col h-fulljustify-around items-center md:flex-row">
          
        <div className="flex flex-col p-5 justify-center items-center h-1/2 w-full  md:m-12 md:h-fit md:w-9/12 md:items-center">
            <br></br>
            <div className="flex flex-col p-8 h-auto w-auto justify-center items-start md:full ">
              <h1 style={{ color: cdColors.secondaryFontColor }}>{heading}</h1>
              <br></br>
              <p className="">{paragraph}</p> 
            </div>
          </div>  
          
          <div className="flex flex-col h-fit m-6 w-auto justify-around items-center md:h-fit md:w-7/12">
            <img className='h-fit p-6 md:p-18' src={image} alt="Placeholder"></img>
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