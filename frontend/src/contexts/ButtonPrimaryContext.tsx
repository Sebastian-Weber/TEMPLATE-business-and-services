import React, { createContext, useContext } from 'react';

interface ButtonPrimaryContextProps {
  buttonPrimaryCaption: string;
  buttonPrimaryLink: string;
  setButtonPrimaryCaption: (caption: string) => void;
  setButtonPrimaryLink: (link: string) => void;
}

const ButtonPrimaryContext = createContext<ButtonPrimaryContextProps | undefined>(undefined);

export const useButtonPrimaryContext = () => {
  const context = useContext(ButtonPrimaryContext);
  if (!context) {
    throw new Error('useButtonPrimaryContext must be used within a ButtonPrimaryProvider');
  }
  return context;
};

export const ButtonPrimaryProvider: React.FC<React.PropsWithChildren<{ value: ButtonPrimaryContextProps }>> = ({ value, children }) => {
  return (
    <ButtonPrimaryContext.Provider value={value}>
      {children}
    </ButtonPrimaryContext.Provider>
  );
};
