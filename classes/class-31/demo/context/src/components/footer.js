import { SettingsContext } from "../context/site";
import { Card, Elevation } from "@blueprintjs/core";
import { useContext } from "react";
import { ThemeContext } from '../context/theme';



export default function Footer(props) {
    const site = useContext(SettingsContext);
    const theme = useContext(ThemeContext);

    return (
        <footer>
            <Card  className={`bp4-${theme.mode}`} elevation={Elevation.TWO}>   
                <p>All right reserved 2022 {site.title}</p>
            </Card>
        </footer>
    )
}