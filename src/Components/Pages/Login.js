import React from "react"
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Container, Logo } from "./styled"
import { FiLogIn } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Header/Header";

const Login = () => {
    return(
        <div>
            <Header />
        <Container>
            
            <div className="container-login">
            <form className="login-form">
            <span>THINK FORNECEDOR</span>

                <input className="input"
                placeholder="Usuário"
                />

                <input className="input"
                placeholder="Senha"
                />
                <div>
                <FontAwesomeIcon icon="fa-solid fa-user" />
            <button className="btn-button" >LOGIN <FiLogIn /></button>
           
            </div>
            </form>
        </div>
        <Logo>
            <h2>THINK</h2>
        </Logo>
        </Container>
        </div>
    )
}
export default Login