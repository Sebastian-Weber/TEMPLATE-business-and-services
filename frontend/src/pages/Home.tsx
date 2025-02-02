
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
  SectionListAndCards_card1Paragraph:'Von der Installation neuer Systeme bis zur Modernisierung: Mit unserer Expertise gestalten Sie Elektroinstallationen individuell – mit perfektem Detail, von Steckdosenplatzierung bis Smart-Home-Technologie.',
  SectionListAndCards_card1ListItem1: '• Planung und Installation neuer Elektroanlagen',
  SectionListAndCards_card1listItem2: '• Modernisierung und Energieeffizienz',
  SectionListAndCards_card1listItem3: '• Sicherheitslösungen',

  SectionListAndCards_card2Heading:'Elektroinstallationen für Geschäftskunden',
  SectionListAndCards_card2Paragraph:'Ob Neubau, Modernisierung oder die Einrichtung komplexer Anlagen: Wir bieten maßgeschneiderte Elektroinstallationen, die auf die Anforderungen Ihres Unternehmens zugeschnitten sind. Effizient, sicher und zukunftsorientiert.',
  SectionListAndCards_card2ListItem1: '• Individuelle Planung und Installation ',
  SectionListAndCards_card2listItem2: '• Modernisierung und Energieoptimierung ',
  SectionListAndCards_card2listItem3: '• Sicherheits- und Netzwerktechnik',

  SectionListAndCards_card3Heading:'Smart-Home Lösungen',
  SectionListAndCards_card3Paragraph:'Gestalten Sie Ihr Zuhause intelligenter und bequemer mit modernsten Smart-Home-Technologien. Wir bieten innovative Lösungen, die Ihren Alltag erleichtern und Ihre Sicherheit erhöhen.',
  SectionListAndCards_card3ListItem1: '• Intelligente Steuerungssysteme',
  SectionListAndCards_card3listItem2: '• Multimedia-Integration',
  SectionListAndCards_card3listItem3: '• Erweiterbare Systeme',
  
  SectionListAndCards_card4Heading:'Licht-Design und Installation',
  SectionListAndCards_card4Paragraph:'Verleihen Sie Ihrem Raum mit maßgeschneiderten Lichtkonzepten eine besondere Atmosphäre. Wir bieten kreative Lösungen, die Funktionalität und Ästhetik miteinander verbinden.',
  SectionListAndCards_card4ListItem1: '• Individuelle Licht- und Akzentplanung',
  SectionListAndCards_card4listItem2: '• Energieeffiziente Beleuchtung ',
  SectionListAndCards_card4listItem3: '• Außen- und Gartenbeleuchtung',
};


