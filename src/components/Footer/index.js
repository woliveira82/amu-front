import React from "react";

import "./styles.css";
import InstaIcon from "../InstaIcon";
import FaceIcon from "../FaceIcon";

const Footer = () => (
    <footer id="main-footer">
        <div id="social">
            <InstaIcon />
            <FaceIcon />
        </div>
        <div id="copyright">Artigos de Mãe - 2020</div>
    </footer>
);

export default Footer;