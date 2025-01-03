
import Footer from "../components/Footer"
import Header from "../components/Header"
// import List from "../components/lists/List";
import SectionHero from "../components/Section_Hero"
import SectionTextAndImage from "../components/Section_Text_and_Image"
import SectionContact from "../components/Section_Contact"
import SectionDivider from "../components/Section_Divider";

const cdImages = {
  logo: '/src/assets/Peters_Logotype.svg',
  image1: '/assets/images/vishnu-mohanan-qso4MyFvhNc-unsplash.jpg',
  image2: '/assets/images/mohamed-marey-M9mRKGW9L30-unsplash.jpg',
  image3: '/assets/images/james-sandbrook-h0-lwHj7heI-unsplash.jpg',
  image4: '/assets/images/mika-baumeister-dp9AxaKHdVg-unsplash.png',
  image5: '/assets/images/steve-johnson-hokONTrHIAQ-unsplash.jpg',
  image6: '/assets/images/david-dvoracek-2kWxMl5IWTA-unsplash.jpg',
  image7: '/assets/images/neven-krcmarek-67FG6zD8WPQ-unsplash.png',
  image8: '/assets/images/thisisengineering-ovWUKV1btXk-unsplash.png',
  image9: '/assets/images/markus-spiske-kK7uPfb2YWU-unsplash.jpg',
  image10: '/assets/images/thisisengineering-ZPeXrWxOjRQ-unsplash.jpg',
  image11: '/assets/images/gidlark-d662tNZfe_g-unsplash.jpg',
  image12: '/assets/images/brian-wangenheim--yWw3HlVVnQ-unsplash.jpg',
  image13: '/assets/images/shirish-suwal-ctmuaOO-JJI-unsplash.jpg',
  image14: '/assets/images/gidlark-d662tNZfe_g-unsplash.jpg',
  image15: '/assets/images/tekton-ndJlw4Bz-1Y-unsplash.jpg',
  image16: '/assets/images/thisisengineering-zhXR20LFowA-unsplash.jpg',
  image17: '/assets/images/steffen-lemmerzahl-fu3iLPBe964-unsplash.jpg',
  image18: '/assets/images/s-tsuchiya-gxIg8FcDIC8-unsplash.jpg',
  image19: '/assets/images/alex-wolowiecki-uXgoasNqYqw-unsplash.jpg',
  image20: '/assets/images/jimmy-nilsson-masth-CskQi7DDUuY-unsplash.jpg',
  image21: '/assets/images/thisisengineering-q9yJE97A44Q-unsplash.jpg',
  image22: '/assets/images/sol-tZw3fcjUIpM-unsplash.png',
  image23: '/assets/images/frames-for-your-heart-iOLHAIaxpDA-unsplash.jpg',
  image24: '/assets/images/jimmy-nilsson-masth-hrIpsXkrAO0-unsplash.png',
  image25: '/assets/images/markus-spiske-rNn_TU8dvoY-unsplash.png',
  image26: '/assets/images/kumpan-electric-AjNgSvEt-v4-unsplash.jpg',
  image27: '/assets/images/smart-me-ag-j2E-2YQe_c8-unsplash.jpg',
  image28: '/assets/images/waldemar-rHfTdK9YU2Q-unsplash.jpg',
  image29: '/assets/images/markus-spiske-LIi9tSIKoYQ-unsplash.jpg',
  image30: '/assets/images/jakub-zerdzicki-uxYLtGRyGKQ-unsplash.jpg',
  image31: '/assets/images/alpha-innotec--nbWCvUiFJA-unsplash.jpg',
  image32: '/assets/images/jakub-zerdzicki-uxYLtGRyGKQ-unsplash.jpg',
  image33: '/assets/images/vivint-solar-9CalgkSRZb8-unsplash.jpg',
  image34: '/assets/images/austin-distel-wawEfYdpkag-unsplash.jpg',
  image35: '/assets/images/naomi-hebert-MP0bgaS_d1c-unsplash.jpg',
  image36: '/assets/images/claudio-schwarz-sLfUA03zaOk-unsplash.jpg',
  image37: '/assets/images/ben-kolde-FaPxZ88yZrw-unsplash.jpg',
  image38: '/assets/images/andrew-neel-cckf4TsHAuw-unsplash.jpg',
  image39: '/assets/images/claudio-schwarz-sLfUA03zaOk-unsplash.jpg',
  image40: '/assets/images/thisisengineering-WjOWazUPAss-unsplash.jpg',

  card1Image: '/assets/images/Privatkunden.svg',
  card2Image: '/assets/images/Geschaeftskunden.svg',
  card3Image: '/assets/images/Smart-Home-Loesungen.svg',
  card4Image: '/assets/images/Lichtinstallation.svg',

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


const cdCopy = {
  sectionHero_Heading: 'Über uns - Elektro Peters GmbH',
  sectionHero_Subheading: '',
  sectionHero_Paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

  sectionTextAndImage_Heading: 'Unser Leistungsangebot',
  sectionTextAndImage_Paragraph: 'Unser Leistungsspektrum umfasst:',
  listitem1: '• Elektrotechnik: Moderne Elektroinstallationen, die Ihr Zuhause sicherer und komfortabler machen. Unsere Experten implementieren die neuesten Technologien für ein effizientes und vernetztes Zuhause.',
  listitem2: '• Wärmepumpen: Innovative und umweltfreundliche Heiz- und Kühllösungen. Wärmepumpen nutzen erneuerbare Energiequellen und sind eine effiziente Alternative zu herkömmlichen Heizsystemen.',
  listitem3: '• Photovoltaik-Anlagen: Nutzen Sie die Kraft der Sonne zur Stromerzeugung. Wir planen, installieren und warten Photovoltaikanlagen, die Ihre Energiekosten senken und zur Nachhaltigkeit Ihres Haushalts oder Unternehmens beitragen.',
  listitem4: '',
  listitem5: '',
};



const About = () => {
  const buttonPrimaryProps = {
    buttonPrimaryCaption: '',
    buttonPrimaryLink: '',
  };

  const listItems = [
    'Elektroinstallation – Planung und Umsetzung elektrischer Anlagen für private und gewerbliche Kunden.',
    'Smarte Haustechnik – Installation und Integration von Smart-Home-Systemen für mehr Komfort und Sicherheit.',
    'Photovoltaik-Anlagen – Beratung, Montage und Wartung für nachhaltige Energiegewinnung.',
    'E-Mobilität – Einrichtung und Installation von Ladestationen für Elektrofahrzeuge.',
    'Beleuchtungskonzepte – Design und Installation energieeffizienter und stimmungsvoller Beleuchtung.',
    'Fehlerdiagnose und Reparatur – Schnelle Behebung von Störungen und Defekten an Elektroanlagen.',
    'Prüfung und Wartung – Regelmäßige Überprüfung elektrischer Anlagen für Sicherheit und Zuverlässigkeit.',
    'Netzwerk- und Kommunikationstechnik – Einrichtung moderner IT- und Kommunikationsinfrastruktur.',
    'Altbausanierung – Modernisierung alter Elektroinstallationen nach aktuellen Standards.',
    // Add more items as needed
  ];

// 

// 

// 

// 

  return (
    <>
      <div className="">
        <Header></Header>
        <SectionHero
          heading={cdCopy.sectionHero_Heading}
          subheading={cdCopy.sectionHero_Subheading}
          paragraph={cdCopy.sectionHero_Paragraph}
          image={cdImages.image8}
          logo={''}
          background={cdColors.secondaryBackgroundColorLight}>
        </SectionHero>
        <SectionTextAndImage 
          heading={cdCopy.sectionTextAndImage_Heading}
          paragraph={cdCopy.sectionTextAndImage_Paragraph}
          image={cdImages.image10}
          buttonPrimaryProps={buttonPrimaryProps}
          listItems={listItems}
        />
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

export default About