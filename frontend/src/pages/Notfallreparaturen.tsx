
import Header from "../components/Header"
import SectionDivider from "../components/Section_Divider"
import SectionHero from "../components/Section_Hero"
import Footer from "../components/Footer"
import SectionContact from "../components/Section_Contact"
import SectionListAndImage from "../components/Section_List_and_Image"
import SectionTextAndCards from "../components/Section_Text_and_Cards"

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

const cdCopy = {
  SectionHero_heading: 'Unsere Leistungen für Gewerbekunden',
  SectionHero_paragraph: 'Ob Sie eine komplette Elektroinstallation in Ihrem Zuhause planen, einzelne Komponenten modernisieren oder spezielle Anpassungen vornehmen möchten – wir unterstützen Sie bei der Umsetzung Ihrer Wünsche.',

  SectionListAndCards_heading: 'Einbau, Austausch und Reparatur - Alles aus einer Hand',
  SectionListAndCards_paragraph: 'Wir bieten Ihnen einen umfassenden Service für Elektroinstallationen aller Art von Haushaltstechnik in Ihrem Zuhause. Sir sorgen dafür, dass jede Lösung perfekt auf Ihre Bedürfnisse abgestimmt ist. Vertrauen Sie auf unsere Expertise, um Ihr Zuhause sicher und effizient mit Strom zu versorgen.',
  SectionListAndCards_listItem1: 'Lorem',
  SectionListAndCards_listItem2: 'Ipsum',
  SectionListAndCards_listItem3: 'Dolor',

  SectionListAndCards_card1Heading:'Elektroanschlüsse für Küchenmodernisierung',
  SectionListAndCards_card1Paragraph:'Statten Sie Ihre Küche mit den notwendigen Anschlüssen für moderne Geräte aus.',
  SectionListAndCards_card1ListItem1: '• Stromanschlüsse für energieeffiziente Geräte', 
  SectionListAndCards_card1ListItem2: '• Planung von Steckdosen an idealen Positionen',
  SectionListAndCards_card1listItem3: '',

  SectionListAndCards_card2Heading:'Lorem Ipsum dolor sit amet',
  SectionListAndCards_card2Paragraph:'Erwecken Sie Ihren Außenbereich mit durchdachten Elektroinstallationen zum Leben.',
  SectionListAndCards_card2ListItem1: '• Sicherheitsbeleuchtung für Wege und Eingänge',
  SectionListAndCards_card2listItem2: '• Stromversorgung für Garten- und Poolanlagen',
  SectionListAndCards_card2listItem3: '',
  
  SectionListAndCards_card3Heading:'Lorem Ipsum dolor sit amet',
  SectionListAndCards_card3Paragraph:'Lorem Ipsum dolor sit amet consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
  SectionListAndCards_card3ListItem1: '• Lorem Ipsum',
  SectionListAndCards_card3listItem2: '• Dolor Sit',
  SectionListAndCards_card3listItem3: '',
  
  SectionListAndCards_card4Heading:'Außenbeleuchtung und Gartenstrom',
  SectionListAndCards_card4Paragraph:'Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet. Machen Sie Ihr Zuhause bereit für die Zukunft der Mobilität.',
  SectionListAndCards_card4ListItem1: '• Wallbox-Installation direkt bei Ihnen zu Hause',
  SectionListAndCards_card4listItem2: '• Beratung zu passenden Modellen und Fördermöglichkeiten',
  SectionListAndCards_card4listItem3: '',
  
  
  
};



function Notfallreparaturen() {
  return (
    <>
    <div>Elektro-Dienstleistungen-Gewerbekunden</div>
      <Header></Header>
      <SectionHero 
      heading={cdCopy.SectionHero_heading} 
      paragraph={cdCopy.SectionHero_paragraph} 
      image={cdImages.image34}
      logo={''}
      background={cdColors.secondaryBackgroundColorLight}>
      </SectionHero>
      <SectionListAndImage 
        heading={cdCopy.SectionListAndCards_heading}
        paragraph={cdCopy.SectionListAndCards_paragraph}
        image={cdImages.image4}
        listitem1={cdCopy.SectionListAndCards_listItem1}
        listitem2={cdCopy.SectionListAndCards_listItem2}
        listitem3={cdCopy.SectionListAndCards_listItem3}
        buttonPrimaryProps={{ buttonPrimaryCaption: 'Mehr erfahren', buttonPrimaryLink: 'about' }}
      ></SectionListAndImage>
      <SectionTextAndCards 
        heading="Lorem Ipsum dolor sit amet"
        paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        image={cdImages.image31}

        // card1Image={cdImages.imageNumber1}
        card1Heading={cdCopy.SectionListAndCards_card1Heading}
        card1Paragraph={cdCopy.SectionListAndCards_card1Paragraph}
        card1Listitem1={cdCopy.SectionListAndCards_card1ListItem1}
        card1Listitem2={cdCopy.SectionListAndCards_card1ListItem2}
        card1Listitem3={cdCopy.SectionListAndCards_card1listItem3}
        card1ButtonPrimaryCaption="Button 1"
        card1ButtonPrimaryLink="/link1"

        // card2Image={cdImages.imageNumber2}
        card2Heading={cdCopy.SectionListAndCards_card2Heading}
        card2Paragraph={cdCopy.SectionListAndCards_card2Paragraph}
        card2Listitem1={cdCopy.SectionListAndCards_card2ListItem1}
        card2Listitem2={cdCopy.SectionListAndCards_card2listItem2}
        card2ButtonPrimaryCaption="Button 2"
        card2ButtonPrimaryLink="/link2"
        card2Listitem3={cdCopy.SectionListAndCards_card2listItem3}

        // card3Image={cdImages.imageNumber3}
        card3Heading={cdCopy.SectionListAndCards_card3Heading}
        card3Paragraph={cdCopy.SectionListAndCards_card3Paragraph}
        card3Listitem1={cdCopy.SectionListAndCards_card3ListItem1}
        card3Listitem2={cdCopy.SectionListAndCards_card3listItem2}
        card3Listitem3={cdCopy.SectionListAndCards_card3listItem3}
        card3ButtonPrimaryCaption="Button 3"
        card3ButtonPrimaryLink="/link3"

        // card4Image={cdImages.imageNumber4}
        card4Heading={cdCopy.SectionListAndCards_card4Heading}
        card4Paragraph={cdCopy.SectionListAndCards_card4Paragraph}
        card4Listitem1={cdCopy.SectionListAndCards_card4ListItem1}
        card4Listitem2={cdCopy.SectionListAndCards_card4listItem2}
        card4Listitem3={cdCopy.SectionListAndCards_card4listItem3}
        card4ButtonPrimaryCaption="Button 4"
        card4ButtonPrimaryLink="/link4"

      ></SectionTextAndCards>
      <SectionDivider></SectionDivider>
      <SectionContact 
        imageSrc={cdImages.image37}
        style={{backgroundColor: cdColors.quaternaryBackgroundColorLight}}>
        </SectionContact>
      <Footer></Footer>
  </>
  )
}

export default Notfallreparaturen