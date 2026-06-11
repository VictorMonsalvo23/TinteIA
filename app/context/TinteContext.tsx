import { createContext, useContext, useState } from 'react';

const TinteContext = createContext<any>(null);

export function TinteProvider({ children }: any) {
  const [foto, setFoto] = useState('');
  const [colorBase, setColorBase] = useState('');
  const [colorDeseado, setColorDeseado] = useState('');

  return (
    <TinteContext.Provider
      value={{
        foto,
        setFoto,
        colorBase,
        setColorBase,
        colorDeseado,
        setColorDeseado,
      }}
    >
      {children}
    </TinteContext.Provider>
  );
}

export function useTinte() {
  return useContext(TinteContext);
}