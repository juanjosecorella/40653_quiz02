import { useState } from "react";
import MyContext from "./MyContext";

export interface IThemeProviderProps {
    children: React.ReactNode;
}  
  // Create a ThemeProvider component to provide the context value to child components
  export const MyProvider: React.FC<IThemeProviderProps> = ({ children }) => {
    
    let [step, setStep] = useState(1);

    return (
      <MyContext.Provider value={{step, setStep}} >
         {children}
      </MyContext.Provider>
    );
  };