
import Header from "../components/Header"
import SectionCards from "../components/Section_Text_and_Cards"
import SectionDivider from "../components/Section_Divider"
import Section_Gallery from "../components/Section_Gallery"
import SectionHero from "../components/Section_Hero"
import SectionTextAndImage from "../components/Section_Text_and_Image"
import Footer from "../components/Footer"
import SectionContact from "../components/Section_Contact"

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
  heading: 'Heading 1: Lorem Ipsum Home test',
  paragraph: 'Paragraph 1: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
};



function SmartHomeLoesungen() {
  return (
    <>
    <div>Elektro-Dienstleistungen-Privatkunden</div>
      <Header></Header>
      <SectionHero 
      heading={cdCopy.heading} 
      paragraph={cdCopy.paragraph} 
      image={cdImages.image30}
      logo={''}
      background={cdColors.secondaryBackgroundColorLight}>
      </SectionHero>
      <SectionTextAndImage 
        heading={cdCopy.heading}
        paragraph={cdCopy.paragraph}
        image={cdImages.image1}
        ></SectionTextAndImage>
      <SectionCards
        heading="Section Heading"
        paragraph="Section Paragraph"
        card1Heading="Card 1 Heading"
        card1Paragraph="Card 1 Paragraph"
        card1Image={cdImages.image1}
        card1ButtonPrimaryCaption="Button 1"
        card1Listitem1="Item 1"
        card1Listitem2="Item 2"
        card1Listitem3="Item 3"
        card2Heading="Card 2 Heading"
        card2Paragraph="Card 2 Paragraph"
        card2Image={cdImages.image2}
        card2ButtonPrimaryCaption="Button 2"
        card2Listitem1="Item 1"
        card2Listitem2="Item 2"
        card2Listitem3="Item 3"
        card3Heading="Card 3 Heading"
        card3Paragraph="Card 3 Paragraph"
        card3Image={cdImages.image3}
        card3ButtonPrimaryCaption="Button 3"
        card3Listitem1="Item 1"
        card3Listitem2="Item 2"
        card3Listitem3="Item 3"
        card4Heading="Card 4 Heading"
        card4Paragraph="Card 4 Paragraph"
        card4Image={cdImages.image4}
        card4ButtonPrimaryCaption="Button 4"
        card4Listitem1="Item 1"
        card4Listitem2="Item 2"
        card4Listitem3="Item 3"
      ></SectionCards>
      <Section_Gallery 
        image1={cdImages.image1}
        image2={cdImages.image2} 
        image3={cdImages.image3} 
        image4={cdImages.image4}
        image5={cdImages.image5}
        image6={cdImages.image6}
        image7={cdImages.image7}
      ></Section_Gallery>
      <SectionDivider></SectionDivider>
      <SectionContact 
        imageSrc={cdImages.image10}
        style={{backgroundColor: cdColors.quaternaryBackgroundColorLight}}>
        </SectionContact>
      <Footer></Footer>
  </>
  )
}

export default SmartHomeLoesungen