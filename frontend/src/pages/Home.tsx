
import { useState } from 'react';
import Footer from "../components/Footer"
import Header from "../components/Header"
import SectionContact from "../components/Section_Contact"
import SectionDivider from "../components/Section_Divider"
import Section_Gallery from "../components/Section_Gallery"
import SectionHero from "../components/Section_Hero"
import SectionTextAndImage from "../components/Section_Text_and_Image"
import { ButtonPrimaryProvider } from "../contexts/ButtonPrimaryContext"
import SectionTextAndCards from '../components/Section_Text_and_Cards';


const cdImages = {
  logo: './assets/Peters_Logotype.svg',
  image1: './assets/images/vishnu-mohanan-qso4MyFvhNc-unsplash.jpg',
  image2: './assets/images/mohamed-marey-M9mRKGW9L30-unsplash.jpg',
  image3: './assets/images/james-sandbrook-h0-lwHj7heI-unsplash.jpg',
  image4: './assets/images/mika-baumeister-dp9AxaKHdVg-unsplash.png',
  image5: './assets/images/steve-johnson-hokONTrHIAQ-unsplash.jpg',
  image6: './assets/images/david-dvoracek-2kWxMl5IWTA-unsplash.jpg',
  image7: './assets/images/neven-krcmarek-67FG6zD8WPQ-unsplash.png',
  image8: './assets/images/thisisengineering-ovWUKV1btXk-unsplash.png',
  image9: './assets/images/markus-spiske-kK7uPfb2YWU-unsplash.jpg',
  image10: './assets/images/thisisengineering-ZPeXrWxOjRQ-unsplash.jpg',
  image11: './assets/images/gidlark-d662tNZfe_g-unsplash.jpg',
  image12: './assets/images/brian-wangenheim--yWw3HlVVnQ-unsplash.jpg',
  image13: './assets/images/shirish-suwal-ctmuaOO-JJI-unsplash.jpg',
  image14: './assets/images/gidlark-d662tNZfe_g-unsplash.jpg',
  image15: './assets/images/tekton-ndJlw4Bz-1Y-unsplash.jpg',
  image16: './assets/images/thisisengineering-zhXR20LFowA-unsplash.jpg',
  image17: './assets/images/steffen-lemmerzahl-fu3iLPBe964-unsplash.jpg',
  image18: './assets/images/s-tsuchiya-gxIg8FcDIC8-unsplash.jpg',
  image19: './assets/images/alex-wolowiecki-uXgoasNqYqw-unsplash.jpg',
  image20: './assets/images/jimmy-nilsson-masth-CskQi7DDUuY-unsplash.jpg',
  image21: './assets/images/thisisengineering-q9yJE97A44Q-unsplash.jpg',
  image22: './assets/images/sol-tZw3fcjUIpM-unsplash.png',
  image23: './assets/images/frames-for-your-heart-iOLHAIaxpDA-unsplash.jpg',
  image24: './assets/images/jimmy-nilsson-masth-hrIpsXkrAO0-unsplash.png',
  image25: './assets/images/markus-spiske-rNn_TU8dvoY-unsplash.png',
  image26: './assets/images/kumpan-electric-AjNgSvEt-v4-unsplash.jpg',
  image27: './assets/images/smart-me-ag-j2E-2YQe_c8-unsplash.jpg',
  image28: './assets/images/waldemar-rHfTdK9YU2Q-unsplash.jpg',
  image29: './assets/images/markus-spiske-LIi9tSIKoYQ-unsplash.jpg',
  image30: './assets/images/jakub-zerdzicki-uxYLtGRyGKQ-unsplash.jpg',
  image31: './assets/images/alpha-innotec--nbWCvUiFJA-unsplash.jpg',
  image32: './assets/images/jakub-zerdzicki-uxYLtGRyGKQ-unsplash.jpg',
  image33: './assets/images/vivint-solar-9CalgkSRZb8-unsplash.jpg',
  image34: './assets/images/austin-distel-wawEfYdpkag-unsplash.jpg',
  image35: './assets/images/naomi-hebert-MP0bgaS_d1c-unsplash.jpg',
  image36: './assets/images/claudio-schwarz-sLfUA03zaOk-unsplash.jpg',
  image37: './assets/images/ben-kolde-FaPxZ88yZrw-unsplash.jpg',
  image38: './assets/images/andrew-neel-cckf4TsHAuw-unsplash.jpg',
  image39: './assets/images/claudio-schwarz-sLfUA03zaOk-unsplash.jpg',
  image40: './assets/images/thisisengineering-WjOWazUPAss-unsplash.jpg',

  card1Image: './assets/images/Privatkunden.svg',
  card2Image: './assets/images/Geschaeftskunden.svg',
  card3Image: './assets/images/Smart-Home-Loesungen.svg',
  card4Image: './assets/images/Lichtinstallation.svg',

};

