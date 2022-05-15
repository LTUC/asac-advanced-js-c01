import { Button,Navbar,Alignment } from '@blueprintjs/core';
import {useContext} from 'react';
import { ThemeContext } from '../context/theme';

export default function Header(props) {

    const theme = useContext(ThemeContext); //mode,setMode,toggleMode

    return (
        <header>
            <Navbar className={`bp4-${theme.mode}`}>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>Context from mode: {theme.mode}</Navbar.Heading>
                    <Button icon='refresh' onClick={theme.toggleMode}/>
                </Navbar.Group>
            </Navbar>
        </header>
    )
}