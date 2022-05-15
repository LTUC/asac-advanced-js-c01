import React,{useState} from 'react'; //under ver 17

export const ThemeContext = React.createContext(); //used by the consumer

export default function ThemeProvider(props) {
    const [mode,setMode] = useState('dark');

    function toggleMode() {
        // let username='obeida';
        let newMode = (mode=='dark') ? 'light' : 'dark';
        setMode(newMode);
    }

    const state = {mode,setMode,toggleMode};

    return(
        <ThemeContext.Provider value={state} >
            {props.children}
        </ThemeContext.Provider>
    )
}