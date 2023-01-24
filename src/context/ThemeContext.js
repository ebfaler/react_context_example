import { createContext, useState, useEffect } from "react";

//create context sets up context and returns an object with a Providr and a Consumer
//setting default value to null
const ThemeContext = createContext(null);

export const ThemeProvider = (props) => {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [accentColor, setAccentColor] = useState('#63537d');
    const [fontPercentage, setFontPercentage] = useState(100);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
        document.body.style.fontSize = `${fontPercentage}%`;
    }, [isDarkMode, fontPercentage]);



    const toggleDarkMode = () => {
        setIsDarkMode(currentMode => !currentMode);
    }

    return (
        //  So props.children is going to pass anything we include between the opening/closing Provider tags
        <ThemeContext.Provider value={{

            isDarkMode,
            accentColor,
            fontPercentage,
            actions: {
                toggleDarkMode,
                updateAccentColor: setAccentColor,
                updateFontPercentage: setFontPercentage

            }
        }}>
            {props.children}
        </ThemeContext.Provider>


    );


}


export default ThemeContext;

