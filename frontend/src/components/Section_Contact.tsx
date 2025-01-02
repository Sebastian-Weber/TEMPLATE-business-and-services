import Button_primary from "./buttons/button_primary";
import Text_area from "./text inputs/Text_area";
import Text_field from "./text inputs/Text_field";

// const cdColors = {
//   primaryColor: '#A8CF4E',
//   secondaryColor: '#FBF179',
//   primaryAccentColor: '',
//   secondaryAccentColor: '',

//   // green
//   primaryBackgroundColorLight: '#C5DF88',
//   primaryBackgroundColorDefault: '#A8CF4E',
//   primaryBackgroundColorDark: '#8FB042',

//   // yellow   
//   secondaryBackgroundColorLight: '#FCF6A5',
//   secondaryBackgroundColorDefault: '#FBF179',
//   secondaryBackgroundColorDark: '#DBD269',

//   // teal
//   tertiaryBackgroundColorLight: '#9EDFB9',
//   tertiaryBackgroundColorDefault: '#6FCF97',
//   tertiaryBackgroundColorDark: '#5EB080',

//   // blue
//   quaternaryBackgroundColorLight: '#80CDDE',
//   quaternaryBackgroundColorDefault: '#41B4CE',
//   quaternaryBackgroundColorDark: '#41B4CE',

//   // brown
//   quinaryBackgroundColorLight: '#CDA888',
//   quinaryBackgroundColorDefault: '#B57E4D',
//   quinaryBackgroundColorDark: '#9A6B42',

//   // white
//   whiteBackground: '#F7F7F7',

//   // black
//   blackBackground: '#1A1A1A',

//   primaryFontColor: '#212121',
//   secondaryFontColor: '#6D6D6D',
//   tertiaryFontColor: ''
// };

// const cdImages = {
//   logo: '/src/assets/Peters_Logotype.svg',
//   image1: '/src/assets/images/vishnu-mohanan-qso4MyFvhNc-unsplash.jpg',
//   image2: '/src/assets/images/mohamed-marey-M9mRKGW9L30-unsplash.jpg',
//   image3: '/src/assets/images/james-sandbrook-h0-lwHj7heI-unsplash.jpg',
//   image4: '/src/assets/images/mika-baumeister-dp9AxaKHdVg-unsplash.png',
//   image5: '/src/assets/images/steve-johnson-hokONTrHIAQ-unsplash.jpg',
//   image6: '/src/assets/images/david-dvoracek-2kWxMl5IWTA-unsplash.jpg',
//   image7: '/src/assets/images/neven-krcmarek-67FG6zD8WPQ-unsplash.png',
//   image8: '/src/assets/images/thisisengineering-ovWUKV1btXk-unsplash.png',
//   image9: '/src/assets/images/markus-spiske-kK7uPfb2YWU-unsplash.jpg',
//   image10: '/src/assets/images/thisisengineering-ZPeXrWxOjRQ-unsplash.jpg',
//   image11: '/src/assets/images/gidlark-d662tNZfe_g-unsplash.jpg',
//   image12: '/src/assets/images/brian-wangenheim--yWw3HlVVnQ-unsplash.jpg',
//   image13: '/src/assets/images/shirish-suwal-ctmuaOO-JJI-unsplash.jpg',
//   image14: '/src/assets/images/gidlark-d662tNZfe_g-unsplash.jpg',
//   image15: '/src/assets/images/tekton-ndJlw4Bz-1Y-unsplash.jpg',
//   image16: '/src/assets/images/thisisengineering-zhXR20LFowA-unsplash.jpg',
//   image17: '/src/assets/images/steffen-lemmerzahl-fu3iLPBe964-unsplash.jpg',
//   image18: '/src/assets/images/s-tsuchiya-gxIg8FcDIC8-unsplash.jpg',
//   image19: '/src/assets/images/alex-wolowiecki-uXgoasNqYqw-unsplash.jpg',
//   image20: '/src/assets/images/jimmy-nilsson-masth-CskQi7DDUuY-unsplash.jpg',
//   image21: '/src/assets/images/thisisengineering-q9yJE97A44Q-unsplash.jpg',
//   image22: '/src/assets/images/sol-tZw3fcjUIpM-unsplash.png',
//   image23: '/src/assets/images/frames-for-your-heart-iOLHAIaxpDA-unsplash.jpg',
//   image24: '/src/assets/images/jimmy-nilsson-masth-hrIpsXkrAO0-unsplash.png',
//   image25: '/src/assets/images/markus-spiske-rNn_TU8dvoY-unsplash.png',
//   image26: '/src/assets/images/kumpan-electric-AjNgSvEt-v4-unsplash.jpg',
//   image27: '/src/assets/images/smart-me-ag-j2E-2YQe_c8-unsplash.jpg',
//   image28: '/src/assets/images/waldemar-rHfTdK9YU2Q-unsplash.jpg',
//   image29: '/src/assets/images/markus-spiske-LIi9tSIKoYQ-unsplash.jpg',
//   image30: '/src/assets/images/jakub-zerdzicki-uxYLtGRyGKQ-unsplash.jpg',
//   image31: '/src/assets/images/alpha-innotec--nbWCvUiFJA-unsplash.jpg',
//   image32: '/src/assets/images/jakub-zerdzicki-uxYLtGRyGKQ-unsplash.jpg',


//   card1Image: '/src/assets/images/Privatkunden.svg',
//   card2Image: '/src/assets/images/Geschaeftskunden.svg',
//   card3Image: '/src/assets/images/Smart-Home-Loesungen.svg',
//   card4Image: '/src/assets/images/Lichtinstallation.svg',

  
// };


interface SectionContactProps {
  style?: React.CSSProperties;
  imageSrc: string;
}

const SectionContact: React.FC<SectionContactProps> = ({ style, imageSrc }) => {
  return (
    <>
      <a id="kontakt"></a>
      <div className='min-h-screen flex flex-col justify-center items-center md:justify-center md:items-center' style={style}>
      <div className="flex flex-col h-full w-full md:p-12 md:flex-row  ">
  
          {/* left box */}
          <div className="flex flex-col p-12 justify-center items-center md:items-center h-1/2 w-full md:p-6 md:h-fit md:justify-normal">
            <div className="w-full md:w-2/3 ">
            <Text_field caption="Vor- & Nachname*" placeholder="" alt="Ihr Vor- und Nachname"></Text_field>
            <Text_field caption="E-Mail-Adresse*" placeholder="" alt="Ihre E-Mail-Adresse"></Text_field>
            <Text_field caption="Telefonnummer" placeholder="" alt="Ihre Telefonnumer"></Text_field>
            <Text_area caption="Nachricht*" placeholder="" alt="Ihre Nachricht"></Text_area>
            
            
            <label className="">Bei mit * gekennzeichneten Felder handelt es sich um Pflichtfelder.</label>
            <br></br>
            <br></br>
            <div className="flex flex-row justify-start items-center">
                <input type="checkbox" className="m-2"></input>
                <label className="">Mit dem Senden der Nachricht akzeptiere ich die Datenschutzbedingungen</label>
            </div>
              <br></br>
            
            <Button_primary buttonPrimaryCaption="Nachricht senden" buttonPrimaryLink=""></Button_primary>
            </div>
          </div>

          {/* right box */}
          <div className="flex flex-col justify-center items-center h-fit w-full md:h-fit md:py-12">
            <img className="min-w-52 p-12" src={imageSrc} alt="Contact Image" ></img>
          </div>

        </div>
      </div>
    </>
  )
}

export default SectionContact