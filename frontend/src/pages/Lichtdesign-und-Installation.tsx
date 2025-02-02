
import Header from "../components/Header"
import SectionDivider from "../components/Section_Divider"
import SectionHero from "../components/Section_Hero"
import Footer from "../components/Footer"
import SectionContact from "../components/Section_Contact"
import SectionListAndImage from "../components/Section_List_and_Image"
import SectionTextAndCards from "../components/Section_Text_and_Cards"

import cdImages from '../utils/cdImages';
import cdColors from '../utils/cdColors';

const cdCopy = {
  SectionHero_heading: 'Lichtdesign und -installation',
  SectionHero_paragraph: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',	

  SectionListAndCards_heading: 'Lorem Ipsum dolor sit amet',
  SectionListAndCards_paragraph: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
  SectionListAndCards_listItem1: 'Lorem',
  SectionListAndCards_listItem2: 'Ipsum',
  SectionListAndCards_listItem3: 'Dolor',

  SectionListAndCards_card1Heading:'Lorem Ipsum dolor sit amet',
  SectionListAndCards_card1Paragraph:'Lorem Ipsum dolor sit amet consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
  SectionListAndCards_card1ListItem1: '• Lorem', 
  SectionListAndCards_card1ListItem2: '• Sed diam',
  SectionListAndCards_card1listItem3: '',

  SectionListAndCards_card2Heading:'Lorem Ipsum dolor sit amet',
  SectionListAndCards_card2Paragraph:'Cons etetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
  SectionListAndCards_card2ListItem1: '• Elitir, sed diam nonumy eirmod tempor invidunt',
  SectionListAndCards_card2listItem2: '• Setetur sadipscing elitr, sed diam nonumy',
  SectionListAndCards_card2listItem3: '',
  
  SectionListAndCards_card3Heading:'Lorem Ipsum dolor sit amet',
  SectionListAndCards_card3Paragraph:'Lorem Ipsum dolor sit amet consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
  SectionListAndCards_card3ListItem1: '• Lorem Ipsum',
  SectionListAndCards_card3listItem2: '• Dolor Sit',
  SectionListAndCards_card3listItem3: '',
  
  SectionListAndCards_card4Heading:'Lorem Ipsum dolor sit amet',
  SectionListAndCards_card4Paragraph:'Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet. Machen Sie Ihr Zuhause bereit für die Zukunft der Mobilität.',
  SectionListAndCards_card4ListItem1: '• Lorem Ipsum dolor sit amet.',
  SectionListAndCards_card4listItem2: '• Lorem Ipsum dolor sit amet.',
  SectionListAndCards_card4listItem3: '',
  
  
  
};



function LichtdesignundInstallation() {
  return (
    <>
    <div>Elektro-Dienstleistungen-Gewerbekunden</div>
      <Header></Header>
      <SectionHero 
      heading={cdCopy.SectionHero_heading} 
      paragraph={cdCopy.SectionHero_paragraph} 
      image={cdImages.image36}
      logo={''}
      background={cdColors.quaternaryBackgroundColorLight}>
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

export default LichtdesignundInstallation

