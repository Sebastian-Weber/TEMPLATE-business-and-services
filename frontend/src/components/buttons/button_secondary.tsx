import { Link } from 'react-router-dom';
import cdColors from '../../utils/cdColors';


interface ButtonSecondaryProps {
  buttonSecondaryCaption: string;
  buttonSecondaryLink?: string;
}

function Button_secondary({ buttonSecondaryCaption, buttonSecondaryLink }: ButtonSecondaryProps) {
    return (
      <Link to={`/${buttonSecondaryLink}`}>
        <button style={{ color: cdColors.primaryColor, backgroundColor: cdColors.secondaryColor }} className="font-bold text-sm px-4 py-2 my-2 rounded-md hover:opacity-50 transition ease-in-out delay-50">{buttonSecondaryCaption}</button>
      </Link>
    )
  }
  
  export default Button_secondary


