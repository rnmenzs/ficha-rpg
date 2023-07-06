
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Index from "./pages/Index.jsx"
import Create from "./pages/Create.jsx"


export default function Router()
{
    return <BrowserRouter>
        <Routes>

            <Route index path="/" element={ <Index/> }/>

            <Route index path="/create" element={ <Create/> }/>

        </Routes>
    </BrowserRouter>
}