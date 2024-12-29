
import Header from "../components/Header"
import SectionCards from "../components/Section_Text_and_Cards"
import SectionDivider from "../components/Section_Divider"
import Section_Gallery from "../components/Section_Gallery"
import SectionHero from "../components/Section_Hero"
import SectionTextAndImage from "../components/Section_Text_and_Image"
import Footer from "../components/Footer"
import SectionContact from "../components/Section_Contact"
import SectionListAndImage from "../components/Section_List_and_Image"
import SectionTextAndCards from "../components/Section_Text_and_Cards"

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
  image16: '/src/assets/images/markus-spiske-kK7uPfb2YWU-unsplash.jpg',
  card1Image: '/src/assets/images/1.svg',
  card2Image: '/src/assets/images/2.svg',
  card3Image: '/src/assets/images/3.svg',
  card4Image: '/src/assets/images/4.svg',
};

const cdCopy = {
  SectionHero_heading: 'Unsere Leistungen für Privatkunden Test',
  SectionHero_paragraph: 'Test Egal, ob Sie eine komplette Elektroinstallation in Ihrem Zuhause planen, einzelne Komponenten modernisieren oder spezielle Anpassungen vornehmen möchten – wir unterstützen Sie bei der Umsetzung Ihrer Wünsche.',

  SectionListAndCards_heading: 'Test2 Einbau, Austausch und Reparatur - Alles aus einer Hand',
  SectionListAndCards_paragraph: 'Test2 Wir bieten Ihnen einen umfassenden Service für Elektroinstallationen aller Art von Haushaltstechnik in Ihrem Zuhause. Sir sorgen dafür, dass jede Lösung perfekt auf Ihre Bedürfnisse abgestimmt ist. Vertrauen Sie auf unsere Expertise, um Ihr Zuhause sicher und effizient mit Strom zu versorgen.',
  SectionListAndCards_listItem1: 'Listitem 1',
  SectionListAndCards_listItem2: 'Listitem 2',
  SectionListAndCards_listItem3: 'Listitem 3',

  SectionListAndCards_card1Heading:'Elektroanschlüsse für Küchenmodernisierung',
  SectionListAndCards_card1Paragraph:'Statten Sie Ihre Küche mit den notwendigen Anschlüssen für moderne Geräte aus.',
  SectionListAndCards_card1ListItem1: '• Stromanschlüsse für energieeffiziente Geräte', 
  SectionListAndCards_card1ListItem2: '• Planung von Steckdosen an idealen Positionen',
  SectionListAndCards_card1listItem3: '',

  SectionListAndCards_card2Heading:'Außenbeleuchtung und Gartenstrom',
  SectionListAndCards_card2Paragraph:'Erwecken Sie Ihren Außenbereich mit durchdachten Elektroinstallationen zum Leben.',
  SectionListAndCards_card2ListItem1: '• Sicherheitsbeleuchtung für Wege und Eingänge',
  SectionListAndCards_card2listItem2: '• Stromversorgung für Garten- und Poolanlagen',
  SectionListAndCards_card2listItem3: '',
  
  SectionListAndCards_card3Heading:'...',
  SectionListAndCards_card3Paragraph:'...',
  SectionListAndCards_card3ListItem1: '• Card 3 Listitem 1',
  SectionListAndCards_card3listItem2: '• Card 3 Listitem 2',
  SectionListAndCards_card3listItem3: '',
  
  SectionListAndCards_card4Heading:'Außenbeleuchtung und Gartenstrom',
  SectionListAndCards_card4Paragraph:'Machen Sie Ihr Zuhause bereit für die Zukunft der Mobilität.',
  SectionListAndCards_card4ListItem1: '• Wallbox-Installation direkt bei Ihnen zu Hause',
  SectionListAndCards_card4listItem2: '• Beratung zu passenden Modellen und Fördermöglichkeiten',
  SectionListAndCards_card4listItem3: '',
  
  
  
};



function ElektroDienstleistungenPrivatkunden() {
  return (
    <>
    <div>Elektro-Dienstleistungen-Privatkunden</div>
      <Header></Header>
      <SectionHero 
      heading={cdCopy.SectionHero_heading} 
      paragraph={cdCopy.SectionHero_paragraph} 
      image={cdImages.image15}
      logo={''}
      background={cdColors.secondaryBackgroundColorLight}>
      </SectionHero>
      <SectionListAndImage 
        heading={cdCopy.SectionListAndCards_heading}
        paragraph={cdCopy.SectionListAndCards_paragraph}
        image={cdImages.image1}
        listitem1={cdCopy.SectionListAndCards_listItem1}
        listitem2={cdCopy.SectionListAndCards_listItem2}
        listitem3={cdCopy.SectionListAndCards_listItem3}
      ></SectionListAndImage>
      <SectionTextAndCards 
        card1Image={cdImages.card1Image}
        card1Heading={cdCopy.SectionListAndCards_card1Heading}
        card1Paragraph={cdCopy.SectionListAndCards_card1Paragraph}
        card1ButtonPrimaryCaption="Button 1"
        card1Listitem1={cdCopy.SectionListAndCards_card1ListItem1}
        card1Listitem2={cdCopy.SectionListAndCards_card1ListItem2}
        card1Listitem3={cdCopy.SectionListAndCards_card1listItem3}
        card2Image={cdImages.card2Image}
        card2Heading={cdCopy.SectionListAndCards_card2Heading}
        card2Paragraph={cdCopy.SectionListAndCards_card2Paragraph}
        card2ButtonPrimaryCaption="Button 2"
        card2Listitem1={cdCopy.SectionListAndCards_card2ListItem1}
        card2Listitem2={cdCopy.SectionListAndCards_card2listItem2}
        card2Listitem3={cdCopy.SectionListAndCards_card2listItem3}
        card3Image={cdImages.card3Image}
        card3Heading={cdCopy.SectionListAndCards_card3Heading}
        card3Paragraph={cdCopy.SectionListAndCards_card3Paragraph}
        card3ButtonPrimaryCaption="Button 3"
        card3Listitem1={cdCopy.SectionListAndCards_card3ListItem1}
        card3Listitem2={cdCopy.SectionListAndCards_card3listItem2}
        card3Listitem3={cdCopy.SectionListAndCards_card3listItem3}
        card4Image={cdImages.card4Image}
        card4Heading={cdCopy.SectionListAndCards_card4Heading}
        card4Paragraph={cdCopy.SectionListAndCards_card4Paragraph}
        card4ButtonPrimaryCaption="Button 4"
        card4Listitem1={cdCopy.SectionListAndCards_card4ListItem1}
        card4Listitem2={cdCopy.SectionListAndCards_card4listItem2}
        card4Listitem3={cdCopy.SectionListAndCards_card4listItem3}
      ></SectionTextAndCards>
      <SectionDivider></SectionDivider>
      <SectionContact></SectionContact>
      <Footer></Footer>
  </>
  )
}

export default ElektroDienstleistungenPrivatkunden