
import Footer from "../components/Footer"
import Header from "../components/Header"
import List from "../components/lists/List";
import SectionHero from "../components/Section_Hero"
import SectionTextAndImage from "../components/Section_Text_and_Image"
import SectionContact from "../components/Section_Contact"
import SectionDivider from "../components/Section_Divider";

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
  image22: '/src/assets/images/thisisengineering-q9yJE97A44Q-unsplash.jpg',
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


const cdCopy = {
  sectionHero_Heading: 'Über uns - Elektro Peters',
  sectionHero_Subheading: '',
  sectionHero_Paragraph: 'Unser Erfolg basiert auf nachhaltigen Lösungen und einem verantwortungsvollen Umgang mit Ressourcen.',

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
        <SectionContact></SectionContact>
        <Footer></Footer>
      </div>
    </>
  )
}

export default About