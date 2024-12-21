import React from 'react';

interface TextAreaProps {
  caption: string;
  placeholder: string;
  alt: string;
}
const Text_area: React.FC<TextAreaProps> = ({ caption, placeholder, alt }) => {
  return (
    <>
    <div className='flex flex-col justify-start items-start'>
        <label className='px-1 -mb-1' aria-label={alt}>{caption}</label>
        <textarea className="text-md font-mono px-1 my-1 w-full border-2 h-40 w-fill text-gray-600" placeholder={placeholder}></textarea>
    </div>
    </>
  );
};

export default Text_area;

