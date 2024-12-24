import React from 'react';

interface ListProps {
  listItems: string[];
}

const List: React.FC<ListProps> = ({ listItems }) => {
  return (
    <ul className="list-disc pl-5 mt-4">
      {listItems.map((item, index) => (
        <li key={index} className="mt-2">{item}</li>
      ))}
    </ul>
  );
};

export default List;