import Button_primary from "./buttons/button_primary";
import Button_secondary from "./buttons/button_secondary";
import MultiCard from "./card/multi_card";


const cdImages = {
  placeholderImage: '/src/assets/images/Placeholder600x400.png',
  card1Image: '/src/assets/images/outlet.png',
  card2Image: '/src/assets/images/contacts.png',
  card3Image: '/src/assets/images/smart-home.png',
  card4Image: '/src/assets/images/roof-lamp.png',
  card5Image: '/src/assets/images/power.png',

};

const cdCopy = {
  sectionTextAndCards_Heading: '',
  sectionTextAndCards_Paragraph: '',
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

type SectionTextAndCardsProps = {

  card1Heading: string;
  card1Paragraph: string;
  card1Image: string;
  card1ButtonPrimaryCaption: string;

  card2Heading: string;
  card2Paragraph: string;
  card2Image: string;
  card2ButtonPrimaryCaption: string;
  
  card3Heading: string;
  card3Paragraph: string;
  card3Image: string;
  card3ButtonPrimaryCaption: string;

  card4Heading: string;
  card4Paragraph: string;
  card4Image: string;
  card4ButtonPrimaryCaption: string;

  // other properties

};




function SectionTextAndCards({ 
  card1Heading, card1Paragraph, card1Image, card1ButtonPrimaryCaption,
  card2Heading, card2Paragraph, card2Image, card2ButtonPrimaryCaption,
  card3Heading, card3Paragraph, card3Image, card3ButtonPrimaryCaption,
  card4Heading, card4Paragraph, card4Image, card4ButtonPrimaryCaption
}: SectionTextAndCardsProps) {
  return (

  <>
    <div className='min-h-screen mt-10 bg-red-300'>
      <div className="flex flex-col h-1/2 md:flex-row md:w-full">
        <MultiCard 
          heading={card1Heading} 
          paragraph={card1Paragraph} 
          image={card1Image}
          buttonPrimaryProps={{ buttonPrimaryCaption: card1ButtonPrimaryCaption, buttonPrimaryLink: 'about' }}
          background={cdColors.primaryBackgroundColorLight} 
        />

        <MultiCard 
          heading={card2Heading} 
          paragraph={card2Paragraph} 
          image={card2Image}
          buttonPrimaryProps={{ buttonPrimaryCaption: card2ButtonPrimaryCaption, buttonPrimaryLink: 'about' }}
          background={cdColors.primaryBackgroundColorLight} 
        />
      </div>

    <div className="flex flex-col h-1/2 md:flex-row md:w-full">
      <MultiCard 
        heading={card3Heading} 
        paragraph={card3Paragraph} 
        image={card3Image}
        buttonPrimaryProps={{ buttonPrimaryCaption: card3ButtonPrimaryCaption, buttonPrimaryLink: 'about' }}
        background={cdColors.primaryBackgroundColorLight} 
      />

      <MultiCard 
        heading={card4Heading} 
        paragraph={card4Paragraph} 
        image={card4Image}
        buttonPrimaryProps={{ buttonPrimaryCaption: card4ButtonPrimaryCaption, buttonPrimaryLink: 'about' }}
        background={cdColors.primaryBackgroundColorLight} 
      /> 
    </div>
  </div>
</>
  )
}

export default SectionTextAndCards