import React from 'react';
import { Link } from 'react-router-dom';
import cdImages from '../utils/cdImages';

// const cdImages = {
//   logo: '/src/assets/Peters_Logotype.svg',
//   image1: '/assets/images/vishnu-mohanan-qso4MyFvhNc-unsplash.jpg',
//   image2: '/assets/images/mohamed-marey-M9mRKGW9L30-unsplash.jpg',
//   image3: '/assets/images/james-sandbrook-h0-lwHj7heI-unsplash.jpg',
//   image4: '/assets/images/mika-baumeister-dp9AxaKHdVg-unsplash.png',
//   image5: '/assets/images/steve-johnson-hokONTrHIAQ-unsplash.jpg',
//   image6: '/assets/images/david-dvoracek-2kWxMl5IWTA-unsplash.jpg',
//   image7: '/assets/images/neven-krcmarek-67FG6zD8WPQ-unsplash.png',
//   image8: '/assets/images/thisisengineering-ovWUKV1btXk-unsplash.png',
//   image9: '/assets/images/markus-spiske-kK7uPfb2YWU-unsplash.jpg',
//   image10: '/assets/images/thisisengineering-ZPeXrWxOjRQ-unsplash.jpg',
//   image11: '/assets/images/gidlark-d662tNZfe_g-unsplash.jpg',
//   image12: '/assets/images/brian-wangenheim--yWw3HlVVnQ-unsplash.jpg',
//   image13: '/assets/images/shirish-suwal-ctmuaOO-JJI-unsplash.jpg',
//   image14: '/assets/images/gidlark-d662tNZfe_g-unsplash.jpg',
//   image15: '/assets/images/tekton-ndJlw4Bz-1Y-unsplash.jpg',
//   image16: '/assets/images/thisisengineering-zhXR20LFowA-unsplash.jpg',
//   image17: '/assets/images/steffen-lemmerzahl-fu3iLPBe964-unsplash.jpg',
//   image18: '/assets/images/s-tsuchiya-gxIg8FcDIC8-unsplash.jpg',
//   image19: '/assets/images/alex-wolowiecki-uXgoasNqYqw-unsplash.jpg',
//   image20: '/assets/images/jimmy-nilsson-masth-CskQi7DDUuY-unsplash.jpg',
//   image21: '/assets/images/thisisengineering-q9yJE97A44Q-unsplash.jpg',
//   image22: '/assets/images/sol-tZw3fcjUIpM-unsplash.png',
//   image23: '/assets/images/frames-for-your-heart-iOLHAIaxpDA-unsplash.jpg',
//   image24: '/assets/images/jimmy-nilsson-masth-hrIpsXkrAO0-unsplash.png',
//   image25: '/assets/images/markus-spiske-rNn_TU8dvoY-unsplash.png',
//   image26: '/assets/images/kumpan-electric-AjNgSvEt-v4-unsplash.jpg',
//   image27: '/assets/images/smart-me-ag-j2E-2YQe_c8-unsplash.jpg',
//   image28: '/assets/images/waldemar-rHfTdK9YU2Q-unsplash.jpg',
//   image29: '/assets/images/markus-spiske-LIi9tSIKoYQ-unsplash.jpg',
//   image30: '/assets/images/jakub-zerdzicki-uxYLtGRyGKQ-unsplash.jpg',
//   image31: '/assets/images/alpha-innotec--nbWCvUiFJA-unsplash.jpg',
//   image32: '/assets/images/jakub-zerdzicki-uxYLtGRyGKQ-unsplash.jpg',
//   image33: '/assets/images/vivint-solar-9CalgkSRZb8-unsplash.jpg',
//   image34: '/assets/images/austin-distel-wawEfYdpkag-unsplash.jpg',
//   image35: '/assets/images/naomi-hebert-MP0bgaS_d1c-unsplash.jpg',
//   image36: '/assets/images/claudio-schwarz-sLfUA03zaOk-unsplash.jpg',
//   image37: '/assets/images/ben-kolde-FaPxZ88yZrw-unsplash.jpg',
//   image38: '/assets/images/andrew-neel-cckf4TsHAuw-unsplash.jpg',
//   image39: '/assets/images/claudio-schwarz-sLfUA03zaOk-unsplash.jpg',
//   image40: '/assets/images/thisisengineering-WjOWazUPAss-unsplash.jpg',

//   card1Image: '/assets/images/Privatkunden.svg',
//   card2Image: '/assets/images/Geschaeftskunden.svg',
//   card3Image: '/assets/images/Smart-Home-Loesungen.svg',
//   card4Image: '/assets/images/Lichtinstallation.svg',

//   image404: '/src/assets/images/404.svg',
// };
  

  



const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col left-0 w-screen fixed h-screen justify-center items-center bg-slate-600">
      
      
      <Link to="/" className="">
        <img className="w-fit h-auto mr-12"  src={cdImages.image404} alt="Firmenlogo"></img>
      </Link>
      <div className='flex flex-col w-full px-4 md:w-1/2 justfify-center items-start'>
      <h1 className="text-4xl cursor-pointer pt-48 font-bold -mt-36">404</h1>
      <br></br>
      <h2 className='text-slate-400'>Die angeforderte Seite konnte nicht gefunden werden.</h2>
      <br></br>
      {/* <p className='text-slate-400'>Dieser Fehler tritt auf, weil der Server Ihre Anfrage erfolgreich erhalten hat, jedoch die spezifische Ressource (z. B. eine Webseite oder Datei), die mit der angegebenen URL verknüpft ist, nicht finden konnte.</p>
      <br></br> */}
      <p className='text-slate-400'>
        Überprüfen Sie die URL auf Tippfehler.
        Gehen Sie zur vorherigen Seite zurück und versuchen Sie es erneut.
        Kehren Sie zur Startseite zurück und nutzen Sie das Navigationsmenü oder die Suchfunktion, um die gewünschte Seite zu finden.
        Kontaktieren Sie uns, wenn Sie glauben, dass ein Fehler vorliegt und Sie Unterstützung benötigen.</p>
        <br></br>
    </div>
    </div>
  );
};

export default NotFound;