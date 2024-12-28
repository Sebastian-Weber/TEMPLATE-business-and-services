

import Header from './Header';
import SectionHero from './Section_Hero';
import SectionTextAndImage from './Section_Text_and_Image';
import SectionCards from './Section_Text_and_Cards';
import Section_Gallery from './Section_Gallery';
import Footer from './Footer';


function WrapperGlobal() {
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4">
        <Header></Header>
        <SectionHero></SectionHero>
        <SectionTextAndImage></SectionTextAndImage>
        <SectionCards></SectionCards>
        <Section_Gallery></Section_Gallery>
        <Footer></Footer>
    </div>
  );
}

export default WrapperGlobal