import React from 'react'
import { FaReact } from "react-icons/fa"
import style from './css/Header.module.css'

export const Header = () => {
    

    return (
        <header className={style.header}>

                <a href='/' className={style.icon}>
                    <FaReact size={50}/>
                </a>

                <ul>

                    <li>
                        <a href="#projects">Projetos</a>
                    </li>
                    <li>
                        <a href="#tecnologies">Tecnologias</a>
                    </li>
                    <li>
                        <a href="#contato">Contato</a>
                    </li>
                </ul>
            
        </header>
    )
}