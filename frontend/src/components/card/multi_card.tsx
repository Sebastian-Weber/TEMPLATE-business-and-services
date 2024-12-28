import React from 'react'
import Button_primary from '../buttons/Button_primary'
import List from '../lists/List'

const cdColors = {
    primaryColor: '#98BB48',
    secondaryColor: '#FFF1B7',
    primaryAccentColor: '',
    secondaryAccentColor: '',
    primaryBackgroundColorDark: '#165287',
    primaryBackgroundColorDefault: '#1D6DB4',
    primaryBackgroundColorLight: '#ACC6DD',
    secondaryBackgroundColorDark: '#165287',
    secondaryBackgroundColorDefault: '#165287',
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
    sectionIntro_Paragraph: 'Willkomen bei Peters Elektro GmbH. Mit jahrelanger Erfahrung sind wir spezialisiert auf Wohn-, Gewerbe- und Industrieelektroinstallationen. Unser Team steht für Sicherheit, Innovation und eine schnelle, professionelle Arbeitsweise. Wir bedienen die Region Köln und sorgen für eine zuverlässige, kundenorientierte und effiziente Umsetzung Ihrer elektrischen Anforderungen.',
  
    sectionContact_Heading: 'Lust, mit uns die Zukunft zu elektrisieren?',
    sectionContact_Paragraph: 'Du suchst eine neue Herausforderung in einem modernen Elektroinstallationsunternehmen? Bei Peters Elektro GmbH erwarten Dich spannende Projekte im Kölner Raum, ein familiäres Team und echte Entwicklungsmöglichkeiten. Wir legen Wert auf Qualität, Innovation und ein Arbeitsklima, in dem sich jeder wohlfühlt? Das bieten wir: Abwechslungsreiche Aufgaben in einem zukunftssicheren Handwerk. Kreativer Freiraum, um eigene Ideen in unsere Projekte einzubringen. Eine Arbeitskultur, die Eigenverantwortung und Teamg-geist fördert. Bewirb dich jetzt und werde Teil unseres Teams! Wir freuen uns auf deine Bewerbung!',
  
    buttonPrimaryCaption: 'Mehr über uns erfahren -- kommt aus Home.tsx',
    buttonPrimaryURL: 'about',
  
    sectionTextAndCards_Heading: 'Unsere Leistungen',
    sectionTextAndCards_Paragraph: 'Entdecken Sie unser Leistungsspektrum. Von klassischen Elektroinstallationen für Privat- und Gewerbekunden über Lichtdesign bis zu modernen Smart-Home-Lösungen.',
    
    // buttonSecondaryCaption: 'Mehr über uns erfahren  -- kommt aus Home.tsx',
    // buttonSecondaryLink: 'about',
  };



  interface ListProps {

    listitem1: string;
  
    listitem2: string;
  
    listitem3: string;

  
  }


interface MultCardProps {
  heading: string;
  paragraph: string;
  image?: string;
  background: string;
  buttonPrimaryProps?: {
    buttonPrimaryCaption?: string;
    buttonPrimaryLink?: string;
  };
  listitem1?: string;
  listitem2?: string;
  listitem3?: string;
  listitem4?: string;
}

function MultiCard({ heading, paragraph, image, background, buttonPrimaryProps, listitem1, listitem2, listitem3, listitem4 }: MultCardProps & ListProps) {

    return (
  
      <div className='flex flex-col md:justify-center md:items-start m-4 p-4 rounded-lg' style={{ background }}>
  
       <div className='flex flex-col-reverse items-start md:flex-row md:justify-end md:items-end'>
          

          <img className="w-1/2" src={image} alt="Card image" />

    
        </div>
        <br></br>
        <h2>{heading}</h2>
        <br></br>
        <p>{paragraph}</p>
        <br></br>
        <ul>
  
          <li>{listitem1}</li>
  
          <li>{listitem2}</li>
  
          <li>{listitem3}</li>
  
          <li>{listitem4}</li>
          <br></br>
  
        </ul>
  
        {buttonPrimaryProps && buttonPrimaryProps.buttonPrimaryCaption && buttonPrimaryProps.buttonPrimaryLink && (
          <Button_primary {...buttonPrimaryProps} />
        )}
  
      </div>
    );
}

export default MultiCard



