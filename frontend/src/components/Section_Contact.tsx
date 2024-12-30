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
  primaryColor: '#A8CF4E',
  secondaryColor: '#F3F4A7',
  primaryAccentColor: '',
  secondaryAccentColor: '',

  // yellow
  primaryBackgroundColorDark: '#F6F7BE',
  primaryBackgroundColorDefault: '#EDEF7C',
  primaryBackgroundColorLight: '#F3F4A7',

  // green
  secondaryBackgroundColorDark: '#D4E7A7',
  secondaryBackgroundColorDefault: '#A8CF4E',
  secondaryBackgroundColorLight: '#C5DF88',

  // teal
  tertiaryBackgroundColorDark: '#B7E7CB',
  tertiaryBackgroundColorDefault: '#6FCF97',
  tertiaryBackgroundColorLight: '#9EDFB9',

  // blue
  quaternaryBackgroundColorDark: '#A6EAF9',
  quaternaryBackgroundColorDefault: '#4CD4F2',
  quaternaryBackgroundColorLight: '#87E2F6',

  // brown
  quinaryBackgroundColorDark: '#E6D3C2',
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


const cdCopy = {
  sectionContact_Heading: 'Wie Sie uns erreichen können',

};



function SectionContact() {
  return (
    <>

      <div className='min-h-screen flex flex-col justify-center items-center md:justify-center md:items-center' style={{ backgroundColor: cdColors.quaternaryBackgroundColorDark }}>
      <a id="kontakt"></a>
      <div className="flex flex-col h-full w-full md:p-12 md:flex-row  ">
  
          {/* left box */}
          <div className="flex flex-col p-12 justify-center items-center md:items-center h-1/2 w-full md:p-6 md:h-fit md:justify-normal">
            <div className="w-full md:w-2/3 ">
            <Text_field caption="Vor- & Nachname*" placeholder="" alt="Ihr Vor- und Nachname"></Text_field>
            <Text_field caption="E-Mail-Adresse*" placeholder="" alt="Ihre E-Mail-Adresse"></Text_field>
            <Text_field caption="Telefonnummer" placeholder="" alt="Ihre Telefonnumer"></Text_field>
            <Text_area caption="Nachricht*" placeholder="" alt="Ihre Nachricht"></Text_area>
            
            
            <label className="text-sm text-gray-700">Bei mit * gekennzeichneten Felder handelt es sich um Pflichtfelder.</label>
            <br></br>
            <br></br>
            <div className="flex flex-row justify-start items-center">
                <input type="checkbox" className="m-2"></input>
                <label className="text-sm text-gray-700">Mit dem Senden der Nachricht akzeptiere ich die Datenschutzbedingungen</label>
            </div>
              <br></br>
            
            <Button_primary buttonPrimaryCaption="Nachricht senden" buttonPrimaryLink=""></Button_primary>
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