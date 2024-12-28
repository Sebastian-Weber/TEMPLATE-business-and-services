
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
};

const cdCopy = {
  SectionHero_heading: 'Unsere Leistungen für Privatkunden Test',
  SectionHero_paragraph: 'Test Egal, ob Sie eine komplette Elektroinstallation in Ihrem Zuhause planen, einzelne Komponenten modernisieren oder spezielle Anpassungen vornehmen möchten – wir unterstützen Sie bei der Umsetzung Ihrer Wünsche.',
  SectionListAndCards_heading: 'Test2 Einbau, Austausch und Reparatur - Alles aus einer Hand',
  SectionListAndCards_paragraph: 'Test2 Wir bieten Ihnen einen umfassenden Service für Elektroinstallationen aller Art von Haushaltstechnik in Ihrem Zuhause. Sir sorgen dafür, dass jede Lösung perfekt auf Ihre Bedürfnisse abgestimmt ist. Vertrauen Sie auf unsere Expertise, um Ihr Zuhause sicher und effizient mit Strom zu versorgen.',
  SectionListAndCards_listItem1: 'Test 3 Einbau neuer Elektronikgeräte',
  SectionListAndCards_listItem2: 'Test 4 Austausch alter Installationen',
  SectionListAndCards_listItem3: 'Test 5 Fachgerechte Reparaturen',
  SectionListAndCards_listItem4: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
  SectionListAndCards_listItem5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',


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
        card1Heading={cdCopy.SectionListAndCards_listItem1}
        card1Paragraph={cdCopy.SectionListAndCards_listItem1}
        card2Heading={cdCopy.SectionListAndCards_listItem2}
        card2Paragraph={cdCopy.SectionListAndCards_listItem2}
        card3Heading={cdCopy.SectionListAndCards_listItem3}
        card3Paragraph={cdCopy.SectionListAndCards_listItem3}
        card4Heading={cdCopy.SectionListAndCards_listItem4}
        card4Paragraph={cdCopy.SectionListAndCards_listItem4}
        card1Image={cdImages.image1}
        card2Image={cdImages.image2}
        card3Image={cdImages.image2}
        card4Image={cdImages.image2}
        card1ButtonPrimaryCaption="Button 1"
        card2ButtonPrimaryCaption="Button 2"
        card3ButtonPrimaryCaption="Button 3"
        card4ButtonPrimaryCaption="Button 4"
      ></SectionTextAndCards>
      <SectionDivider></SectionDivider>
      <SectionContact></SectionContact>
      <Footer></Footer>
  </>
  )
}

export default ElektroDienstleistungenPrivatkunden