import React,{useState} from 'react';

export const SettingsContext = React.createContext();

export default function SettingsProvider(props) {
    const [title,setTitle] = useState('My site');
    const state = {title,setTitle};

    return(
        <SettingsContext.Provider value={state}>
            {props.children}
        </SettingsContext.Provider>
    )

}