import React from 'react';
import { Link } from 'react-router-dom';

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
    image22: '/src/assets/images/sol-tZw3fcjUIpM-unsplash.png',
    image23: '/src/assets/images/frames-for-your-heart-iOLHAIaxpDA-unsplash.jpg',
    image24: '/src/assets/images/jimmy-nilsson-masth-hrIpsXkrAO0-unsplash.png',
    image25: '/src/assets/images/markus-spiske-rNn_TU8dvoY-unsplash.png',
    image26: '/src/assets/images/kumpan-electric-AjNgSvEt-v4-unsplash.jpg',
    image27: '/src/assets/images/smart-me-ag-j2E-2YQe_c8-unsplash.jpg',
    image28: '/src/assets/images/waldemar-rHfTdK9YU2Q-unsplash.jpg',
    image29: '/src/assets/images/markus-spiske-LIi9tSIKoYQ-unsplash.jpg',
    image30: '/src/assets/images/jakub-zerdzicki-uxYLtGRyGKQ-unsplash.jpg',
    image31: '/src/assets/images/alpha-innotec--nbWCvUiFJA-unsplash.jpg',
    image32: '/src/assets/images/jakub-zerdzicki-uxYLtGRyGKQ-unsplash.jpg',
    image33: '/src/assets/images/vivint-solar-9CalgkSRZb8-unsplash.jpg',
    image34: '/src/assets/images/lycs-architecture-U2BI3GMnSSE-unsplash.jpg',
    image35: '/src/assets/images/naomi-hebert-MP0bgaS_d1c-unsplash.jpg',
    image36: '/src/assets/images/claudio-schwarz-sLfUA03zaOk-unsplash.jpg',
    image37: '/src/assets/images/claudio-schwarz-sLfUA03zaOk-unsplash.jpg',
  
    card1Image: '/src/assets/images/Privatkunden.svg',
    card2Image: '/src/assets/images/Geschaeftskunden.svg',
    card3Image: '/src/assets/images/Smart-Home-Loesungen.svg',
    card4Image: '/src/assets/images/Lichtinstallation.svg',
  
    image404: '/src/assets/images/404.svg',
  
    
  };

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col left-0 w-screen fixed h-screen justify-center items-center bg-slate-950">
      
      
      <Link to="/" className="">
        <img className="w-fit h-auto mr-12"  src={cdImages.image404} alt="Firmenlogo"></img>
      </Link>
      <h1 className="text-4xl cursor-pointer pt-48 font-bold text-slate-400 -mt-36">404 - Page Not Found</h1>
      <p className="mt-4 cursor-pointer text-slate-400">Sorry, the page you are looking for does not exist.</p>

    </div>
  );
};

export default NotFound;