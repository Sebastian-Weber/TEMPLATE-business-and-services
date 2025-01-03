
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
import cdImages from '../utils/cdImages';


// import logo from '../assets/Peters_Logotype.svg';
// import image1 from '../assets/images/vishnu-mohanan-qso4MyFvhNc-unsplash.jpg';
// import image2 from '../assets/images/mohamed-marey-M9mRKGW9L30-unsplash.jpg';
// import image3 from '../assets/images/james-sandbrook-h0-lwHj7heI-unsplash.jpg';
// import image4 from '../assets/images/mika-baumeister-dp9AxaKHdVg-unsplash.png';
// import image5 from '../assets/images/steve-johnson-hokONTrHIAQ-unsplash.jpg';
// import image6 from '../assets/images/david-dvoracek-2kWxMl5IWTA-unsplash.jpg';
// import image7 from '../assets/images/neven-krcmarek-67FG6zD8WPQ-unsplash.png';
// import image8 from '../assets/images/thisisengineering-ovWUKV1btXk-unsplash.png';
// import image9 from '../assets/images/markus-spiske-kK7uPfb2YWU-unsplash.jpg';
// import image10 from '../assets/images/thisisengineering-ZPeXrWxOjRQ-unsplash.jpg';
// import image11 from '../assets/images/gidlark-d662tNZfe_g-unsplash.jpg';
// import image12 from '../assets/images/brian-wangenheim--yWw3HlVVnQ-unsplash.jpg';
// import image13 from '../assets/images/shirish-suwal-ctmuaOO-JJI-unsplash.jpg';
// import image14 from '../assets/images/gidlark-d662tNZfe_g-unsplash.jpg';
// import image15 from '../assets/images/tekton-ndJlw4Bz-1Y-unsplash.jpg';
// import image16 from '../assets/images/thisisengineering-zhXR20LFowA-unsplash.jpg';
// import image17 from '../assets/images/steffen-lemmerzahl-fu3iLPBe964-unsplash.jpg';
// import image18 from '../assets/images/s-tsuchiya-gxIg8FcDIC8-unsplash.jpg';
// import image19 from '../assets/images/alex-wolowiecki-uXgoasNqYqw-unsplash.jpg';
// import image20 from '../assets/images/jimmy-nilsson-masth-CskQi7DDUuY-unsplash.jpg';
// import image21 from '../assets/images/thisisengineering-q9yJE97A44Q-unsplash.jpg';
// import image22 from '../assets/images/sol-tZw3fcjUIpM-unsplash.png';
// import image23 from '../assets/images/frames-for-your-heart-iOLHAIaxpDA-unsplash.jpg';
// import image24 from '../assets/images/jimmy-nilsson-masth-hrIpsXkrAO0-unsplash.png';
// import image25 from '../assets/images/markus-spiske-rNn_TU8dvoY-unsplash.png';
// import image26 from '../assets/images/kumpan-electric-AjNgSvEt-v4-unsplash.jpg';
// import image27 from '../assets/images/smart-me-ag-j2E-2YQe_c8-unsplash.jpg';
// import image28 from '../assets/images/waldemar-rHfTdK9YU2Q-unsplash.jpg';
// import image29 from '../assets/images/markus-spiske-LIi9tSIKoYQ-unsplash.jpg';
// import image30 from '../assets/images/jakub-zerdzicki-uxYLtGRyGKQ-unsplash.jpg';
// import image31 from '../assets/images/alpha-innotec--nbWCvUiFJA-unsplash.jpg';
// import image32 from '../assets/images/jakub-zerdzicki-uxYLtGRyGKQ-unsplash.jpg';
// import image33 from '../assets/images/vivint-solar-9CalgkSRZb8-unsplash.jpg';
// import image34 from '../assets/images/austin-distel-wawEfYdpkag-unsplash.jpg';
// import image35 from '../assets/images/naomi-hebert-MP0bgaS_d1c-unsplash.jpg';
// import image36 from '../assets/images/claudio-schwarz-sLfUA03zaOk-unsplash.jpg';
// import image37 from '../assets/images/ben-kolde-FaPxZ88yZrw-unsplash.jpg';
// import image38 from '../assets/images/andrew-neel-cckf4TsHAuw-unsplash.jpg';
// import image39 from '../assets/images/claudio-schwarz-sLfUA03zaOk-unsplash.jpg';
// import image40 from '../assets/images/thisisengineering-WjOWazUPAss-unsplash.jpg';
// import card1Image from '../assets/images/Privatkunden.svg';
// import card2Image from '../assets/images/Geschaeftskunden.svg';
// import card3Image from '../assets/images/Smart-Home-Loesungen.svg';
// import card4Image from '../assets/images/Lichtinstallation.svg';
// import image404 from '../assets/images/404.svg';

// const cdImages = {
//   logo,
//   image1,
//   image2,
//   image3,
//   image4,
//   image5,
//   image6,
//   image7,
//   image8,
//   image9,
//   image10,
//   image11,
//   image12,
//   image13,
//   image14,
//   image15,
//   image16,
//   image17,
//   image18,
//   image19,
//   image20,
//   image21,
//   image22,
//   image23,
//   image24,
//   image25,
//   image26,
//   image27,
//   image28,
//   image29,
//   image30,
//   image31,
//   image32,
//   image33,
//   image34,
//   image35,
//   image36,
//   image37,
//   image38,
//   image39,
//   image40,
//   card1Image,
//   card2Image,
//   card3Image,
//   card4Image,
//   image404,
// };

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
        image={cdImages.image41}
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