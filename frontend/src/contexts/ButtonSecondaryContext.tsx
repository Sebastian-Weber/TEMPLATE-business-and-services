import React, { createContext, useContext } from 'react';

interface ButtonSecondaryContextProps {
  buttonPrimaryCaption: string;
  buttonPrimaryLink: string;
  setButtonPrimaryCaption: (caption: string) => void;
  setButtonPrimaryLink: (link: string) => void;
}

const ButtonSecondaryContext = createContext<ButtonSecondaryContextProps | undefined>(undefined);

export const useButtonSecondaryContext = () => {
  const context = useContext(ButtonSecondaryContext);
  if (!context) {
    throw new Error('useButtonSecondaryContext must be used within a ButtonSecondaryProvider');
  }
  return context;
};

export const ButtonSecondaryProvider: React.FC<React.PropsWithChildren<{ value: ButtonSecondaryContextProps }>> = ({ value, children }) => {
  return (
    <ButtonSecondaryContext.Provider value={value}>
      {children}
    </ButtonSecondaryContext.Provider>
  );
};
