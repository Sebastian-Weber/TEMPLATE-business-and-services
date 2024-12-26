
import React, { useState } from 'react';
import Footer from "../components/Footer"
import Header from "../components/Header"
import SectionCards from "../components/Section_Cards"
import SectionContact from "../components/Section_Contact"
import SectionDivider from "../components/Section_Divider"
import Section_Gallery from "../components/Section_Gallery"
import SectionHero from "../components/Section_Hero"
import SectionTextAndImage from "../components/Section_Text_and_Image"
import { ButtonPrimaryProvider } from "../contexts/ButtonPrimaryContext"


const cdImages = {
  logo: '/src/assets/Peters_Logotype.svg',
  image1: '/src/assets/images/vishnu-mohanan-qso4MyFvhNc-unsplash.jpg',
  image2: '/src/assets/images/mohamed-marey-M9mRKGW9L30-unsplash.jpg',
  image3: '/src/assets/images/james-sandbrook-h0-lwHj7heI-unsplash.jpg',
  image4: '/src/assets/images/mika-baumeister-dp9AxaKHdVg-unsplash.png',
  image5: '/src/assets/images/steve-johnson-hokONTrHIAQ-unsplash.jpg',
  image6: '/src/assets/images/david-dvoracek-2kWxMl5IWTA-unsplash.jpg',
  image7: '/src/assets/images/neven-krcmarek-67FG6zD8WPQ-unsplash.png',
  image8: '/src/assets/images/thisisengineering-ovWUKV1btXk-unsplash.png',
  image9: '/src/assets/images/markus-spiske-kK7uPfb2YWU-unsplash.jpg',
  image10: '/src/assets/images/thisisengineering-ZPeXrWxOjRQ-unsplash.jpg',
  image11: '/src/assets/images/gidlark-d662tNZfe_g-unsplash.jpg',
  image12: '/src/assets/images/brian-wangenheim--yWw3HlVVnQ-unsplash.jpg',
  image13: '/src/assets/images/shirish-suwal-ctmuaOO-JJI-unsplash.jpg',
  image14: '/src/assets/images/gidlark-d662tNZfe_g-unsplash.jpg',
  image15: '/src/assets/images/tekton-ndJlw4Bz-1Y-unsplash.jpg',
  image16: '/src/assets/images/thisisengineering-zhXR20LFowA-unsplash.jpg',
  image17: '/src/assets/images/steffen-lemmerzahl-fu3iLPBe964-unsplash.jpg',
  image18: '/src/assets/images/s-tsuchiya-gxIg8FcDIC8-unsplash.jpg',
  image19: '/src/assets/images/alex-wolowiecki-uXgoasNqYqw-unsplash.jpg',
  image20: '/src/assets/images/jimmy-nilsson-masth-CskQi7DDUuY-unsplash.jpg',
  image21: '/src/assets/images/thisisengineering-q9yJE97A44Q-unsplash.jpg',
  image22: '/src/assets/images/sol-tZw3fcjUIpM-unsplash.png',
  image23: '/src/assets/images/frames-for-your-heart-iOLHAIaxpDA-unsplash.jpg',
  image24: '/src/assets/images/jimmy-nilsson-masth-hrIpsXkrAO0-unsplash.png',
  image25: '/src/assets/images/markus-spiske-rNn_TU8dvoY-unsplash.png',
  image26: '/src/assets/images/kumpan-electric-AjNgSvEt-v4-unsplash.jpg',
  image27: '/src/assets/images/smart-me-ag-j2E-2YQe_c8-unsplash.jpg',
  image28: '/src/assets/images/waldemar-rHfTdK9YU2Q-unsplash.jpg',
  image29: '/src/assets/images/markus-spiske-LIi9tSIKoYQ-unsplash.jpg',
  image30: '/src/assets/images/jakub-zerdzicki-uxYLtGRyGKQ-unsplash.jpg',
  image31: '/src/assets/images/jakub-zerdzicki-uxYLtGRyGKQ-unsplash.jpg',
};

const cdCopy = {
  sectionHero_Heading: '',
  sectionHero_Subheading: 'Energietechnik und Smart-Home-Lösungen in der Region Köln',
  sectionHero_Paragraph: '',

  sectionIntro_Heading: 'Von der Steckdose bis zur Smart-Home-Lösung',
  sectionIntro_Paragraph: 'Willkommen bei Peters Elektro GmbH, Ihrem zuverlässigen Partner für professionelle Elektro-Dienstleistungen. Mit jahrelanger Erfahrung sind wir spezialisiert auf Wohn-, Gewerbe- und Industrieelektroinstallationen – von regelmäßiger Wartung bis hin zu modernen Smart-Home-Lösungen. Unser Team steht für Sicherheit, Innovation und eine schnelle, professionelle Arbeitsweise. Wir bedienen die Region Köln und sorgen für eine zuverlässige, kundenorientierte und effiziente Umsetzung Ihrer elektrischen Anforderungen.',

  sectionContact_Heading: 'Lust, mit uns die Zukunft zu elektrisieren?',
  sectionContact_Paragraph: 'Du suchst eine neue Herausforderung in einem modernen Elektroinstallationsunternehmen mit Herz? Bei Peters erwarten dich spannende Projekte im Kölner Raum, ein familiäres Team und echte Entwicklungsmöglichkeiten. Wir legen Wert auf Qualität, Innovation und ein Arbeitsklima, in dem sich jeder wohlfühlt? Das bieten wir dir: Abwechslungsreiche Aufgaben in einem zukunftssicheren Handwerk. Kreativer Freiraum, um eigene Ideen in unsere Projekte einzubringen. Eine Arbeitskultur, die Eigenverantwortung und Teamg-geist fördert. Bewirb dich jetzt und werde Teil unseres Teams! Wir freuen uns auf deine Bewerbung.',

  buttonPrimaryCaption: 'Mehr über uns erfahren -- kommt aus Home.tsx',
  buttonPrimaryURL: 'about',
  
  // buttonSecondaryCaption: 'Mehr über uns erfahren  -- kommt aus Home.tsx',
  // buttonSecondaryLink: 'about',
};

const cdColors = {
  primaryColor: '#98BB48',
  secondaryColor: '#FFF1B7',
  primaryAccentColor: '',
  secondaryAccentColor: '',
  primaryBackgroundColorDark: '#165287',
  primaryBackgroundColorDefault: '#1D6DB4',
  primaryBackgroundColorLight: '#E9D9D3',
  secondaryBackgroundColorDark: '#165287',
  secondaryBackgroundColorDefault: '#165287',
  secondaryBackgroundColorLight: '#BBD3C6',
  tertiaryBackgroundColorDark: '#165287',
  tertiaryBackgroundColorDefault: '#165287',
  tertiaryBackgroundColorLight: '#B5CFE6',
  quaternaryBackgroundColorDark: '#165287',
  quaternaryBackgroundColorDefault: '#165287',
  quaternaryBackgroundColorLight: '#F3EBC9',
  primaryFontColor: '#191A1E',
  secondaryFontColor: '#817E72',
  tertiaryFontColor: '#D6D5CB'
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
        background={cdColors.secondaryColor}>
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

        <SectionCards></SectionCards>
        {/* <SectionDivider></SectionDivider> */}
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

        <SectionContact></SectionContact>
        <Footer></Footer>
      </div>
    </>
  )
}

export default Home