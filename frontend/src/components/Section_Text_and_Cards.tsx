import MultiCard from "./card/multi_card";


const cdColors = {
  primaryColor: '#A8CF4E',
  secondaryColor: '#FBF179',
  primaryAccentColor: '',
  secondaryAccentColor: '',

  // green
  primaryBackgroundColorLight: '#C5DF88',
  primaryBackgroundColorDefault: '#A8CF4E',
  primaryBackgroundColorDark: '#8FB042',

  // yellow   
  secondaryBackgroundColorLight: '#FCF6A5',
  secondaryBackgroundColorDefault: '#FBF179',
  secondaryBackgroundColorDark: '#DBD269',

  // teal
  tertiaryBackgroundColorLight: '#9EDFB9',
  tertiaryBackgroundColorDefault: '#6FCF97',
  tertiaryBackgroundColorDark: '#5EB080',

  // blue
  quaternaryBackgroundColorLight: '#80CDDE',
  quaternaryBackgroundColorDefault: '#41B4CE',
  quaternaryBackgroundColorDark: '#41B4CE',

  // brown
  quinaryBackgroundColorLight: '#CDA888',
  quinaryBackgroundColorDefault: '#B57E4D',
  quinaryBackgroundColorDark: '#9A6B42',

  // white
  whiteBackground: '#F7F7F7',

  // black
  blackBackground: '#1A1A1A',

  primaryFontColor: '#212121',
  secondaryFontColor: '#6D6D6D',
  tertiaryFontColor: ''
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

  heading: string;
  paragraph: string;
  image?: string;

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

const SectionTextAndCards: React.FC<SectionTextAndCardsProps> = (props) => {
  const {
    card1Heading, card1Paragraph, card1Image, card1ButtonPrimaryCaption, card1Listitem1, card1Listitem2, card1Listitem3,
    card2Heading, card2Paragraph, card2Image, card2ButtonPrimaryCaption, card2Listitem1, card2Listitem2, card2Listitem3,   
    card3Heading, card3Paragraph, card3Image, card3ButtonPrimaryCaption, card3Listitem1, card3Listitem2, card3Listitem3, 
    card4Heading, card4Paragraph, card4Image, card4ButtonPrimaryCaption, card4Listitem1, card4Listitem2, card4Listitem3,
    heading, paragraph, image
  } = props;
  return (

  <>
    <div className='min-h-screen '>

    <div className="flex flex-col h-full justify-start items-start md:flex-row">

      {/* left box */}
      <div className="flex flex-col px-5 justify-center  h-1/2 w-full md:m-12 md:h-fit md:w-7/12 items-start">
          <br></br>
          <div className="flex flex-col p-8 h-auto w-auto justify-center items-start md:full ">
            <h3 style={{ color: cdColors.secondaryFontColor }}>{heading}</h3>
            <br></br>
            <p className="">{paragraph}</p>
        </div>
      </div> 
  
      {/* right box */}
      {image && (
        <div className="flex flex-col h-fit m-6 w-auto justify-around items-center md:h-fit md:w-7/12">
          <img className='h-fit p-12 md:p-18' src={image} alt="Placeholder" />
        </div>
      )}

</div>

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