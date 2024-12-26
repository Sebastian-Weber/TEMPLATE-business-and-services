import React from 'react'
import Button_primary from './buttons/button_primary'

const cdColors = {
  primaryColor: '#98BB48',
  secondaryColor: '#FFF1B7',
  primaryAccentColor: '',
  secondaryAccentColor: '',
  primaryBackgroundColorDark: '#165287',
  primaryBackgroundColorDefault: '#1D6DB4',
  primaryBackgroundColorLight: '#E9D9D3',
  secondaryBackgroundColorDark: '#165287',
  secondaryBackgroundColorDefault: '#165287',
  secondaryBackgroundColorLight: '#BBD3C6',
  tertiaryBackgroundColorDark: '#165287',
  tertiaryBackgroundColorDefault: '#165287',
  tertiaryBackgroundColorLight: '#B5CFE6',
  quaternaryBackgroundColorDark: '#165287',
  quaternaryBackgroundColorDefault: '#165287',
  quaternaryBackgroundColorLight: '#F3EBC9',
  primaryFontColor: '#191A1E',
  secondaryFontColor: '#817E72',
  tertiaryFontColor: '#D6D5CB'
};

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
  image31: '/src/assets/images/jakub-zerdzicki-uxYLtGRyGKQ-unsplash.jpg',
};

const cdCopy = {
  sectionHero_Heading: '',
  sectionHero_Subheading: 'Energietechnik und Smart-Home-Lösungen in der Region Köln',
  sectionHero_Paragraph: '',

  sectionIntro_Heading: 'Von der Steckdose bis zur Smart-Home-Lösung',
  sectionIntro_Paragraph: 'Willkommen bei Peters Elektro GmbH, Ihrem zuverlässigen Partner für professionelle Elektro-Dienstleistungen. Mit jahrelanger Erfahrung sind wir spezialisiert auf Wohn-, Gewerbe- und Industrieelektroinstallationen – von regelmäßiger Wartung bis hin zu modernen Smart-Home-Lösungen. Unser Team steht für Sicherheit, Innovation und eine schnelle, professionelle Arbeitsweise. Wir bedienen die Region Köln und sorgen für eine zuverlässige, kundenorientierte und effiziente Umsetzung Ihrer elektrischen Anforderungen.',

  sectionContact_Heading: 'Lust, mit uns die Zukunft zu elektrisieren?',
  sectionContact_Paragraph: 'Du suchst eine neue Herausforderung in einem modernen Elektroinstallationsunternehmen mit Herz? Bei Peters erwarten dich spannende Projekte im Kölner Raum, ein familiäres Team und echte Entwicklungsmöglichkeiten. Wir legen Wert auf Qualität, Innovation und ein Arbeitsklima, in dem sich jeder wohlfühlt? Das bieten wir dir: Abwechslungsreiche Aufgaben in einem zukunftssicheren Handwerk. Kreativer Freiraum, um eigene Ideen in unsere Projekte einzubringen. Eine Arbeitskultur, die Eigenverantwortung und Teamg-geist fördert. Bewirb dich jetzt und werde Teil unseres Teams! Wir freuen uns auf deine Bewerbung.',

  buttonPrimaryCaption: 'Mehr über uns erfahren -- kommt aus Home.tsx',
  buttonPrimaryURL: 'about',
  
  // buttonSecondaryCaption: 'Mehr über uns erfahren  -- kommt aus Home.tsx',
  // buttonSecondaryLink: 'about',
};



