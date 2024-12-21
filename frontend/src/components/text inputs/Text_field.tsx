import React from 'react';

interface TextFieldProps {
  caption: string;
  placeholder: string;
  alt: string;
}
const Text_field: React.FC<TextFieldProps> = ({ caption, placeholder, alt }) => {
  return (
    <>
    <div className='flex flex-col justify-start items-start w-full'>
        <label className='-px-1 -mb-1' aria-label={alt}>{caption}</label>
        <input type="text" className="text-md font-mono px-1 my-1 w-full border-2 text-gray-600" placeholder={placeholder}></input>
    </div>
    </>
  );
};

export default Text_field;