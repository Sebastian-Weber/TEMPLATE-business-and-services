import Footer from "../components/Footer"
import GlobalWrapper from "../components/Wrapper_Global"
import Header from "../components/Header"
import SectionCards from "../components/Section_Cards"
import Section_Gallery from "../components/Section_Gallery"
import SectionHero from "../components/Section_Hero"
import SectionTextAndImage from "../components/Section_Text_and_Image"


function Home() {
  return (
    <>
    <div className="global-wrapper">
        <h2>Home</h2>
        <Header></Header>
        <GlobalWrapper></GlobalWrapper>
        <SectionHero></SectionHero>
        <SectionCards></SectionCards>
        <SectionTextAndImage></SectionTextAndImage>
        <Section_Gallery></Section_Gallery>
        <Footer></Footer>
    </div>
    </>
  )
}

export default Home