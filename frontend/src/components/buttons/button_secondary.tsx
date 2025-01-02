import { Link } from 'react-router-dom';

const cdColors = {
  primaryColor: '#A8CF4E',
  secondaryColor: '#F3F4A7',
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



interface ButtonSecondaryProps {
  buttonSecondaryCaption: string;
  buttonSecondaryLink?: string;
}

function Button_secondary({ buttonSecondaryCaption, buttonSecondaryLink }: ButtonSecondaryProps) {
    return (
      <Link to={`/${buttonSecondaryLink}`}>
        <button style={{ color: cdColors.primaryColor, backgroundColor: cdColors.secondaryColor }} className="font-semibold text-sm px-4 py-2  my-2 rounded-md hover:opacity-50 transition ease-in-out delay-50">{buttonSecondaryCaption}</button>
      </Link>
    )
  }
  
  export default Button_secondary


