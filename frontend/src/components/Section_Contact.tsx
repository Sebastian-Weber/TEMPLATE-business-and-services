import Button_primary from "./buttons/button_primary";
import Text_area from "./text inputs/Text_area";
import Text_field from "./text inputs/Text_field";

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
  image10: '/src/assets/images/ernys-grI-lghNqMI-unsplash.jpg',
  image11: '/src/assets/images/tekton-ndJlw4Bz-1Y-unsplash.jpg',
  image12: '/src/assets/images/quino-al-8gWEAAXJjtI-unsplash.png',

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

const cdCopy = {
  sectionContact_Heading: 'Wie Sie uns erreichen können',

};



function SectionContact() {
  return (
    <>
      <div className='min-h-screen flex flex-col justify-center items-center md:justify-center md:items-center' style={{ backgroundColor: cdColors.secondaryColor }}>
      <div className="flex flex-col h-full w-full md:p-12 md:flex-row  ">
  
          {/* left box */}
          <div className="flex flex-col p-12 justify-center items-center md:items-center h-1/2 w-full md:p-6 md:h-fit  md:justify-normal">
            <div className="w-full md:w-2/3 ">
            <Text_field caption="Your Caption" placeholder="Your Placeholder" alt="Your Alt Text"></Text_field>
            <Text_field caption="Your Caption" placeholder="Your Placeholder" alt="Your Alt Text"></Text_field>
            <Text_field caption="Your Caption" placeholder="Your Placeholder" alt="Your Alt Text"></Text_field>
            <Text_field caption="Your Caption" placeholder="Your Placeholder" alt="Your Alt Text"></Text_field>
            <Text_area caption="Your Caption" placeholder="Your Placeholder" alt="Your Alt Text"></Text_area>
            <Button_primary buttonPrimaryCaption="Your Button Caption" buttonPrimaryLink="Your Button Link"></Button_primary>
            </div>
          </div>

          {/* right box */}
          <div className="flex flex-col justify-center items-center h-fit w-full md:h-fit md:py-12">
            <img className="min-w-52 p-12" src={cdImages.image12}></img>
          </div>

        </div>
      </div>
    </>
  )
}

export default SectionContact