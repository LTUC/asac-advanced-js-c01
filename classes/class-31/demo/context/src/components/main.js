import { useContext } from "react";
import { ThemeContext } from "../context/theme";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";


export default function Main(props) {
    const theme = useContext(ThemeContext);
    return(
        <main className={theme.mode}>
            <Header/>
            <Content/>
            <Footer/>
        </main>
    )
}