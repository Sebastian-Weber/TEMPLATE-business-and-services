
import Footer from "../components/Footer"
import Header from "../components/Header"
import SectionCards from "../components/Section_Cards"
import Section_Gallery from "../components/Section_Gallery"
import SectionHero from "../components/Section_Hero"
import SectionTextAndImage from "../components/Section_Text_and_Image"


function Home() {
  return (
    <>
    <div className="">
      <Header></Header>
      <SectionHero></SectionHero>
      <SectionTextAndImage></SectionTextAndImage>
      <SectionCards></SectionCards>
      <Section_Gallery></Section_Gallery>
      <Footer></Footer>
    </div>
    </>
  )
}

export default Home