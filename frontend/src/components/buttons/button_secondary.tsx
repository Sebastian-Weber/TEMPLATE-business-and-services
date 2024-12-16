interface ButtonSecondaryProps {
  caption: string;
}

function Button_secondary({ caption }: ButtonSecondaryProps) {
    return (
      <button className="custom-button-secondary">{caption}</button>
    )
  }
  
  export default Button_secondary