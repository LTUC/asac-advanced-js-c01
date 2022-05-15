import { useContext } from "react";
import { SettingsContext } from "../context/site";
import { ThemeContext } from "../context/theme";


export default function Content(props) {
    const site = useContext(SettingsContext);
    const theme = useContext(ThemeContext);

  
    const titleHandler = e =>{
        e.preventDefault();
        site.setTitle(e.target.value);
    }

    return (
        <div>
            <p>Site: {site.title}</p>
            <p>Current Mode: {theme.mode}</p>
            <form>
                <input type="text" value={site.title} onChange={titleHandler} />
            </form>
        </div>
    )
}