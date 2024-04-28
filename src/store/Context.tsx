import React, { createContext, useState } from "react";

export interface MyContextProviderProps {
  children: React.ReactNode;
}
export interface IContext {
  value: {
    name: string;
    age: string;
  };
  setValue: (value: { name: string; age: string }) => void;
}

const initialState: IContext = {
  value: {
    name: "Adam",
    age: "25",
  },
  setValue: () => {},
};

const MyContext = createContext<IContext>(initialState);

const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const [value, setValue] = useState(initialState.value);

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
