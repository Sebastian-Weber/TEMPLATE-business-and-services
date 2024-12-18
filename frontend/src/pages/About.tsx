
import Footer from "../components/Footer"
import Header from "../components/Header"
import SectionHero from "../components/Section_Hero"
import SectionTextAndImage from "../components/Section_Text_and_Image"

const cdImages = {
  image: '/src/assets/images/neven-krcmarek-67FG6zD8WPQ-unsplash.png'

};

const cdCopy = {
  heading2: 'Heading 1: Lorem Ipsum',
  text: 'Paragraph 1: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
};

function About() {
  return (
    <>
      <div className="">
        <Header></Header>
        <SectionHero></SectionHero>
        <SectionTextAndImage text={cdCopy.heading2} image={cdImages.image} heading2={cdCopy.heading2}></SectionTextAndImage>
        <Footer></Footer>
      </div>
    </>
  )
}

export default About