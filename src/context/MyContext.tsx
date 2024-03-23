import React from "react";

type MyContextData = {
    step: number
    setStep: (step: number) => void
}

const MyContext = React.createContext<MyContextData>({
    step: 1,
    setStep: () => {}
});

export default MyContext;