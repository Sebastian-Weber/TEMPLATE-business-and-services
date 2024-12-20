
import Footer from "../components/Footer"
import Header from "../components/Header"
import SectionHero from "../components/Section_Hero"
import SectionTextAndImage from "../components/Section_Text_and_Image"

const cdImages = {
  logo: '/src/assets/images/Peters_Logo.svg',
  image1: '/src/assets/images/vishnu-mohanan-qso4MyFvhNc-unsplash.jpg',
  image2: '/src/assets/images/mohamed-marey-M9mRKGW9L30-unsplash.jpg',
  image3: '/src/assets/images/james-sandbrook-h0-lwHj7heI-unsplash.jpg',
  image4: '/src/assets/images/mika-baumeister-dp9AxaKHdVg-unsplash.png',
  image5: '/src/assets/images/steve-johnson-hokONTrHIAQ-unsplash.jpg',
  image6: '/src/assets/images/david-dvoracek-2kWxMl5IWTA-unsplash.jpg',
  image7: '/src/assets/images/neven-krcmarek-67FG6zD8WPQ-unsplash.png',
  image8: '/src/assets/images/thisisengineering-ovWUKV1btXk-unsplash.png',
  image9: '/src/assets/images/markus-spiske-kK7uPfb2YWU-unsplash.jpg',

};

const cdCopy = {
  sectionHero_Heading: 'Energietechnik und Smart-Home-Lösungen in der Region Köln.',
  sectionHero_Paragraph: '',

  sectionTextAndImage_Heading: 'Heading 1: About us ...',
  sectionTextAndImage_Paragraph: 'Willkommen bei Peters Elektro GmbH, Ihrem zuverlässigen Partner für professionelle Elektro-Dienstleistungen. Mit jahrelanger Erfahrung sind wir spezialisiert auf Wohn-, Gewerbe- und Industrieelektroinstallationen – von regelmäßiger Wartung bis hin zu modernen Smart-Home-Lösungen. Unser Team steht für Sicherheit, Innovation und eine schnelle, professionelle Arbeitsweise. Wir bedienen die Region Köln und sorgen für eine zuverlässige, kundenorientierte und effiziente Umsetzung Ihrer elektrischen Anforderungen.',
};



const About = () => {
  const buttonPrimaryProps = {
    buttonPrimaryCaption: 'About from about.tsx',
    buttonPrimaryLink: 'home',
  };

  const buttonSecondaryProps = {
    buttonSecondaryCaption: 'About from about.tsx',
    buttonSecondaryLink: 'home',
  };
  return (
    <>
      <div className="">
        <Header></Header>
        {/* <SectionHero
          heading={cdCopy.sectionTextAndImage_Heading}
          paragraph={cdCopy.sectionTextAndImage_Paragraph}
          image={cdImages.image8}
          logo={cdImages.logo}
        ></SectionHero> */}
        <SectionTextAndImage 
          heading={cdCopy.sectionTextAndImage_Heading}
          paragraph={cdCopy.sectionTextAndImage_Paragraph}
          image={cdImages.image8}
          buttonPrimaryProps={buttonPrimaryProps}
          buttonSecondaryProps={buttonSecondaryProps}
          ></SectionTextAndImage>
        <Footer></Footer>
      </div>
    </>
  )
}

export default About