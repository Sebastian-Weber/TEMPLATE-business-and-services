
import Footer from "../components/Footer"
import Header from "../components/Header"
import SectionHero from "../components/Section_Hero"
import SectionTextAndImage from "../components/Section_Text_and_Image"

const cdImages = {
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
  heading: 'Heading 1: About us ...',
  paragraph: 'Paragraph 1: About us ... Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
};

function About() {
  return (
    <>
      <div className="">
        <Header></Header>
        {/* <SectionHero heading={cdCopy.heading} paragraph={cdCopy.paragraph} image={cdImages.image1}></SectionHero> */}
        <SectionTextAndImage heading={cdCopy.heading} paragraph={cdCopy.paragraph} image={cdImages.image8}></SectionTextAndImage>
        <Footer></Footer>
      </div>
    </>
  )
}

export default About