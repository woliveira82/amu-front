import React, { Component } from "react";

import "./styles.css";
import artigoDeMae from "./ArtigosdeMae.png";

export default class Email extends Component {
    render () {
        return <div id="enterEmail">
            <div className="box-content box-image">
                <img id="artigoDeMaeLogo" src={artigoDeMae} alt="Artigos de Mãe" />
            </div>
            <div className="box-content box-text bg-pink">
                <h1>Nunca pare,</h1>
                <h1>aprenda sempre</h1>
            </div>
            <div className="box-content box-image" id="brigadeiros">
            </div>
            <div className="box-content box-text email-signup">
                <h1>Oi confeiteira</h1>
                <p>Estamos trabalhando muito para criar um curso abrangente que vai auxiliar você a crescer e ganhar prática na cozinha. Se quizer ficar por dentro das novidades e ganhar um desconto especial cadastre seu e-mail aqui.</p>
                <div id="inputEmail">
                    <input type="email"/><button>CADASTRAR</button>
                </div>
            </div>
        </div>;
    };
};
