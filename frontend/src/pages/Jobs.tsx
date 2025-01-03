
import Footer from "../components/Footer"
import Header from "../components/Header"
// import SectionCards from "../components/Section_Text_and_Cards"
import SectionContact from "../components/Section_Contact"
import SectionDivider from "../components/Section_Divider"
// import Section_Gallery from "../components/Section_Gallery"
import SectionHero from "../components/Section_Hero"
import SectionTextAndImage from "../components/Section_Text_and_Image"

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
  sectionHero_Heading: 'Karriere bei Peters Elektro GmbH',
  sectionHero_Subheading: '',
  sectionHero_Paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

  sectionTextAndImage_Heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  sectionTextAndImage_Paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  
  buttonPrimaryCaption: 'Mehr über uns erfahren',
  buttonPrimaryURL: 'about',
  buttonSecondaryCaption: 'Mehr über uns erfahren',
  buttonSecondaryLink: 'about',
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


function Jobs() {

  const buttonPrimaryProps = {
    buttonPrimaryCaption: 'About from about.tsx',
    buttonPrimaryLink: 'home',
  };

  // const buttonSecondaryProps = {
  //   buttonSecondaryCaption: 'About from about.tsx',
  //   buttonSecondaryLink: 'home',
  // };

  return (
    <>
        <Header></Header>
        <SectionHero
          heading={cdCopy.sectionHero_Heading}
          subheading={cdCopy.sectionHero_Subheading}
          paragraph={cdCopy.sectionHero_Paragraph}
          image={cdImages.image22}
          background={cdColors.quaternaryBackgroundColorLight}>
        </SectionHero>
        <SectionTextAndImage 
          heading={cdCopy.sectionTextAndImage_Heading}
          paragraph={cdCopy.sectionTextAndImage_Paragraph}
          image={cdImages.image10}
          buttonPrimaryProps={buttonPrimaryProps}
          ></SectionTextAndImage>
          <SectionDivider></SectionDivider>
          <SectionContact 
        imageSrc={cdImages.image38}
        style={{backgroundColor: cdColors.quaternaryBackgroundColorLight}}>
        </SectionContact>
        <Footer></Footer>
    </>
  )
}

export default Jobs