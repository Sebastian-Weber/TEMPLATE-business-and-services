import Button_primary from "./buttons/button_primary";
import Button_secondary from "./buttons/button_secondary";

const cdImages = {
  placeholderImage: '/src/assets/images/Placeholder600x400.png',
  card1Image: '/src/assets/images/outlet.png',
  card2Image: '/src/assets/images/contacts.png',
  card3Image: '/src/assets/images/smart-home.png',
  card4Image: '/src/assets/images/roof-lamp.png',
  card5Image: '/src/assets/images/power.png',

};

const cdCopy = {
  card1Heading1: 'Elektroinstallationen für Privatkunden',
  card1Paragraph1: 'Planen Sie einen Neubau, eine Renovierung oder Modernisierung? Wir bieten maßgeschneiderte Elektroinstallationen für ein komfortables und sicheres Zuhause. Von Beleuchtung über Steckdosen bis hin zu Netzwerktechnik – unsere Experten setzen Ihre Wünsche zuverlässig um. Qualität und Kundenzufriedenheit stehen für uns an erster Stelle. Kontaktieren Sie uns und lassen Sie sich individuell beraten. Gemeinsam machen wir Ihr Zuhause zukunftssicher!',
  card2Heading1: 'Elektroinstallationen für Geschäftskunden',
  card2Paragraph1: 'Effiziente und zuverlässige Elektroinstallationen für Ihr Unternehmen: Wir planen, installieren und warten maßgeschneiderte Lösungen für Büros, Gewerbe und Industrie. Von Beleuchtungssystemen bis zur Netzwerktechnik sorgen wir für reibungslose Abläufe und maximale Sicherheit. Mit modernster Technik und professionellem Service unterstützen wir Ihre Geschäftserfolge. Kontaktieren Sie uns – wir entwickeln die optimale Lösung für Ihre Anforderungen!',
  card3Heading1: 'Smart-Home-Lösungen',
  card3Paragraph1: 'Erleben Sie modernen Wohnkomfort mit unseren Smart-Home-Lösungen! Steuern Sie Beleuchtung, Heizung, Sicherheitssysteme und mehr bequem per App oder Sprachbefehl. Wir planen und installieren individuelle Systeme, die Ihr Zuhause effizient, sicher und zukunftsfähig machen. Entdecken Sie, wie Technologie Ihren Alltag erleichtert und Ihre Lebensqualität steigert. Kontaktieren Sie uns für eine persönliche Beratung – wir machen Ihr Zuhause smarter!',
  card4Heading1: 'Licht-Design und Installation',
  card4Paragraph1: 'Bringen Sie Licht in Ihr Zuhause oder Ihr Geschäft! Wir bieten individuelle Beleuchtungsdesigns, die Funktionalität und Ästhetik perfekt vereinen. Ob stilvolle Wohnraumbeleuchtung, effiziente Bürobeleuchtung oder stimmungsvolle Akzente – unsere Experten planen und installieren Lösungen, die begeistern. Mit modernster Technik und kreativem Design setzen wir Ihre Vision um. Kontaktieren Sie uns für eine persönliche Beratung und lassen Sie sich inspirieren!',
  card5Heading1: 'Notfallreparaturen',
  card5Paragraph1: 'Stromausfall oder elektrische Störungen? Wir sind rund um die Uhr für Sie da! Unser zuverlässiger Notfallservice behebt schnell und professionell jede Art von Problem – ob bei Ihnen zu Hause oder in Ihrem Unternehmen. Mit modernster Ausrüstung und erfahrenen Technikern sorgen wir dafür, dass alles schnell wieder läuft. Zögern Sie nicht, uns im Notfall zu kontaktieren – wir helfen sofort!',
  buttonPrimaryCaption: 'test123',
  buttonPrimaryLink: 'about',
  buttonSecondaryCaption: 'test456',
  buttonSecondaryLink: 'about',
};



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


// const cdCopy = {
//   buttonPrimaryCaption: '',
//   buttonPrimaryLink: '',
//   buttonSecondaryCaption: '',
//   buttonSecondaryLink: '',
// };

interface SectionTextAndImageProps {
  paragraph: string;
  image: string;
  heading: string;
  background?: string;
  buttonPrimaryProps?: {
    buttonPrimaryCaption?: string;
    buttonPrimaryLink?: string;
  };
  listItems?: string[];
}


function SectionCards() {
  return (

  <>
    <div className='min-h-screen mt-10'>

        <div className="flex flex-col h-full justify-around items-center md:flex-row">

          {/* left box */}
          <div className="flex flex-col p-5 justify-center items-center h-1/2 w-full md:m-12 md:h-fit md:w-9/12 md:items-center">

              <div className="flex flex-col p-8 h-auto w-full justify-center items-start md:full">
                <br></br>
                  <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                <br></br>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque consectetur architecto minus laborum amet corrupti, numquam cum nam, atque tempore accusantium voluptate deleniti. Dolore tempore vero, architecto at optio nisi dignissimos perferendis, consectetur officia iusto eveniet et illum doloribus neque quod impedit eum, molestias facilis. Qui quos laudantium ipsa dolorum repellendus animi cum sequi, natus voluptatibus. Deleniti iure veritatis esse sapiente, animi cupiditate optio? Itaque libero, ipsa amet molestiae inventore incidunt aut quae voluptatem nostrum enim veritatis possimus beatae optio ea illo consequatur, voluptas magnam, sint et?
                </p>
                <br></br>
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

export default SectionCards