const cdCopy = {
  sectionHero_Heading: '',
  sectionHero_Subheading: 'Energietechnik und Smart-Home-Lösungen in der Region Köln',
  sectionHero_Paragraph: '',

  sectionIntro_Heading: 'Von der Steckdose bis zur Smart-Home-Lösung',
  sectionIntro_Paragraph: 'Willkomen bei Peters Elektro GmbH. Mit jahrelanger Erfahrung sind wir spezialisiert auf Wohn-, Gewerbe- und Industrieelektroinstallationen. Unser Team steht für Sicherheit, Innovation und eine schnelle, professionelle Arbeitsweise. Wir bedienen die Region Köln und sorgen für eine zuverlässige, kundenorientierte und effiziente Umsetzung Ihrer elektrischen Anforderungen.',

  sectionContact_Heading: 'Lust, mit uns die Zukunft zu elektrisieren?',
  sectionContact_Paragraph: 'Du suchst eine neue Herausforderung in einem modernen Elektroinstallationsunternehmen? Bei Peters Elektro GmbH erwarten Dich spannende Projekte im Kölner Raum, ein familiäres Team und echte Entwicklungsmöglichkeiten. Wir legen Wert auf Qualität, Innovation und ein Arbeitsklima, in dem sich jeder wohlfühlt? Das bieten wir: Abwechslungsreiche Aufgaben in einem zukunftssicheren Handwerk. Kreativer Freiraum, um eigene Ideen in unsere Projekte einzubringen. Eine Arbeitskultur, die Eigenverantwortung und Teamg-geist fördert. Bewirb dich jetzt und werde Teil unseres Teams! Wir freuen uns auf deine Bewerbung!',

  buttonPrimaryCaption: 'Mehr über uns erfahren -- kommt aus Home.tsx',
  buttonPrimaryURL: 'about',

  sectionTextAndCards_Heading: 'Unsere Leistungen',
  sectionTextAndCards_Paragraph: 'Entdecken Sie unser Leistungsspektrum. Von klassischen Elektroinstallationen für Privat- und Gewerbekunden über Lichtdesign bis zu modernen Smart-Home-Lösungen.',
  
  SectionListAndCards_card1Heading:'Elektroinstallationen für Privatkunden',
  SectionListAndCards_card1Paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
  SectionListAndCards_card1ListItem1: '• Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
  SectionListAndCards_card1listItem2: '• Ipsum dolor sit amet.',
  SectionListAndCards_card1listItem3: '• Consectetur adipiscing elit.',

  SectionListAndCards_card2Heading:'Elektroinstallationen für Geschäftskunden',
  SectionListAndCards_card2Paragraph:'Nullam nec purus.',
  SectionListAndCards_card2ListItem1: '• Lorem adipiscing elit. Nullam nec purus.',
  SectionListAndCards_card2listItem2: '• Ipsum dolor sit amet, consectetur adipiscing elit.',
  SectionListAndCards_card2listItem3: '• Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

  SectionListAndCards_card3Heading:'Smart-Home Lösungen',
  SectionListAndCards_card3Paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus.',
  SectionListAndCards_card3ListItem1: '• Lorem adipiscing elit. Nullam nec purus',
  SectionListAndCards_card3listItem2: '• Nullam nec purus',
  SectionListAndCards_card3listItem3: '• Lorem adipiscing elit.',
  
  SectionListAndCards_card4Heading:'Licht-Design und Installation',
  SectionListAndCards_card4Paragraph:'Nullam nec purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus.',
  SectionListAndCards_card4ListItem1: '• Lorem',
  SectionListAndCards_card4listItem2: '• Ipsum',
  SectionListAndCards_card4listItem3: '• Dolor',
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


const Home = () => {
  const [buttonPrimaryCaption1, setButtonPrimaryCaption1] = useState('Mehr über uns erfahren');
  const [buttonPrimaryLink1, setButtonPrimaryLink1] = useState('/about');

  const [buttonPrimaryCaption2, setButtonPrimaryCaption2] = useState('Zu den offenen Stellen');
  const [buttonPrimaryLink2, setButtonPrimaryLink2] = useState('/jobs');

  const buttonPrimaryProps1 = {
    buttonPrimaryCaption: buttonPrimaryCaption1,
    buttonPrimaryLink: buttonPrimaryLink1,
    setButtonPrimaryCaption: setButtonPrimaryCaption1,
    setButtonPrimaryLink: setButtonPrimaryLink1,
  };

  const buttonPrimaryProps2 = {
    buttonPrimaryCaption: buttonPrimaryCaption2,
    buttonPrimaryLink: buttonPrimaryLink2,
    setButtonPrimaryCaption: setButtonPrimaryCaption2,
    setButtonPrimaryLink: setButtonPrimaryLink2,
  };



  return (
    <>
      <div className="">
        <Header></Header>
        <SectionHero 
        heading={cdCopy.sectionHero_Heading}
        subheading={cdCopy.sectionHero_Subheading}
        paragraph={cdCopy.sectionHero_Paragraph} 
        image={cdImages.image9}
        logo={cdImages.logo}
        background={cdColors.secondaryBackgroundColorLight}>
        </SectionHero>

        <ButtonPrimaryProvider value={buttonPrimaryProps1}>
          <SectionTextAndImage 
          heading={cdCopy.sectionIntro_Heading}
          paragraph={cdCopy.sectionIntro_Paragraph}
          image={cdImages.image7}
          buttonPrimaryProps={buttonPrimaryProps1}
          background={''}>
          </SectionTextAndImage>
        </ButtonPrimaryProvider>

        <ButtonPrimaryProvider value={buttonPrimaryProps1}>
          <SectionTextAndCards 
          heading={cdCopy.sectionTextAndCards_Heading}
          paragraph={cdCopy.sectionTextAndCards_Paragraph}
          card1Image={cdImages.card1Image}
          card1Heading={cdCopy.SectionListAndCards_card1Heading}
          card1Paragraph={cdCopy.SectionListAndCards_card1Paragraph}
          card1ButtonPrimaryCaption={buttonPrimaryProps1.buttonPrimaryCaption}
          card1ButtonPrimaryLink={buttonPrimaryProps1.buttonPrimaryLink}
          card1Listitem1={cdCopy.SectionListAndCards_card1ListItem1}
          card1Listitem2={cdCopy.SectionListAndCards_card1listItem2}
          card1Listitem3={cdCopy.SectionListAndCards_card1listItem3}
          card2Image={cdImages.card2Image}
          card2Heading={cdCopy.SectionListAndCards_card2Heading}
          card2Paragraph={cdCopy.SectionListAndCards_card2Paragraph}
          card2ButtonPrimaryCaption="Button 2"
          card2Listitem1={cdCopy.SectionListAndCards_card2ListItem1}
          card2Listitem2={cdCopy.SectionListAndCards_card2listItem2}
          card2Listitem3={cdCopy.SectionListAndCards_card2listItem3}
          card2ButtonPrimaryLink={buttonPrimaryProps1.buttonPrimaryLink}
          card3Image={cdImages.card3Image}
          card3Heading={cdCopy.SectionListAndCards_card3Heading}
          card3Paragraph={cdCopy.SectionListAndCards_card3Paragraph}
          card3ButtonPrimaryCaption="Button 3"
          card3ButtonPrimaryLink={buttonPrimaryProps1.buttonPrimaryLink}
          card3Listitem1={cdCopy.SectionListAndCards_card3ListItem1}
          card3Listitem2={cdCopy.SectionListAndCards_card3listItem2}
          card3Listitem3={cdCopy.SectionListAndCards_card3listItem3}
          card4Image={cdImages.card4Image}
          card4Heading={cdCopy.SectionListAndCards_card4Heading}
          card4Paragraph={cdCopy.SectionListAndCards_card4Paragraph}
          card4ButtonPrimaryCaption="Button 4"
          card4ButtonPrimaryLink="Lichtdesign-und-Installation"
          card4Listitem1={cdCopy.SectionListAndCards_card4ListItem1}
          card4Listitem2={cdCopy.SectionListAndCards_card4listItem2}
          card4Listitem3={cdCopy.SectionListAndCards_card4listItem3}
          ></SectionTextAndCards>
        </ButtonPrimaryProvider>
        
        <Section_Gallery 
          image1={cdImages.image1}
          image2={cdImages.image2} 
          image3={cdImages.image3} 
          image4={cdImages.image4}
          image5={cdImages.image5}
          image6={cdImages.image6}
          image7={cdImages.image7}
        ></Section_Gallery>

        <ButtonPrimaryProvider value={buttonPrimaryProps2}>
          <SectionTextAndImage 
          heading={cdCopy.sectionContact_Heading}
          paragraph={cdCopy.sectionContact_Paragraph}
          image={cdImages.image22}
            buttonPrimaryProps={buttonPrimaryProps2}>
          </SectionTextAndImage>
        </ButtonPrimaryProvider>

          {/* <SectionTextAndImage 
          heading={cdCopy.sectionContact_Heading}
          paragraph={cdCopy.sectionContact_Paragraph}
          image={cdImages.image23}
            buttonPrimaryProps={buttonPrimaryProps}>
          </SectionTextAndImage> */}
        {/* <SectionTextAndImage 
          heading={cdCopy.sectionContact_Headin}
          paragraph={cdCopy.sectionContext_Paragraph}
          image={cdImages.image10}
            buttonPrimaryProps={buttonPrimaryProps}>
          </SectionTextAndImage> */}
        <SectionDivider></SectionDivider>

        <SectionContact 
        imageSrc={cdImages.image38}
        style={{backgroundColor: cdColors.quaternaryBackgroundColorLight}}>
        </SectionContact>
        <Footer></Footer>
        </div>
    </>
  )
}

export default Home