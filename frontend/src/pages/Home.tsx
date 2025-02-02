
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
import cdColors from '../utils/cdColors';


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

  buttonSecondaryCaption: 'Mehr über uns erfahren -- kommt aus Home.tsx',
  buttonSecondaryURL: 'about',

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

  const buttonSecondaryProps1 = {
    buttonSecondaryCaption: 'Secondary Button',
    buttonSecondaryLink: '/secondary',
    setButtonSecondaryCaption: () => {},
    setButtonSecondaryLink: () => {},
  };

  const buttonPrimaryProps2 = {
    buttonPrimaryCaption: buttonPrimaryCaption2,
    buttonPrimaryLink: buttonPrimaryLink2,
    setButtonPrimaryCaption: setButtonPrimaryCaption2,
    setButtonPrimaryLink: setButtonPrimaryLink2,
  };



  return (
    <>
      <div className="container">
        <Header></Header>
        <SectionHero 
        heading={cdCopy.sectionHero_Heading}
        subheading={cdCopy.sectionHero_Subheading}
        paragraph={cdCopy.sectionHero_Paragraph} 
        image={cdImages.image41}
        logo={cdImages.logo}
        background={cdColors.primaryAccentColor}>
        </SectionHero>

        <ButtonPrimaryProvider value={buttonPrimaryProps1}>
          <SectionTextAndImage 
          heading={cdCopy.sectionIntro_Heading}
          paragraph={cdCopy.sectionIntro_Paragraph}
          image={cdImages.image7}
          buttonPrimaryProps={buttonPrimaryProps1}
          buttonSecondaryProps={buttonSecondaryProps1}
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