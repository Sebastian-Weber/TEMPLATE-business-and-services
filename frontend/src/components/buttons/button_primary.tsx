interface ButtonPrimaryProps {
  caption: string;
}

function Button_primary({ caption }: ButtonPrimaryProps) {
    return (
      <button className="custom-button-primary">{caption}</button>
    )
  }
  
  export default Button_primary