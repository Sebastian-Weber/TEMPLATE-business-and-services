
import Header from "../components/Header"
import SectionCards from "../components/Section_Cards"
import SectionDivider from "../components/Section_Divider"
import Section_Gallery from "../components/Section_Gallery"
import SectionHero from "../components/Section_Hero"
import SectionTextAndImage from "../components/Section_Text_and_Image"
import Footer from "../components/Footer"
import SectionContact from "../components/Section_Contact"

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
  heading: 'Heading 1: Lorem Ipsum Home test',
  paragraph: 'Paragraph 1: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
};



function ElektroDienstleistungenPrivatkunden() {
  return (
    <>
    <div>Elektro-Dienstleistungen-Privatkunden</div>
      <Header></Header>
      <SectionHero 
      heading={cdCopy.heading} 
      paragraph={cdCopy.paragraph} 
      image={cdImages.image15}
      logo={''}
      background={cdColors.secondaryBackgroundColorLight}>
      </SectionHero>
      <SectionTextAndImage 
        heading={cdCopy.heading}
        paragraph={cdCopy.paragraph}
        image={cdImages.image1}
        ></SectionTextAndImage>
      <SectionCards></SectionCards>
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
      <SectionContact></SectionContact>
      <Footer></Footer>
  </>
  )
}

export default ElektroDienstleistungenPrivatkunden