function Section_Texts_and_Cards() {
  return (
    <>
    <div>Section_Texts_and_Cards</div>
    <div className='min-h-screen mt-10'>

        <div className="flex flex-col h-full justify-around items-center md:flex-row">

          {/* left box */}
          <div className="flex flex-col p-5 justify-center items-center h-1/2 w-full md:m-12 md:h-fit md:w-9/12 md:items-center">

              <div className="flex flex-col p-8 h-auto w-full justify-center items-start md:full">
                {/* <br></br>
                  <h2>{IntroHeading}</h2>
                <br></br>
                <p>{IntroParagraph}</p>
                <br></br> */}
            </div>
          </div> 
            
            {/* right box */}
            <div className="flex flex-col h-fit m-6 w-auto justify-around items-center md:h-fit md:w-7/12 ">
              {/* <img className='h-fit p-12 md:p-18' src={image} alt="Placeholder"></img> */}
            </div>

        </div>


      <div className="flex flex-col h-1/2">
      
   {/* first row */}
   <div className="flex flex-col justify-around items-center md:px-2 md:flex-row">
      
      {/* card 1 */}
      <div className="flex flex-col p-4 md:w-full m-2 md:flex-col" style={{ backgroundColor:cdColors.primaryBackgroundColorLight }}>
        <div className="flex flex-row md:flex-col items-center">
          <div className="flex flex-row justify-center items-center">
            <img className="w-1/3 p-6" src={cdImages.card1Image} alt="Placeholder"></img>
          </div>
          <br></br>
        </div>
        <div className="">
          <div className="flex flex-col w-fit h-fit justify-center md:w-5/12">
            <h2 className="" style={{ color: cdColors.primaryFontColor }}>{cdCopy.card1Heading1}</h2>
            <br></br>
          </div>
          <p className="text-lg font-normal">{cdCopy.card1Paragraph1}</p>
          <br></br>
          <br></br>
          <Button_primary buttonPrimaryCaption={cdCopy.buttonPrimaryCaption} buttonPrimaryLink={cdCopy.buttonPrimaryLink}></Button_primary>
          {/* <Button_secondary buttonSecondaryCaption={cdCopy.buttonSecondaryCaption} buttonSecondaryLink={cdCopy.buttonSecondaryLink}></Button_secondary> */}
        </div>
      </div>

      {/* card 2*/}
      <div className="flex flex-col p-4 md:w-full m-2 md:flex-col" style={{ backgroundColor:cdColors.secondaryBackgroundColorLight }}>
        <div className="flex flex-row md:flex-col items-center">
          <div className="flex flex-row justify-center items-center">
            <img className="w-1/3 p-6" src={cdImages.card2Image} alt="Placeholder"></img>
          </div>
          <br></br>
        </div>
        <div className="w-fit">
          <div className="flex flex-col w-fit h-fit justify-center md:w-5/12">
            <h2 className="" style={{ color: cdColors.primaryFontColor }}>{cdCopy.card2Heading1}</h2>
            <br></br>
          </div>
          <p className="text-lg font-normal">{cdCopy.card2Paragraph1}</p>
          <br></br>
          <br></br>
          <Button_primary buttonPrimaryCaption={cdCopy.buttonPrimaryCaption} buttonPrimaryLink={cdCopy.buttonPrimaryLink}></Button_primary>
          {/* <Button_secondary buttonSecondaryCaption={cdCopy.buttonSecondaryCaption} buttonSecondaryLink={cdCopy.buttonSecondaryLink}></Button_secondary> */}
        </div>
      </div>

    </div>

    {/* second row */}
    <div className="flex flex-col justify-around items-center md:px-2 md:flex-row">
      
      {/* card 3 */}
      <div className="flex flex-col p-4 md:w-full m-2 md:flex-col" style={{ backgroundColor:cdColors.tertiaryBackgroundColorLight }}>
        <div className="flex flex-row md:flex-col items-center">
          <div className="flex flex-row justify-center items-center">
            <img className="w-1/3 p-6" src={cdImages.card3Image} alt="Placeholder"></img>
          </div>
          <br></br>
        </div>
        <div className="w-fit">
          <div className="flex flex-col w-fit h-fit justify-center md:w-5/12">
            <h2 className="" style={{ color: cdColors.primaryFontColor }}>{cdCopy.card3Heading1}</h2>
            <br></br>
          </div>
          <p className="text-lg font-normal">{cdCopy.card3Paragraph1}</p>
          <br></br>
          <br></br>
          <Button_primary buttonPrimaryCaption={cdCopy.buttonPrimaryCaption} buttonPrimaryLink={cdCopy.buttonPrimaryLink}></Button_primary>
          {/* <Button_secondary buttonSecondaryCaption={cdCopy.buttonSecondaryCaption} buttonSecondaryLink={cdCopy.buttonSecondaryLink}></Button_secondary> */}
        </div>
      </div>

      {/* card 4 */}
      <div className="flex flex-col p-4 md:w-full m-2 md:flex-col" style={{ backgroundColor:cdColors.quaternaryBackgroundColorLight }}>
        <div className="flex flex-row md:flex-col items-center">
          <div className="flex flex-row justify-center items-center">
            <img className="w-1/3 p-6" src={cdImages.card4Image} alt="Placeholder"></img>
          </div>
          <br></br>
        </div>
        <div className="w-full">
          <div className="flex flex-col w-fit h-fit justify-center md:w-5/12">
            <h2 className="" style={{ color: cdColors.primaryFontColor }}>{cdCopy.card4Heading1}</h2>
            <br></br>
          </div>
          <p className="text-lg font-normal">{cdCopy.card4Paragraph1}</p>
          <br></br>
          <br></br>
          <Button_primary buttonPrimaryCaption={cdCopy.buttonPrimaryCaption} buttonPrimaryLink={cdCopy.buttonPrimaryLink}></Button_primary>
          {/* <Button_secondary buttonSecondaryCaption={cdCopy.buttonSecondaryCaption} buttonSecondaryLink={cdCopy.buttonSecondaryLink}></Button_secondary> */}
        </div>
      </div>

    </div>

    {/* third row */}
    <div className="flex flex-col justify-around items-center md:px-2 md:flex-row">
      
      {/* card 5 */}
      <div className="flex flex-col p-4 md:w-full m-2 md:flex-col" style={{ backgroundColor:cdColors.quaternaryBackgroundColorLight }}>
        <div className="flex flex-row w-fit md:flex-col items-center">
          <div className="flex flex-row justify-center items-center">
            <img className="w-1/3 p-6" src={cdImages.card5Image} alt="Placeholder"></img>
          </div>
          <br></br>
        </div>
        <div className="w-fit">
          <div className="flex flex-col w-fit h-fit justify-center md:w-5/12">
            <h2 className="" style={{ color: cdColors.primaryFontColor }}>{cdCopy.card5Heading1}</h2>
            <br></br>
          </div>
          <p className="text-lg font-normal">{cdCopy.card5Paragraph1}</p>
          <br></br>
          <br></br>
          <Button_primary buttonPrimaryCaption={cdCopy.buttonPrimaryCaption} buttonPrimaryLink={cdCopy.buttonPrimaryLink}></Button_primary>
          {/* <Button_secondary buttonSecondaryCaption={cdCopy.buttonSecondaryCaption} buttonSecondaryLink={cdCopy.buttonSecondaryLink}></Button_secondary> */}
        </div>
      </div>

    </div> 

      </div>

 
    </div>

</>

  )
}

export default Section_Texts_and_Cards