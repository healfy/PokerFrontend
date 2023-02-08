import Sign  from 'Pages/Login'
import Register  from 'Pages/Register'
import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import {Tables} from "Pages/GameRoom";
import Header from "Components/Header";
import {IndexPage} from "Pages/Index";
import {GameTable} from "Pages/GameTable";
import {UserProfile} from "Pages/UserProfile"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<IndexPage/>}/>
                <Route path="/sign" element={<Sign/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/tables" element={<Tables/>}/>
                <Route path="/tables/:id" element={<GameTable/>}/>
                <Route path="/users/:id" element={<UserProfile/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter