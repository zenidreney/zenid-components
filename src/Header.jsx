import "./Header.css"
import { BiLogoGithub } from "react-icons/bi";

function Header() {
    return (

        <header>
            <div>
                <h1>React Components ++</h1>
                <a className="github-link" href="https://github.com/zenidreney/zenid-components/tree/main/src/components">
                Quick Link to components<BiLogoGithub />
                </a>
            </div>
            <nav>
                <ul>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#badge">badge</a></li>
                    <li><a href="#banner">banner</a></li>
                    <li><a href="#card">card</a></li>
                    <li><a href="#star">star</a></li>
                    <li><a href="#button">button</a></li>
                    <li><a href="#menu">menu</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header