import React from "react";
import "../Footer.css";

const currentYear = new Date().getFullYear();
function Footer() {
    return (
        <footer className="Footer">
            <p>Copyright &copy; {currentYear} </p>
        </footer>
    );
}

export default Footer;