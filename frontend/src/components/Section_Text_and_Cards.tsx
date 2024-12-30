import Button_primary from "./buttons/button_primary";
import Button_secondary from "./buttons/button_secondary";
import MultiCard from "./card/multi_card";


const cdImages = {
  placeholderImage: '/src/assets/images/Placeholder600x400.png',
  card1Image: '/src/assets/images/1.svg',
  card2Image: '/src/assets/images/2.svg',
  card3Image: '/src/assets/images/3.svg',
  card4Image: '/src/assets/images/4.svg',
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
  primaryColor: '#EDEF7C',
  secondaryColor: '#A8CF4E',
  primaryAccentColor: '',
  secondaryAccentColor: '',

  // yellow
  primaryBackgroundColorDark: '#9FA053',
  primaryBackgroundColorDefault: '#EDEF7C',
  primaryBackgroundColorLight: '#F3F4A7',

  // green
  secondaryBackgroundColorDark: '#718B34',
  secondaryBackgroundColorDefault: '#A8CF4E',
  secondaryBackgroundColorLight: '#C5DF88',

  // teal
  tertiaryBackgroundColorDark: '#4A8B65',
  tertiaryBackgroundColorDefault: '#6FCF97',
  tertiaryBackgroundColorLight: '#9EDFB9',

  // blue
  quaternaryBackgroundColorDark: '#338EA2',
  quaternaryBackgroundColorDefault: '#4CD4F2',
  quaternaryBackgroundColorLight: '#87E2F6',

  // brown
  quinaryBackgroundColorDark: '#795434',
  quinaryBackgroundColorDefault: '#B57E4D',
  quinaryBackgroundColorLight: '#CDA888',

  // white
  whiteBackground: '#F7F7F7',

  // black
  blackBackground: '#1A1A1A',

  primaryFontColor: '#262E3C',
  secondaryFontColor: '#6D6D6D',
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

  card1Listitem1: string;
  card1Listitem2: string;
  card1Listitem3: string;

  card2Listitem1: string;
  card2Listitem2: string;
  card2Listitem3: string;

  card3Listitem1: string;
  card3Listitem2: string;
  card3Listitem3: string;

  card4Listitem1: string;
  card4Listitem2: string;
  card4Listitem3: string;

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
  card1Heading, card1Paragraph, card1Image, card1ButtonPrimaryCaption, card1Listitem1, card1Listitem2, card1Listitem3,
  card2Heading, card2Paragraph, card2Image, card2ButtonPrimaryCaption, card2Listitem1, card2Listitem2, card2Listitem3,   
  card3Heading, card3Paragraph, card3Image, card3ButtonPrimaryCaption, card3Listitem1, card3Listitem2, card3Listitem3, 
  card4Heading, card4Paragraph, card4Image, card4ButtonPrimaryCaption, card4Listitem1, card4Listitem2, card4Listitem3
}: SectionTextAndCardsProps) {
  return (

  <>
    <div className='min-h-screen '>
      <div className="flex flex-col h-1/2 md:flex-row md:w-full bg-red">
        <MultiCard 
          heading={card1Heading} 
          paragraph={card1Paragraph} 
          image={card1Image}
          buttonPrimaryProps={{ buttonPrimaryCaption: card1ButtonPrimaryCaption, buttonPrimaryLink: 'about' }}
          background={cdColors.primaryBackgroundColorLight}
          listitem1={card1Listitem1}
          listitem2={card1Listitem2}
          listitem3={card1Listitem3}
        />

        <MultiCard 
          heading={card2Heading} 
          paragraph={card2Paragraph} 
          image={card2Image}
          buttonPrimaryProps={{ buttonPrimaryCaption: card2ButtonPrimaryCaption, buttonPrimaryLink: 'about' }}
          background={cdColors.secondaryBackgroundColorLight}
          listitem1={card2Listitem1}
          listitem2={card2Listitem2}
          listitem3={card2Listitem3}
          />

          </div>
          <div className="flex flex-col h-1/2 md:flex-row md:w-full">
      <MultiCard 
        heading={card3Heading} 
        paragraph={card3Paragraph} 
        image={card3Image}
        buttonPrimaryProps={{ buttonPrimaryCaption: card3ButtonPrimaryCaption, buttonPrimaryLink: 'about' }}
        background={cdColors.tertiaryBackgroundColorLight}
        listitem1={card3Listitem1}
        listitem2={card3Listitem2}
        listitem3={card3Listitem3}
      />

      <MultiCard 
        heading={card4Heading} 
        paragraph={card4Paragraph} 
        image={card4Image}
        buttonPrimaryProps={{ buttonPrimaryCaption: card4ButtonPrimaryCaption, buttonPrimaryLink: 'about' }}
        background={cdColors.quaternaryBackgroundColorLight}
        listitem1={card4Listitem1}
        listitem2={card4Listitem2}
        listitem3={card4Listitem3}
      /> 
    </div>
    </div>
</>
  )
}

export default SectionTextAndCards