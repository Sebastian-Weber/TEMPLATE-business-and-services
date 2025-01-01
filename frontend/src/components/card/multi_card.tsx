// import React from 'react'
import Button_primary from '../buttons/button_primary'




  interface ListProps {

    listitem1: string;
  
    listitem2: string;
  
    listitem3: string;

  }


interface MultCardProps {
  heading: string;
  paragraph: string;
  image?: string;
  background: string;
  buttonPrimaryProps?: {
    buttonPrimaryCaption?: string;
    buttonPrimaryLink?: string;
  };
  listitem1?: string;
  listitem2?: string;
  listitem3?: string;
  listitem4?: string;
}

function MultiCard({ heading, paragraph, image, background, buttonPrimaryProps, listitem1, listitem2, listitem3, listitem4 }: MultCardProps & ListProps) {

    return (
  
      <div className='flex flex-col w-full h-full md:justify-start md:items-start m-4 p-12 rounded-lg' style={{ background }}>
  
       <div className='flex flex-col items-start justify-start md:flex-row-reverse md:justify-between md:items-center md:w-full'>

       {image && <img className='h-fit p-12 md:p-18' src={image} alt="Placeholder" />}
          <br></br>
          <h3 className='w-full'>{heading}</h3>

        </div>
        <br></br>
        <p>{paragraph}</p>
        <br></br>
        <ul>
  
          <li>{listitem1}</li>
  
          <li>{listitem2}</li>
  
          <li>{listitem3}</li>
  
          <li>{listitem4}</li>
          <br></br>
  
        </ul>
  
        {buttonPrimaryProps && buttonPrimaryProps.buttonPrimaryCaption && buttonPrimaryProps.buttonPrimaryLink && (
          <Button_primary 
            buttonPrimaryCaption={buttonPrimaryProps.buttonPrimaryCaption || ''} 
            buttonPrimaryLink={buttonPrimaryProps.buttonPrimaryLink || ''} 
          />
        )}
  
      </div>
    );
}

export default MultiCard



