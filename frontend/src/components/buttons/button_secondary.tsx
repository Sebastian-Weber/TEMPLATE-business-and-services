import { Link } from 'react-router-dom';

const cdColors = {
  primaryColor: '#98BB48',
  secondaryColor: '#FFF1B7',
  primaryAccentColor: '',
  secondaryAccentColor: '',
  primaryBackgroundColorDark: '#165287',
  primaryBackgroundColorDefault: '#1D6DB4',
  primaryBackgroundColorLight: '#ACC6DD',
  secondaryBackgroundColorDark: '#165287',
  secondaryBackgroundColorDefault: '#165287',
  secondaryBackgroundColorLight: '#165287',
  tertiaryBackgroundColorDark: '#165287',
  tertiaryBackgroundColorDefault: '#165287',
  tertiaryBackgroundColorLight: '#165287',
  quaternaryBackgroundColorDark: '#165287',
  quaternaryBackgroundColorDefault: '#165287',
  quaternaryBackgroundColorLight: '#165287',
  primaryFontColor: '#191A1E',
  secondaryFontColor: '#817E72',
  tertiaryFontColor: '#D6D5CB'
};



interface ButtonSecondaryProps {
  buttonSecondaryCaption: string;
  buttonSecondaryLink: string;
}

function Button_secondary({ buttonSecondaryCaption, buttonSecondaryLink }: ButtonSecondaryProps) {
    return (
      <Link to={`/${buttonSecondaryLink}`}>
        <button style={{ color: cdColors.primaryColor, backgroundColor: cdColors.secondaryColor }} className="font-semibold text-sm px-4 py-2  my-2 rounded-md hover:opacity-50 transition ease-in-out delay-50">{buttonSecondaryCaption}</button>
      </Link>
    )
  }
  
  export default Button_secondary


