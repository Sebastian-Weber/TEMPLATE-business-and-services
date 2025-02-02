
import Footer from "../components/Footer"
import Header from "../components/Header"
// import SectionCards from "../components/Section_Text_and_Cards"
import SectionContact from "../components/Section_Contact"
import SectionDivider from "../components/Section_Divider"
// import Section_Gallery from "../components/Section_Gallery"
import SectionHero from "../components/Section_Hero"
import SectionTextAndImage from "../components/Section_Text_and_Image"

import cdImages from '../utils/cdImages';
import cdColors from '../utils/cdColors';



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