import cdColors from '../../utils/cdColors';

interface ButtonPrimaryProps {
  buttonPrimaryCaption: string;
  buttonPrimaryLink?: string;
}


const Button_primary = ({ buttonPrimaryCaption, buttonPrimaryLink }: ButtonPrimaryProps) => {

  return (
    <a href={buttonPrimaryLink}>
      <button
        style={{ color: cdColors.tertiaryFontColor, backgroundColor: cdColors.primaryColor }}
        className="font-bold text-sm px-4 py-2 mr-1 my-2 rounded-md hover:opacity-50 transition ease-in-out delay-50"
      >
        {buttonPrimaryCaption}
      </button>
    </a>
  );
};

export default Button_primary;