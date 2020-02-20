import React, { Component } from "react";

import "./styles.css";
import artigoDeMae from "./ArtigosdeMae.png";

export default class Email extends Component {
    render () {
        return <div id="enterEmail">
            <div class="box-content">
                <img id="artigoDeMaeLogo" src={artigoDeMae} alt="Artigos de Mãe" />
            </div>
            <div class="box-content bg-pink">
                <p><h1>Nunca pare,</h1></p>
                <p><h1>aprenda sempre</h1></p>
            </div>
            <div class="box-content">
                <p>IMAGEM DE COMIDA</p>
            </div>
            <div class="box-content email-signup">
                <h1>Oi confeiteira</h1>
                <p>Estamos trabalhando muito para criar um curso abrangente que vai auxiliar você a crescer e ganhar prática na cozinha. Se quizer ficar por dentro das novidades e ganhar um desconto especial cadastre seu e-mail aqui.</p>
                <div id="inputEmail">
                    <input type="email"/><button>Cadastrar</button>
                </div>
            </div>
        </div>;
    };
};