const Home = () => {
  const [buttonPrimaryCaption1, setButtonPrimaryCaption1] = useState('Mehr erfahren');
  const [buttonPrimaryLink1, setButtonPrimaryLink1] = useState('/Elektro-Dienstleistungen-Privatkunden');

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
          card2ButtonPrimaryCaption="Mehr erfahren"
          card2ButtonPrimaryLink="Elektro-Dienstleistungen-Gewerbekunden"
          card2Listitem1={cdCopy.SectionListAndCards_card2ListItem1}
          card2Listitem2={cdCopy.SectionListAndCards_card2listItem2}
          card2Listitem3={cdCopy.SectionListAndCards_card2listItem3}
          // card2ButtonPrimaryLink={buttonPrimaryProps1.buttonPrimaryLink}
          card3Image={cdImages.card3Image}
          card3Heading={cdCopy.SectionListAndCards_card3Heading}
          card3Paragraph={cdCopy.SectionListAndCards_card3Paragraph}
          card3ButtonPrimaryCaption="Mehr erfahren"
          card3ButtonPrimaryLink="Smart-Home-Loesungen"
          card3Listitem1={cdCopy.SectionListAndCards_card3ListItem1}
          card3Listitem2={cdCopy.SectionListAndCards_card3listItem2}
          card3Listitem3={cdCopy.SectionListAndCards_card3listItem3}
          card4Image={cdImages.card4Image}
          card4Heading={cdCopy.SectionListAndCards_card4Heading}
          card4Paragraph={cdCopy.SectionListAndCards_card4Paragraph}
          card4ButtonPrimaryCaption="Mehr erfahren"
          card4ButtonPrimaryLink="Lichtdesign-und-Installation"
          card4Listitem1={cdCopy.SectionListAndCards_card4ListItem1}
          card4Listitem2={cdCopy.SectionListAndCards_card4listItem2}
          card4Listitem3={cdCopy.SectionListAndCards_card4listItem3}
          ></SectionTextAndCards>
        </ButtonPrimaryProvider>

        <SectionDivider/>

        <ButtonPrimaryProvider value={buttonPrimaryProps1}>
          <SectionTextAndCards 
          heading="Nachhaltigkeit & Energielösungen"
          paragraph="Entdecken Sie innovative Energielösungen für eine nachhaltige Zukunft. Von effizienten Photovoltaikanlagen und intelligentem Energiemanagement bis hin zu umweltfreundlichen Speichertechnologien – wir bieten maßgeschneiderte Konzepte für eine ressourcenschonende Energieversorgung."
          card1Image={cdImages.image25}
          card1Heading="Photovoltaik-Anlagen"
          card1Paragraph="Nutzen Sie die Kraft der Sonne mit einer Photovoltaik-Anlage und reduzieren Sie Ihre Energiekosten. Wir planen und installieren passgenaue Systeme für eine effiziente Stromerzeugung."
          card1ButtonPrimaryCaption="Mehr erfahren"
          card1ButtonPrimaryLink="Photovoltaik-Anlagen"
          card1Listitem1="• Individuelle Anlagenplanung"
          card1Listitem2="• Montage und Inbetriebnahme"
          card1Listitem3="• Speichersysteme"
          card2Image={cdImages.image39}
          card2Heading="Solaranlagen-Installation"
          card2Paragraph={cdCopy.SectionListAndCards_card2Paragraph}
          card2ButtonPrimaryCaption="Mehr erfahren"
          card2ButtonPrimaryLink="Solaranlagen-Installation"
          card2Listitem1="• Individuelle Beratung und Planung"
          card2Listitem2="• Fachgerechte Installation"
          card2Listitem3="• Wartung und Überprüfung"
          card3Image={cdImages.image24}
          card3Heading="Energieeffiziente Beleuchtung"
          card3Paragraph={cdCopy.SectionListAndCards_card3Paragraph}
          card3ButtonPrimaryCaption="Mehr erfahren"
          card3ButtonPrimaryLink="Energieeffiziente-Beleuchtung"
          card3Listitem1="• Individuelle Lichtkonzepte"
          card3Listitem2="•Installation moderner LED-Technik"
          card3Listitem3="• Beratung zu Fördermöglichkeiten"
          card4Image={cdImages.image28}
          card4Heading="Ladestationen für E-Fahrzeuge"
          card4Paragraph={cdCopy.SectionListAndCards_card4Paragraph}
          card4ButtonPrimaryCaption="Mehr erfahren"
          card4ButtonPrimaryLink="Ladestationen-fuer-E-Fahrzeuge"
          card4Listitem1="• Individuelle Beratung und Planung"
          card4Listitem2="• Individuelle Energieoptimierung"
          card4Listitem3="• Zukunftssicheres System"
          ></SectionTextAndCards>
        </ButtonPrimaryProvider>

        <SectionDivider></SectionDivider>
        
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
          background={cdColors.quaternaryBackgroundColorLight}
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
        style={{backgroundColor: cdColors.tertiaryBackgroundColorLight}}>
        </SectionContact>
        <Footer></Footer>
        </div>
    </>
  )
}

export default Home