
import Footer from "../components/Footer"
import Header from "../components/Header"
import SectionHero from "../components/Section_Hero"
import SectionTextAndImage from "../components/Section_Text_and_Image"

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
        <SectionHero
          heading={cdCopy.sectionTextAndImage_Heading}
          paragraph={cdCopy.sectionTextAndImage_Paragraph}
          image={cdImages.image8}
          logo={cdImages.logo}
        ></SectionHero>
        <SectionTextAndImage 
          heading={cdCopy.sectionTextAndImage_Heading}
          paragraph={cdCopy.sectionTextAndImage_Paragraph}
          image={cdImages.image10}
          buttonPrimaryProps={buttonPrimaryProps}
          buttonSecondaryProps={buttonSecondaryProps}></SectionTextAndImage>
        <Footer></Footer>
      </div>
    </>
  )
}

export default About