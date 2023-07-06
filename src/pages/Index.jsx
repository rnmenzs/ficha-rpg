import React from "react"
import ReactDom from "react-dom"

import NavBar from "../components/NavBar.jsx"

import "../styles/Index.css"

export default function Index() {
    return <>
        <div className="body-index">
            <NavBar/>
        </div>
        <div className="content">
            <a href="/create"><p>Começar</p></a>
            <a href="#"><p>Continuar</p></a>
            <a href="#"><p>Ajuda</p></a>
        </div>
    </>
}